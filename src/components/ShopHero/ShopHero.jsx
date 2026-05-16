import { Link } from 'react-router-dom';

export default function ShopHero() {
  return (
    <section
      className="relative h-[280px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=1440&q=80')" }}
    >
      {/* White overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.72)' }} />

      <div className="relative flex flex-col items-center gap-2 text-center">
        <h1 className="font-poppins text-[48px] font-bold text-dark leading-[1.1]">Loja</h1>
        <nav className="flex items-center gap-1.5 font-poppins text-sm text-dark" aria-label="Navegação">
          <Link to="/" className="font-semibold text-dark hover:text-primary transition-colors duration-200">
            Início
          </Link>
          <svg className="w-3.5 h-3.5 text-medium" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-medium font-light">Loja</span>
        </nav>
      </div>
    </section>
  );
}
