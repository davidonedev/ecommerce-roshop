import { categories } from '../../data/products';

export default function BrowseRange() {
  return (
    <section className="py-20 text-center">
      <div className="mb-12">
        <h2 className="font-poppins text-[32px] font-bold text-dark mb-2">Explore a Coleção</h2>
        <p className="font-poppins text-[15px] text-light leading-[1.6]">
          Encontre o estilo perfeito para cada ambiente da sua casa.
        </p>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 max-w-[1240px] mx-auto px-6 max-md:max-w-[400px]">
        {categories.map((cat) => (
          <div className="browse-card relative overflow-hidden cursor-pointer rounded-sm" key={cat.id}>
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src={cat.image}
                alt={cat.name}
                className="browse-img w-full h-full object-cover transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
            <p className="font-poppins text-2xl font-semibold text-dark mt-5 text-center">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
