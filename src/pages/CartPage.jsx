import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import './CartPage.scss';

function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>

        {/* ── Hero ── */}
        <section className="cart-hero">
          <div className="cart-hero__content">
            <svg className="cart-hero__logo-icon" viewBox="0 0 40 40" fill="none">
              <path d="M5 32 L20 8 L35 32" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M10 24 L30 24" stroke="#B88E2F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <h1 className="cart-hero__title">Carrinho</h1>
            <nav className="cart-hero__breadcrumb" aria-label="Navegação">
              <Link to="/" className="cart-hero__bc-link">Início</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span>Carrinho</span>
            </nav>
          </div>
        </section>

        {/* ── Conteúdo ── */}
        <section className="cart-page">
          <div className="cart-page__inner">

            <div className="cart-page__table-wrap">
              {items.length === 0 ? (
                <div className="cart-page__empty">
                  <p>Seu carrinho está vazio.</p>
                  <button
                    className="cart-page__shop-btn"
                    onClick={() => navigate('/shop')}
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                <table className="cart-table">
                  <thead className="cart-table__head">
                    <tr>
                      <th className="cart-table__th" colSpan={2}>Produto</th>
                      <th className="cart-table__th">Preço</th>
                      <th className="cart-table__th">Quantidade</th>
                      <th className="cart-table__th">Subtotal</th>
                      <th className="cart-table__th" />
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="cart-table__row">
                        <td className="cart-table__td cart-table__td--img">
                          <div className="cart-table__img-wrap">
                            <img src={item.image} alt={item.name} loading="lazy" />
                          </div>
                        </td>
                        <td className="cart-table__td cart-table__td--name">
                          {item.name}
                        </td>
                        <td className="cart-table__td cart-table__td--price">
                          {formatPrice(item.price)}
                        </td>
                        <td className="cart-table__td cart-table__td--qty">
                          <input
                            type="number"
                            className="cart-table__qty-input"
                            value={item.qty}
                            min={1}
                            onChange={(e) => updateQty(item.id, Number(e.target.value))}
                            aria-label={`Quantidade de ${item.name}`}
                          />
                        </td>
                        <td className="cart-table__td cart-table__td--subtotal">
                          {formatPrice(item.price * item.qty)}
                        </td>
                        <td className="cart-table__td cart-table__td--delete">
                          <button
                            className="cart-table__delete-btn"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remover ${item.name}`}
                          >
                            <TrashIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-totals">
                <h2 className="cart-totals__title">Total do Carrinho</h2>

                <div className="cart-totals__row">
                  <span className="cart-totals__label">Subtotal</span>
                  <span className="cart-totals__value">{formatPrice(subtotal)}</span>
                </div>

                <div className="cart-totals__divider" />

                <div className="cart-totals__row">
                  <span className="cart-totals__label">Total</span>
                  <span className="cart-totals__value cart-totals__value--total">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <button
                  className="cart-totals__checkout-btn"
                  onClick={() => navigate('/checkout')}
                >
                  Finalizar Compra
                </button>
              </div>
            )}
          </div>
        </section>

        <ShopFeatures />
      </main>
      <Footer />
    </>
  );
}
