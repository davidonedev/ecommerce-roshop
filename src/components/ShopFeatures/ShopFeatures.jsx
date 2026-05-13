import './ShopFeatures.scss';

const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'High Quality',
    subtitle: 'crafted from top materials',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Warranty Protection',
    subtitle: 'Over 2 years',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Free Shipping',
    subtitle: 'Order over 150 $',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    title: '24 / 7 Support',
    subtitle: 'Dedicated support',
  },
];

export default function ShopFeatures() {
  return (
    <section className="shop-features">
      <div className="shop-features__inner">
        {features.map((f) => (
          <div key={f.id} className="shop-features__item">
            <span className="shop-features__icon" aria-hidden="true">
              {f.icon}
            </span>
            <div>
              <h3 className="shop-features__title">{f.title}</h3>
              <p className="shop-features__subtitle">{f.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
