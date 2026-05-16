import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatInstallment(price, times = 12) {
  const val = price / times;
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  return (
    <div
      className="product-card relative bg-[#F5F5F5] text-left cursor-pointer overflow-hidden"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image wrapper */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1.1' }}>
        <img
          src={product.image}
          alt={product.name}
          className="product-img w-full h-full object-cover transition-transform duration-[400ms] ease-in-out"
          loading="lazy"
        />

        {product.badge && (
          <span
            className={`absolute top-3 right-3 sm:top-5 sm:right-5 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-poppins text-[11px] sm:text-[13px] font-semibold text-white z-[2] ${
              product.badgeType === 'discount' ? 'bg-primary' : 'bg-primary-light'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Mobile: botão carrinho sempre visível */}
        <button
          className="sm:hidden absolute bottom-3 right-3 z-[3] w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md active:bg-primary-dark transition-colors duration-150"
          onClick={(e) => { e.stopPropagation(); addItem(product, 1); }}
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </button>

        {/* Desktop: overlay com ações */}
        <div className="product-overlay hidden sm:flex absolute inset-0 bg-dark/40 flex-col items-center justify-center gap-4 opacity-0 transition-opacity duration-300">
          <button
            className="bg-primary text-white font-poppins font-semibold text-sm px-9 py-3.5 whitespace-nowrap hover:bg-primary-dark transition-all duration-200"
            onClick={(e) => { e.stopPropagation(); addItem(product, 1); }}
          >
            Adicionar ao carrinho
          </button>
          <div className="flex items-center gap-5">
            <button className="text-white font-poppins text-[13px] font-semibold flex items-center gap-1.5 hover:text-primary-light transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              Compartilhar
            </button>
            <button className="text-white font-poppins text-[13px] font-semibold flex items-center gap-1.5 hover:text-primary-light transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Curtir
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-3 sm:px-5 pt-3 sm:pt-[18px] pb-4 sm:pb-6">
        <h3 className="font-poppins text-base sm:text-[22px] font-semibold text-dark mb-1 leading-[1.2] truncate">{product.name}</h3>
        <p className="font-poppins text-xs sm:text-[13px] text-light mb-2 sm:mb-3 leading-[1.5] truncate">{product.description}</p>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="font-poppins text-base sm:text-xl font-semibold text-dark">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="font-poppins text-xs sm:text-sm text-light line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <p className="font-poppins text-[10px] sm:text-xs text-medium mt-1">
          12x de {formatInstallment(product.price)}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="py-12 sm:py-20 bg-white text-center" id="shop">
      <div className="mb-8 sm:mb-12">
        <h2 className="font-poppins text-2xl sm:text-[40px] font-bold text-dark">Nossos Produtos</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 max-w-[1240px] mx-auto px-4 sm:px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 sm:mt-12 px-6">
        <button className="w-full sm:w-auto font-poppins text-[15px] tracking-[0.04em] px-[72px] py-3.5 bg-dark text-white border border-dark hover:bg-black transition-all duration-200">
          Ver Mais
        </button>
      </div>
    </section>
  );
}
