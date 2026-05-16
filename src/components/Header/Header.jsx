import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const NavLinks = [
  { label: 'Início', to: '/' },
  { label: 'Loja', to: '/shop' },
  { label: 'Sobre', to: '/about' },
  { label: 'Contato', to: '/contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const { totalCount, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      {/* ── Main bar ── */}
      <div className="h-[72px] sm:h-[100px] flex justify-between items-center px-5 sm:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          {/* Mobile: B preenchido em círculo primary */}
          <div className="md:hidden w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <svg className="w-[22px] h-[22px]" viewBox="0 0 40 40" fill="none">
              <path d="M 8 6 L 8 34" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 8 6 L 20 6 C 31 6 31 20 20 20 L 8 20 M 8 20 L 22 20 C 34 20 34 34 22 34 L 8 34" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Desktop: B stroke normal */}
          <svg className="hidden md:block w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
            <path d="M 8 6 L 8 34" stroke="#AC274F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M 8 6 L 20 6 C 31 6 31 20 20 20 L 8 20 M 8 20 L 22 20 C 34 20 34 34 22 34 L 8 34" stroke="#AC274F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>

          <span className="font-poppins font-bold text-[18px] md:text-[26px] text-dark tracking-[-0.5px] whitespace-nowrap">
            Bella Store
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
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
        <div className="flex items-center gap-4 sm:gap-7">
          {/* Desktop-only icons */}
          <button aria-label="Conta" className="hidden sm:flex p-1 text-dark items-center justify-center transition-colors duration-200 hover:text-primary">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button aria-label="Busca" className="hidden sm:flex p-1 text-dark items-center justify-center transition-colors duration-200 hover:text-primary">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button aria-label="Favoritos" className="hidden sm:flex p-1 text-dark items-center justify-center transition-colors duration-200 hover:text-primary">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          {/* Cart — always visible */}
          <button
            aria-label={`Carrinho (${totalCount} itens)`}
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

          {/* Hamburger — mobile only */}
          <button
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden p-1 text-dark flex items-center justify-center transition-colors duration-200 hover:text-primary"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="8" x2="21" y2="8"/>
                <line x1="3" y1="14" x2="21" y2="14"/>
                <line x1="3" y1="20" x2="21" y2="20"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden bg-white border-t border-[#E8D0D4] overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-5 pb-4">
          {NavLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-poppins font-medium text-base py-4 border-b border-[#F5EEF0] transition-colors duration-200 hover:text-primary ${
                pathname === link.to ? 'text-primary font-bold' : 'text-dark'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Secondary icons in mobile menu */}
          <div className="flex items-center gap-6 pt-5 pb-1">
            <button aria-label="Conta" className="p-1 text-dark hover:text-primary transition-colors duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button aria-label="Busca" className="p-1 text-dark hover:text-primary transition-colors duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button aria-label="Favoritos" className="p-1 text-dark hover:text-primary transition-colors duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
