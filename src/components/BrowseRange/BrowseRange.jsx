import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function BrowseRange() {
  return (
    <section className="py-12 sm:py-20 text-center">
      <div className="mb-8 sm:mb-12 px-6">
        <h2 className="font-poppins text-2xl sm:text-[32px] font-bold text-dark mb-2">Explore a Coleção</h2>
        <p className="font-poppins text-sm sm:text-[15px] text-light leading-[1.6]">
          Encontre a peça perfeita para cada ocasião.
        </p>
      </div>

      {/* ── Mobile: scroll horizontal com snap ── */}
      <div className="sm:hidden flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
        {categories.map((cat) => (
          <Link
            to="/shop"
            className="flex-[0_0_72%] snap-start browse-card relative overflow-hidden cursor-pointer rounded-sm block"
            key={cat.id}
          >
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src={cat.image}
                alt={cat.name}
                className="browse-img w-full h-full object-cover transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-center pb-6"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)' }}>
              <p className="font-poppins text-xl font-semibold text-white">{cat.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Desktop: grid ── */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto px-6">
        {categories.map((cat) => (
          <Link
            to="/shop"
            className="browse-card relative overflow-hidden cursor-pointer rounded-sm block"
            key={cat.id}
          >
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src={cat.image}
                alt={cat.name}
                className="browse-img w-full h-full object-cover transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
            <p className="font-poppins text-2xl font-semibold text-dark mt-5 text-center">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
