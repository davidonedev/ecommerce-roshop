const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Alta Qualidade',
    subtitle: 'feito com os melhores materiais',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Garantia',
    subtitle: 'Mais de 2 anos',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Frete Grátis',
    subtitle: 'Pedidos acima de R$ 150',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    title: 'Suporte 24/7',
    subtitle: 'Atendimento dedicado',
  },
];

export default function ShopFeatures() {
  return (
    <section className="bg-cream py-20">
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 max-w-[1240px] mx-auto px-6">
        {features.map((f) => (
          <div key={f.id} className="flex items-center gap-5">
            <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-dark" aria-hidden="true">
              <span className="w-14 h-14 block">{f.icon}</span>
            </span>
            <div>
              <h3 className="font-poppins text-[22px] font-bold text-dark mb-1">{f.title}</h3>
              <p className="font-poppins text-sm text-medium">{f.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
