import { useState } from 'react';
import Header from '../components/Header/Header';
import ShopHero from '../components/ShopHero/ShopHero';
import ShopFilter from '../components/ShopFilter/ShopFilter';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { products } from '../data/products';
import './ShopPage.scss';

function formatPrice(price) {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
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
          <button className="product-card__add-btn">Add to cart</button>
          <div className="product-card__actions">
            <button className="product-card__action">
              <svg viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              Share
            </button>
            <button className="product-card__action">
              <svg viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
              Compare
            </button>
            <button className="product-card__action">
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

const ITEMS_PER_PAGE = 16;

const shopProducts = [
  ...products,
  ...products.map((p) => ({ ...p, id: p.id + 100 })),
];

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(shopProducts.length / ITEMS_PER_PAGE);
  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = shopProducts.slice(pageStart, pageStart + ITEMS_PER_PAGE);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <ShopHero />
        <ShopFilter total={shopProducts.length} showing={visible.length} />

        <section className="shop-grid">
          <div className="shop-grid__inner">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="shop-pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`shop-pagination__btn${currentPage === page ? ' shop-pagination__btn--active' : ''}`}
                onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                className="shop-pagination__btn shop-pagination__btn--next"
                onClick={() => { setCurrentPage((p) => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Next
              </button>
            )}
          </div>
        </section>

        <ShopFeatures />
      </main>
      <Footer />
    </>
  );
}
