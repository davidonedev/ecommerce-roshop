import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';

function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const COUNTRIES = ['Brasil', 'Portugal', 'Indonésia', 'Estados Unidos', 'Sri Lanka'];
const STATES = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná'];

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '',
    country: 'Brasil', street: '', city: '',
    state: 'São Paulo', zip: '', phone: '',
    email: '', additional: '',
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPlaced(true);
  }

  if (placed) {
    return (
      <>
        <Header />
        <main className="main-pad" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center px-6 py-10">
            <svg className="w-[72px] h-[72px] mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="#AC274F" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <h2 className="font-poppins text-[32px] font-bold text-dark mb-3">Pedido realizado com sucesso!</h2>
            <p className="font-poppins text-base text-medium mb-8">Obrigado pela sua compra. Entraremos em contato em breve.</p>
            <Link
              to="/"
              className="inline-block font-poppins text-base tracking-[0.04em] px-12 py-3.5 bg-dark text-white border border-dark hover:bg-black transition-all duration-200"
            >
              Voltar para o Início
            </Link>
          </div>
        </main>
        <ShopFeatures />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="main-pad">

        {/* ── Hero ── */}
        <section
          className="relative h-[180px] sm:h-[280px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1440&q=80')" }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.72)' }} />
          <div className="relative flex flex-col items-center gap-1 text-center">
            <svg className="w-14 h-14 mb-2" viewBox="0 0 40 40" fill="none">
              <path d="M 8 6 L 8 34" stroke="#AC274F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M 8 6 L 20 6 C 31 6 31 20 20 20 L 8 20 M 8 20 L 22 20 C 34 20 34 34 22 34 L 8 34" stroke="#AC274F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <h1 className="font-poppins text-[48px] font-bold text-dark leading-[1.1]">Finalizar Compra</h1>
            <nav className="flex items-center gap-1.5 font-poppins text-sm mt-1" aria-label="Navegação">
              <Link to="/" className="font-semibold text-dark hover:text-primary transition-colors duration-200">Início</Link>
              <svg className="w-3.5 h-3.5 text-medium" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="text-medium font-light">Finalizar Compra</span>
            </nav>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-[72px] pb-24 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 max-w-[1240px] mx-auto px-4 sm:px-6 items-start">

            {/* ── Billing Form ── */}
            <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
              <h2 className="font-poppins text-[36px] font-bold text-dark mb-3">Dados de Cobrança</h2>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex flex-col gap-2.5 flex-1">
                  <label className="font-poppins text-sm font-medium text-dark" htmlFor="firstName">Nome</label>
                  <input id="firstName" name="firstName" type="text"
                    className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                    value={form.firstName} onChange={handleChange} required />
                </div>
                <div className="flex flex-col gap-2.5 flex-1">
                  <label className="font-poppins text-sm font-medium text-dark" htmlFor="lastName">Sobrenome</label>
                  <input id="lastName" name="lastName" type="text"
                    className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                    value={form.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="company">
                  Nome da Empresa <span className="font-normal text-medium">(Opcional)</span>
                </label>
                <input id="company" name="company" type="text"
                  className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  value={form.company} onChange={handleChange} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="country">País / Região</label>
                <div className="relative flex items-center">
                  <select id="country" name="country"
                    className="w-full h-12 border border-[#9F9F9F] rounded px-4 pr-10 font-poppins text-sm text-dark bg-white appearance-none cursor-pointer focus:outline-none focus:border-primary transition-colors duration-200"
                    value={form.country} onChange={handleChange}>
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <svg className="absolute right-3.5 w-[18px] h-[18px] stroke-medium pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="street">Endereço</label>
                <input id="street" name="street" type="text"
                  className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  value={form.street} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="city">Cidade</label>
                <input id="city" name="city" type="text"
                  className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  value={form.city} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="state">Estado</label>
                <div className="relative flex items-center">
                  <select id="state" name="state"
                    className="w-full h-12 border border-[#9F9F9F] rounded px-4 pr-10 font-poppins text-sm text-dark bg-white appearance-none cursor-pointer focus:outline-none focus:border-primary transition-colors duration-200"
                    value={form.state} onChange={handleChange}>
                    {STATES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <svg className="absolute right-3.5 w-[18px] h-[18px] stroke-medium pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="zip">CEP</label>
                <input id="zip" name="zip" type="text"
                  className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  value={form.zip} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="phone">Telefone</label>
                <input id="phone" name="phone" type="tel"
                  className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  value={form.phone} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email"
                  className="h-12 border border-[#9F9F9F] rounded px-4 font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  value={form.email} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-2.5">
                <textarea id="additional" name="additional"
                  className="border border-[#9F9F9F] rounded px-4 py-3.5 font-poppins text-sm text-dark bg-white resize-y min-h-[108px] placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Informações Adicionais" value={form.additional}
                  onChange={handleChange} rows={4} />
              </div>
            </form>

            {/* ── Order Summary ── */}
            <div className="flex flex-col">

              <div className="flex justify-between pb-4 border-b border-[#E8D0D4] mb-4 font-poppins text-base font-semibold text-dark">
                <span>Produto</span>
                <span>Subtotal</span>
              </div>

              <div className="flex flex-col gap-3 mb-5">
                {items.length === 0 ? (
                  <p className="font-poppins text-sm text-light text-center py-4">Nenhum item no carrinho.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center gap-3">
                      <span className="font-poppins text-sm text-medium">
                        {item.name}&nbsp;
                        <span className="font-bold text-dark">x {item.qty}</span>
                      </span>
                      <span className="font-poppins text-sm text-medium whitespace-nowrap">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="flex justify-between items-center py-3.5 border-t border-[#E8D0D4] gap-3">
                <span className="font-poppins text-base font-medium text-dark">Subtotal</span>
                <span className="font-poppins text-base text-medium">{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between items-center py-3.5 border-t border-[#E8D0D4] gap-3">
                <span className="font-poppins text-base font-medium text-dark">Total</span>
                <span className="font-poppins text-[22px] font-bold text-primary">{formatPrice(subtotal)}</span>
              </div>

              <div className="h-px bg-[#E8D0D4] my-5" />

              <div className="flex flex-col gap-2.5 mb-5">
                <div className="flex items-center gap-2.5 font-poppins text-[15px] font-medium text-dark">
                  <span className="inline-block w-3 h-3 rounded-full bg-dark flex-shrink-0" />
                  <span>Transferência Bancária</span>
                </div>
                <p className="font-poppins text-[13px] text-light leading-[1.7]">
                  Realize o pagamento diretamente em nossa conta bancária. Use o número do seu
                  pedido como referência. Seu pedido não será enviado até que o pagamento seja confirmado.
                </p>

                <label className="flex items-center gap-2.5 font-poppins text-sm text-medium cursor-pointer">
                  <input type="radio" name="payment" value="bank"
                    className="w-4 h-4 accent-dark cursor-pointer"
                    checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                  Transferência Bancária
                </label>

                <label className="flex items-center gap-2.5 font-poppins text-sm text-medium cursor-pointer">
                  <input type="radio" name="payment" value="cod"
                    className="w-4 h-4 accent-dark cursor-pointer"
                    checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                  Pagamento na Entrega
                </label>
              </div>

              <p className="font-poppins text-xs text-medium leading-[1.7] mb-6">
                Seus dados pessoais serão usados para processar seu pedido, melhorar sua experiência
                neste site e para outras finalidades descritas em nossa{' '}
                <a href="#" className="text-dark font-semibold underline hover:text-primary transition-colors duration-200">política de privacidade.</a>
              </p>

              <button
                className="w-full max-w-[300px] h-14 bg-dark text-white border border-dark rounded-md font-poppins text-lg font-medium tracking-[0.02em] hover:bg-black transition-all duration-[250ms]"
                type="button"
                onClick={handleSubmit}
              >
                Fazer Pedido
              </button>
            </div>

          </div>
        </section>

        <ShopFeatures />
      </main>
      <Footer />
    </>
  );
}
