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
            className={`absolute top-5 right-5 rounded-full w-12 h-12 flex items-center justify-center font-poppins text-[13px] font-semibold text-white z-[2] ${
              product.badgeType === 'discount' ? 'bg-primary' : 'bg-primary-light'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Overlay */}
        <div className="product-overlay absolute inset-0 bg-dark/40 flex flex-col items-center justify-center gap-4 opacity-0 transition-opacity duration-300">
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
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
              Comparar
            </button>
            <button className="text-white font-poppins text-[13px] font-semibold flex items-center gap-1.5 hover:text-primary-light transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Curtir
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 pt-[18px] pb-6">
        <h3 className="font-poppins text-[22px] font-semibold text-dark mb-1 leading-[1.2]">{product.name}</h3>
        <p className="font-poppins text-[13px] text-light mb-3 leading-[1.5]">{product.description}</p>
        <div className="flex items-center gap-3">
          <span className="font-poppins text-xl font-semibold text-dark">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="font-poppins text-sm text-light line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <p className="font-poppins text-xs text-medium mt-1.5">
          ou 12x de {formatInstallment(product.price)} sem juros
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="py-20 bg-white text-center" id="shop">
      <div className="mb-12">
        <h2 className="font-poppins text-[40px] font-bold text-dark">Nossos Produtos</h2>
      </div>

      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-w-[1240px] mx-auto px-6 max-sm:max-w-[380px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12">
        <button className="font-poppins text-[15px] tracking-[0.04em] px-[72px] py-3.5 bg-dark text-white border border-dark hover:bg-black transition-all duration-200">
          Ver Mais
        </button>
      </div>
    </section>
  );
}
