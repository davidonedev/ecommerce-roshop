import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import './CheckoutPage.scss';

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
        <main style={{ paddingTop: '100px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="checkout-success">
            <svg viewBox="0 0 24 24" fill="none" stroke="#B88E2F" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <h2>Pedido realizado com sucesso!</h2>
            <p>Obrigado pela sua compra. Entraremos em contato em breve.</p>
            <Link to="/" className="checkout-success__btn">Voltar para o Início</Link>
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
      <main style={{ paddingTop: '100px' }}>

        {/* ── Hero ── */}
        <section className="checkout-hero">
          <div className="checkout-hero__content">
            <svg className="checkout-hero__logo-icon" viewBox="0 0 40 40" fill="none">
              <path d="M5 32 L20 8 L35 32" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M10 24 L30 24" stroke="#B88E2F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <h1 className="checkout-hero__title">Finalizar Compra</h1>
            <nav className="checkout-hero__breadcrumb" aria-label="Navegação">
              <Link to="/" className="checkout-hero__bc-link">Início</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span>Finalizar Compra</span>
            </nav>
          </div>
        </section>

        {/* ── Conteúdo ── */}
        <section className="checkout-page">
          <div className="checkout-page__inner">

            {/* ── Formulário de cobrança ── */}
            <form className="billing-form" onSubmit={handleSubmit} noValidate>
              <h2 className="billing-form__title">Dados de Cobrança</h2>

              <div className="billing-form__row billing-form__row--two">
                <div className="billing-form__field">
                  <label className="billing-form__label" htmlFor="firstName">Nome</label>
                  <input id="firstName" name="firstName" type="text" className="billing-form__input"
                    value={form.firstName} onChange={handleChange} required />
                </div>
                <div className="billing-form__field">
                  <label className="billing-form__label" htmlFor="lastName">Sobrenome</label>
                  <input id="lastName" name="lastName" type="text" className="billing-form__input"
                    value={form.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="company">
                  Nome da Empresa <span className="billing-form__optional">(Opcional)</span>
                </label>
                <input id="company" name="company" type="text" className="billing-form__input"
                  value={form.company} onChange={handleChange} />
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="country">País / Região</label>
                <div className="billing-form__select-wrap">
                  <select id="country" name="country" className="billing-form__select"
                    value={form.country} onChange={handleChange}>
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <svg className="billing-form__select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="street">Endereço</label>
                <input id="street" name="street" type="text" className="billing-form__input"
                  value={form.street} onChange={handleChange} required />
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="city">Cidade</label>
                <input id="city" name="city" type="text" className="billing-form__input"
                  value={form.city} onChange={handleChange} required />
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="state">Estado</label>
                <div className="billing-form__select-wrap">
                  <select id="state" name="state" className="billing-form__select"
                    value={form.state} onChange={handleChange}>
                    {STATES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <svg className="billing-form__select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="zip">CEP</label>
                <input id="zip" name="zip" type="text" className="billing-form__input"
                  value={form.zip} onChange={handleChange} required />
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="phone">Telefone</label>
                <input id="phone" name="phone" type="tel" className="billing-form__input"
                  value={form.phone} onChange={handleChange} required />
              </div>

              <div className="billing-form__field">
                <label className="billing-form__label" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" className="billing-form__input"
                  value={form.email} onChange={handleChange} required />
              </div>

              <div className="billing-form__field">
                <textarea id="additional" name="additional" className="billing-form__textarea"
                  placeholder="Informações Adicionais" value={form.additional}
                  onChange={handleChange} rows={4} />
              </div>
            </form>

            {/* ── Resumo do pedido ── */}
            <div className="order-summary">

              <div className="order-summary__header">
                <span>Produto</span>
                <span>Subtotal</span>
              </div>

              <div className="order-summary__items">
                {items.length === 0 ? (
                  <p className="order-summary__empty">Nenhum item no carrinho.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="order-summary__item">
                      <span className="order-summary__item-name">
                        {item.name}&nbsp;
                        <span className="order-summary__item-qty">x {item.qty}</span>
                      </span>
                      <span className="order-summary__item-price">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="order-summary__row">
                <span className="order-summary__row-label">Subtotal</span>
                <span className="order-summary__row-value">{formatPrice(subtotal)}</span>
              </div>

              <div className="order-summary__row order-summary__row--total">
                <span className="order-summary__row-label">Total</span>
                <span className="order-summary__row-value order-summary__row-value--total">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="order-summary__divider" />

              <div className="order-summary__payment">
                <div className="order-summary__payment-selected">
                  <span className="order-summary__payment-dot" />
                  <span>Transferência Bancária</span>
                </div>
                <p className="order-summary__payment-desc">
                  Realize o pagamento diretamente em nossa conta bancária. Use o número do seu
                  pedido como referência. Seu pedido não será enviado até que o pagamento seja confirmado.
                </p>

                <label className="order-summary__radio">
                  <input type="radio" name="payment" value="bank"
                    checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                  Transferência Bancária
                </label>

                <label className="order-summary__radio">
                  <input type="radio" name="payment" value="cod"
                    checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                  Pagamento na Entrega
                </label>
              </div>

              <p className="order-summary__privacy">
                Seus dados pessoais serão usados para processar seu pedido, melhorar sua experiência
                neste site e para outras finalidades descritas em nossa{' '}
                <a href="#">política de privacidade.</a>
              </p>

              <button className="order-summary__place-btn" type="button" onClick={handleSubmit}>
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
