import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartSidebar.scss';

function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function CartSidebar() {
  const { items, removeItem, isOpen, setIsOpen, subtotal } = useCart();
  const navigate = useNavigate();

  function handleNavigate(path) {
    setIsOpen(false);
    navigate(path);
  }

  return (
    <>
      <div
        className={`cart-overlay${isOpen ? ' cart-overlay--open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`cart-sidebar${isOpen ? ' cart-sidebar--open' : ''}`}
        aria-label="Carrinho de Compras"
      >
        <div className="cart-sidebar__header">
          <h2 className="cart-sidebar__title">Carrinho de Compras</h2>
          <button
            className="cart-sidebar__close"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar carrinho"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar__items">
          {items.length === 0 ? (
            <p className="cart-sidebar__empty">Seu carrinho está vazio.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-sidebar__item">
                <div className="cart-sidebar__item-img">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="cart-sidebar__item-info">
                  <p className="cart-sidebar__item-name">{item.name}</p>
                  <p className="cart-sidebar__item-qty">
                    {item.qty} &times; <span>{formatPrice(item.price)}</span>
                  </p>
                </div>

                <button
                  className="cart-sidebar__item-remove"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remover ${item.name}`}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-sidebar__footer">
          <div className="cart-sidebar__subtotal">
            <span className="cart-sidebar__subtotal-label">Subtotal</span>
            <span className="cart-sidebar__subtotal-value">{formatPrice(subtotal)}</span>
          </div>

          <div className="cart-sidebar__divider" />

          <div className="cart-sidebar__actions">
            <button
              className="cart-sidebar__action-btn"
              onClick={() => handleNavigate('/cart')}
            >
              Carrinho
            </button>
            <button
              className="cart-sidebar__action-btn"
              onClick={() => handleNavigate('/checkout')}
            >
              Finalizar
            </button>
            <button
              className="cart-sidebar__action-btn"
              onClick={() => setIsOpen(false)}
            >
              Comparar
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
