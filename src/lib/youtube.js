const YOUTUBE_ID_REGEX = /(?:embed\/|watch\?v=|youtu\.be\/|shorts\/|v\/)([\w-]{11})/i;

export const extractYouTubeId = (url) => {
  if (!url) {
    return null;
  }

  try {
    const videoIdFromRegex = url.match(YOUTUBE_ID_REGEX);
    if (videoIdFromRegex && videoIdFromRegex[1]) {
      return videoIdFromRegex[1];
    }

    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1);
    }

    if (parsed.searchParams.has('v')) {
      return parsed.searchParams.get('v');
    }
  } catch (error) {
    // ignore malformed urls
  }

  return null;
};

export const buildYouTubeThumbnailCandidates = (videoUrl) => {
  const videoId = extractYouTubeId(videoUrl);
  if (!videoId) {
    return [];
  }

  return ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', 'default'].map(
    (quality) => `https://img.youtube.com/vi/${videoId}/${quality}.jpg`,
  );
};

export const buildYouTubeEmbedUrl = (videoId, { autoplay = false, start, controls = 1, mute = false } = {}) => {
  if (!videoId) {
    return null;
  }

  const params = new URLSearchParams({
    rel: '0',
    playsinline: '1',
    modestbranding: '1',
    origin: typeof window !== 'undefined' ? window.location.origin : undefined,
  });

  if (autoplay) {
    params.set('autoplay', '1');
  }
  if (mute) {
    params.set('mute', '1');
  }
  if (start) {
    params.set('start', `${start}`);
  }
  if (controls === 0) {
    params.set('controls', '0');
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

export const YOUTUBE_PRECONNECT_ORIGINS = [
  'https://www.youtube.com',
  'https://www.google.com',
  'https://i.ytimg.com',
  'https://s.ytimg.com',
];
