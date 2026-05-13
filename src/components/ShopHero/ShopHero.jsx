import { Link } from 'react-router-dom';
import './ShopHero.scss';

export default function ShopHero() {
  return (
    <section className="shop-hero">
      <div className="shop-hero__content">
        <h1 className="shop-hero__title">Loja</h1>
        <nav className="shop-hero__breadcrumb" aria-label="Navegação">
          <Link to="/" className="shop-hero__breadcrumb-home">Início</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span>Loja</span>
        </nav>
      </div>
    </section>
  );
}
