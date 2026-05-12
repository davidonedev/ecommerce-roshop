import './Header.scss';

const NavLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <a href="#" className="header__logo">
        <svg className="header__logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 32 L20 8 L35 32" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M10 24 L30 24" stroke="#B88E2F" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="header__logo-text">Furniro</span>
      </a>

      {/* Navigation */}
      <nav className="header__nav">
        {NavLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={link.label === 'Home' ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Action icons */}
      <div className="header__actions">
        {/* Profile */}
        <button aria-label="Account">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>

        {/* Search */}
        <button aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>

        {/* Wishlist */}
        <button aria-label="Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Cart */}
        <button aria-label="Cart" style={{ position: 'relative' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span className="header__cart-badge">2</span>
        </button>
      </div>
    </header>
  );
}
