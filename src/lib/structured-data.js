export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BigzImage",
  "url": "https://www.bigzimage.com",
  "logo": "https://www.bigzimage.com/images/Logo/Transparent Background/PNGs/bigz-logo-one.webp",
  "description": "BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressRegion": "Nairobi"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.instagram.com/bigzimage",
    "https://www.facebook.com/bigzimage"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "BigzImage",
  "image": "https://www.bigzimage.com/og-image.jpg",
  "url": "https://www.bigzimage.com",
  "telephone": "+254-XXX-XXX-XXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressRegion": "Nairobi",
    "addressLocality": "Nairobi"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.286389,
    "longitude": 36.817223
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Kenya"
    },
    {
      "@type": "Country",
      "name": "Tanzania"
    },
    {
      "@type": "Country",
      "name": "Uganda"
    }
  ]
};

export const serviceSchema = (serviceName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "Organization",
    "name": "BigzImage",
    "url": "https://www.bigzimage.com"
  },
  "description": description,
  "url": url,
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  }
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.bigzimage.com${item.url}`
  }))
});

export const photographActionSchema = {
  "@context": "https://schema.org",
  "@type": "PhotographAction",
  "agent": {
    "@type": "Organization",
    "name": "BigzImage"
  },
  "result": {
    "@type": "Photograph",
    "about": "Corporate events, documentaries, and development sector photography"
  }
};

export const videoObjectSchema = (title, description, thumbnailUrl, uploadDate) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": title,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "uploadDate": uploadDate,
  "contentUrl": "https://www.bigzimage.com"
});

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BigzImage",
  "url": "https://www.bigzimage.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.bigzimage.com/work?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
