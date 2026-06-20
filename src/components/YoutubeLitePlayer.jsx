"use client";

import { useEffect, useMemo, useState } from 'react';
import {
  buildYouTubeEmbedUrl,
  buildYouTubeThumbnailCandidates,
  extractYouTubeId,
  YOUTUBE_PRECONNECT_ORIGINS,
} from '@/lib/youtube';

const fetchBestThumbnail = async (candidates = []) => {
  for (const candidate of candidates) {
    try {
      await new Promise((resolve, reject) => {
        const img = new Image();
        img.src = candidate;
        img.onload = () => resolve(candidate);
        img.onerror = reject;
      });
      return candidate;
    } catch (error) {
      // try next candidate
    }
  }
  return null;
};

const YoutubeLitePlayer = ({
  videoUrl,
  title,
  posterFallback,
  playLabel = 'Play video',
  autoPlayOnActivate = true,
  className = '',
}) => {
  const videoId = useMemo(() => extractYouTubeId(videoUrl), [videoUrl]);
  const [isActivated, setIsActivated] = useState(false);
  const [thumbnail, setThumbnail] = useState(posterFallback ?? null);

  useEffect(() => {
    let isMounted = true;
    setThumbnail(posterFallback ?? null);

    const loadThumbnail = async () => {
      const candidates = buildYouTubeThumbnailCandidates(videoUrl);
      if (!candidates.length) {
        return;
      }

      const best = await fetchBestThumbnail(candidates);
      if (best && isMounted) {
        setThumbnail(best);
      }
    };

    loadThumbnail();

    return () => {
      isMounted = false;
    };
  }, [posterFallback, videoUrl]);

  const embedSrc = useMemo(() => {
    if (!videoId || !isActivated) {
      return null;
    }
    return buildYouTubeEmbedUrl(videoId, { autoplay: autoPlayOnActivate, mute: false });
  }, [autoPlayOnActivate, isActivated, videoId]);

  const handleActivate = () => {
    if (!videoId) {
      return;
    }
    setIsActivated(true);
  };

  useEffect(() => {
    if (!isActivated) {
      return undefined;
    }

    const appended = new Set();

    YOUTUBE_PRECONNECT_ORIGINS.forEach((origin) => {
      const existing = document.querySelector(`link[data-youtube-preconnect="${origin}"]`);
      if (existing) {
        appended.add(existing);
        return;
      }

      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      link.crossOrigin = 'anonymous';
      link.dataset.youtubePreconnect = origin;
      document.head.appendChild(link);
      appended.add(link);
    });

    return () => {
      appended.forEach((link) => {
        if (link instanceof HTMLLinkElement && link.dataset.youtubePreconnect) {
          // keep link for subsequent plays to avoid removing useful preconnects
        }
      });
    };
  }, [isActivated]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isActivated && embedSrc ? (
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={handleActivate}
          aria-label={playLabel}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-0 h-full w-full bg-black" />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          <div className="relative flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
              <div className="ml-1 h-0 w-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-black" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default YoutubeLitePlayer;
