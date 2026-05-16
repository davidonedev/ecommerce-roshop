import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

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
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[150] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-full sm:w-[420px] h-screen bg-white z-[200] flex flex-col shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Carrinho de Compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-8 pb-7 border-b border-[#E8D0D4] flex-shrink-0">
          <h2 className="font-poppins text-2xl font-semibold text-dark">Carrinho de Compras</h2>
          <button
            className="text-medium p-1 flex items-center transition-colors duration-200 hover:text-dark"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar carrinho"
          >
            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 pt-7 flex flex-col gap-7 scrollbar-thin scrollbar-thumb-cream-dark">
          {items.length === 0 ? (
            <p className="font-poppins text-[15px] text-light text-center mt-10">Seu carrinho está vazio.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-5">
                <div className="w-[105px] h-[105px] bg-[#FFE8EC] flex-shrink-0 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover block" loading="lazy" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-poppins text-base text-dark mb-2 leading-[1.3] whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</p>
                  <p className="font-poppins text-[13px] text-medium">
                    {item.qty} &times; <span className="font-medium text-primary">{formatPrice(item.price)}</span>
                  </p>
                </div>

                <button
                  className="w-[22px] h-[22px] rounded-full bg-[#C4A8B2] text-white text-base leading-none flex items-center justify-center flex-shrink-0 hover:bg-primary transition-colors duration-200"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remover ${item.name}`}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-7 pt-6 pb-8">
          <div className="flex items-center justify-between mb-6">
            <span className="font-poppins text-base text-dark">Subtotal</span>
            <span className="font-poppins text-xl font-semibold text-primary">{formatPrice(subtotal)}</span>
          </div>

          <div className="h-px bg-[#E8D0D4] mb-6" />

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="flex-1 h-11 sm:h-11 bg-dark text-white border border-dark rounded-full font-poppins text-sm transition-all duration-200 hover:bg-black"
              onClick={() => handleNavigate('/cart')}
            >
              Carrinho
            </button>
            <button
              className="flex-1 h-11 sm:h-11 bg-dark text-white border border-dark rounded-full font-poppins text-sm transition-all duration-200 hover:bg-black"
              onClick={() => handleNavigate('/checkout')}
            >
              Finalizar
            </button>
            <button
              className="flex-1 h-11 sm:h-11 bg-dark text-white border border-dark rounded-full font-poppins text-sm transition-all duration-200 hover:bg-black"
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
