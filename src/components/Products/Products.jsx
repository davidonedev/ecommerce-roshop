import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import './Products.scss';

export function formatPrice(price) {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

export function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
        />

        {product.badge && (
          <span className={`product-card__badge product-card__badge--${product.badgeType}`}>
            {product.badge}
          </span>
        )}

        <div className="product-card__overlay">
          <button
            className="product-card__add-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Add to cart
          </button>
          <div className="product-card__actions">
            <button className="product-card__action" onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              Share
            </button>
            <button className="product-card__action" onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
              Compare
            </button>
            <button className="product-card__action" onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Like
            </button>
          </div>
        </div>
      </div>

      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__prices">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="product-card__old-price">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="products" id="shop">
      <div className="products__header">
        <h2 className="products__title">Our Products</h2>
      </div>

      <div className="products__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="products__footer">
        <button className="products__more-btn">Show More</button>
      </div>
    </section>
  );
}
