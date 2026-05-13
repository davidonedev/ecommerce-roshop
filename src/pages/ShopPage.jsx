import { useState } from 'react';
import Header from '../components/Header/Header';
import ShopHero from '../components/ShopHero/ShopHero';
import ShopFilter from '../components/ShopFilter/ShopFilter';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { ProductCard } from '../components/Products/Products';
import { products } from '../data/products';
import './ShopPage.scss';

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
