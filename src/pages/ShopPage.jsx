import { useState } from 'react';
import Header from '../components/Header/Header';
import ShopHero from '../components/ShopHero/ShopHero';
import ShopFilter from '../components/ShopFilter/ShopFilter';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { ProductCard } from '../components/Products/Products';
import { products } from '../data/products';

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
      <main className="main-pad">
        <ShopHero />
        <ShopFilter total={shopProducts.length} showing={visible.length} />

        <section className="py-20 bg-white">
          <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-4 sm:gap-6 max-w-[1240px] mx-auto px-4 sm:px-6">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mt-10 sm:mt-12 px-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`min-w-[40px] sm:min-w-[56px] h-10 sm:h-14 px-2 sm:px-3 font-poppins text-sm sm:text-lg rounded transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-primary text-white font-semibold'
                    : 'bg-[#FFE8EC] text-dark hover:bg-primary hover:text-white'
                }`}
                onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                className="min-w-[40px] sm:min-w-[56px] h-10 sm:h-14 px-2 sm:px-3 bg-[#FFE8EC] text-dark font-poppins text-sm sm:text-lg rounded hover:bg-primary hover:text-white transition-all duration-200"
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
