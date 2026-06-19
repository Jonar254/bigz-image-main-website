const LOGO_CARDS = [
  { id: 'schools2030-full', name: 'Schools2030', image: '/images/client-logo/1642357279-schools-2030-logo-cmyk-01-768x399.webp' },
  { id: 'aga-khan', name: 'Aga Khan Foundation', image: '/images/client-logo/Aga%20Khan%20Foundation%20LOGO_raster.webp', size: 'small' },
  { id: 'akhf', name: 'AKHS Mombasa', image: '/images/client-logo/AKHS%20MOMBASA.webp', size: 'small' },
  { id: 'action-hunger', name: 'Action Against Hunger', image: '/images/client-logo/ACTION%20AGANIST%20HUNGER.webp', size: 'small' },
  { id: 'ahf', name: 'AHF Kenya', image: '/images/client-logo/AHF%20KENYA.webp', size: 'small' },
  { id: 'icrh', name: 'ICRH Kenya', image: '/images/client-logo/ICRH%20KENYA.webp', size: 'small' },
  { id: 'philips', name: 'Philips', image: '/images/client-logo/Philips_logo_PNG3.webp', size: 'featured' },
  { id: 'partners', name: 'Partners En', image: '/images/client-logo/partners-partenaires-colors-en.webp' },
  { id: 'official-logo', name: 'Official Logo', image: '/images/client-logo/Official%20logo%20English%2028%20Rays%5B1%5D.webp', size: 'small' },
  { id: 'images', name: 'Images', image: '/images/client-logo/images.webp', size: 'small' },
];

const LogoTile = ({ name, image, size = 'default' }) => {
  const sizeClasses = {
    small: 'max-w-[70%] max-h-[70%] md:max-w-[75%] md:max-h-[75%]',
    featured: 'max-w-[88%] max-h-[88%] md:max-w-[92%] md:max-h-[92%]',
    default: 'max-w-[78%] max-h-[78%] md:max-w-[82%] md:max-h-[82%]',
  }[size] || 'max-w-[78%] max-h-[78%] md:max-w-[82%] md:max-h-[82%]';
  return (
    <div className="bg-white aspect-[16/9] flex items-center justify-center p-4 sm:p-5 md:p-6 lg:p-8">
      <img 
        src={image} 
        alt={`${name} logo`} 
        className={`${sizeClasses} h-full w-full object-contain`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const BrandLogos = ({ title = 'Trusted by Global Brands', className = '' }) => (
  <section className={`bg-white text-black py-20 md:py-28 px-6 md:px-12 ${className}`}>
    <div className="max-w-[1500px] mx-auto">
      <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-medium tracking-[-0.01em] mb-8 md:mb-12">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-neutral-200 border border-neutral-200">
        {LOGO_CARDS.map((logo) => (
          <LogoTile key={logo.id} name={logo.name} image={logo.image} size={logo.size} />
        ))}
      </div>
    </div>
  </section>
);

export default BrandLogos;
