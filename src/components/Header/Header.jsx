import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

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
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white h-[100px] flex justify-between items-center px-10 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1.5 cursor-pointer">
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 32 L20 8 L35 32" stroke="#AC274F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M10 24 L30 24" stroke="#AC274F" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="font-poppins font-bold text-[26px] text-dark tracking-[-0.5px]">Furniro</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-12 max-md:hidden">
        {NavLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={`font-poppins font-medium text-base text-dark relative transition-colors duration-200 hover:text-primary
              after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-[250ms]
              ${pathname === link.to ? 'font-bold after:w-full' : 'after:w-0 hover:after:w-full'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Action icons */}
      <div className="flex items-center gap-7">
        <button aria-label="Account" className="p-1 text-dark flex items-center justify-center transition-colors duration-200 hover:text-primary">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>

        <button aria-label="Search" className="p-1 text-dark flex items-center justify-center transition-colors duration-200 hover:text-primary">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>

        <button aria-label="Wishlist" className="p-1 text-dark flex items-center justify-center transition-colors duration-200 hover:text-primary">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Cart */}
        <button
          aria-label={`Cart (${totalCount} items)`}
          className="p-1 text-dark flex items-center justify-center relative transition-colors duration-200 hover:text-primary"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          {totalCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] bg-primary text-white rounded-full text-[10px] font-bold flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
