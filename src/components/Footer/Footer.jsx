import { Link } from 'react-router-dom';
import './Footer.scss';

const links = [
  { label: 'Início', to: '/' },
  { label: 'Loja', to: '/shop' },
  { label: 'Sobre', to: '#about' },
  { label: 'Contato', to: '/contact' },
];

const help = [
  { label: 'Formas de Pagamento', href: '#' },
  { label: 'Trocas e Devoluções', href: '#' },
  { label: 'Política de Privacidade', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        {/* Marca */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path d="M5 32 L20 8 L35 32" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M10 24 L30 24" stroke="#B88E2F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="footer__logo-text">Funiro.</span>
          </Link>
          <address className="footer__address">
            400 University Drive Suite 200 Coral<br />
            Gables,<br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <p className="footer__col-title">Links</p>
          <ul className="footer__col-links">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="footer__col-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ajuda */}
        <div>
          <p className="footer__col-title">Ajuda</p>
          <ul className="footer__col-links">
            {help.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer__col-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="footer__col-title">Newsletter</p>
          <form
            className="footer__newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="footer__newsletter-input"
              aria-label="E-mail para newsletter"
            />
            <button type="submit" className="footer__newsletter-btn">
              Assinar
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          2023 Funiro. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
