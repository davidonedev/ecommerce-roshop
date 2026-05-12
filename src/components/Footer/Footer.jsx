import './Footer.scss';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const help = [
  { label: 'Payment Options', href: '#' },
  { label: 'Returns', href: '#' },
  { label: 'Privacy Policies', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path d="M5 32 L20 8 L35 32" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M10 24 L30 24" stroke="#B88E2F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="footer__logo-text">Funiro.</span>
          </a>
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
                <a href={l.href} className="footer__col-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <p className="footer__col-title">Help</p>
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
              placeholder="Enter Your Email Address"
              className="footer__newsletter-input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="footer__newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          2023 furino. All rights reserved
        </p>
      </div>
    </footer>
  );
}
