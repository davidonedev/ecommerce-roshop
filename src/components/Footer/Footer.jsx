import { Link } from 'react-router-dom';

const links = [
  { label: 'Início', to: '/' },
  { label: 'Loja', to: '/shop' },
  { label: 'Sobre', to: '/about' },
  { label: 'Contato', to: '/contact' },
];

const help = [
  { label: 'Formas de Pagamento', href: '#' },
  { label: 'Trocas e Devoluções', href: '#' },
  { label: 'Política de Privacidade', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8D0D4]">
      <div className="grid grid-cols-[2fr_1fr_1fr_2fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 max-w-[1240px] mx-auto px-6 py-[72px] max-sm:py-12">
        {/* Brand */}
        <div className="max-w-[280px]">
          <Link to="/" className="flex items-center gap-1.5 mb-7">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path d="M 8 6 L 8 34" stroke="#AC274F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M 8 6 L 20 6 C 31 6 31 20 20 20 L 8 20 M 8 20 L 22 20 C 34 20 34 34 22 34 L 8 34" stroke="#AC274F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="font-poppins text-2xl font-bold text-dark">Bella Store</span>
          </Link>
          <address className="font-poppins text-sm text-light leading-[1.8] not-italic">
            400 University Drive Suite 200 Coral<br />
            Gables,<br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <p className="font-poppins text-base font-semibold text-light mb-7 capitalize tracking-[0.02em]">Links</p>
          <ul className="flex flex-col gap-[18px]">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="font-poppins text-sm text-dark font-medium transition-colors duration-200 hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <p className="font-poppins text-base font-semibold text-light mb-7 capitalize tracking-[0.02em]">Ajuda</p>
          <ul className="flex flex-col gap-[18px]">
            {help.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-poppins text-sm text-dark font-medium transition-colors duration-200 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-poppins text-base font-semibold text-light mb-7 capitalize tracking-[0.02em]">Newsletter</p>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="flex-1 border-0 border-b border-b-dark pb-2 font-poppins text-[13px] text-dark outline-none bg-transparent min-w-0 placeholder:text-light focus:border-b-primary transition-colors duration-200"
              aria-label="E-mail para newsletter"
            />
            <button
              type="submit"
              className="border-0 border-b border-b-dark font-poppins text-[13px] font-semibold text-dark tracking-[0.06em] pb-2 uppercase whitespace-nowrap hover:text-primary hover:border-b-primary transition-colors duration-200"
            >
              Assinar
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#E8D0D4] py-7 px-6 max-w-[1240px] mx-auto">
        <p className="font-poppins text-[13px] text-medium font-medium">
          2023 Bella Store. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
