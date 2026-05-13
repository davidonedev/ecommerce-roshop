import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.scss';

const NavLinks = [
  { label: 'Início', to: '/' },
  { label: 'Loja', to: '/shop' },
  { label: 'Sobre', to: '#about' },
  { label: 'Contato', to: '/contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const { totalCount, setIsOpen } = useCart();

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="header__logo">
        <svg className="header__logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 32 L20 8 L35 32" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M10 24 L30 24" stroke="#B88E2F" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="header__logo-text">Furniro</span>
      </Link>

      {/* Navigation */}
      <nav className="header__nav">
        {NavLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={pathname === link.to ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Action icons */}
      <div className="header__actions">
        <button aria-label="Account">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>

        <button aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>

        <button aria-label="Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Cart */}
        <button
          aria-label={`Cart (${totalCount} items)`}
          style={{ position: 'relative' }}
          onClick={() => setIsOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          {totalCount > 0 && (
            <span className="header__cart-badge">{totalCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
