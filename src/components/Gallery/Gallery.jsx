import { galleryImages } from '../../data/products';

export default function Gallery() {
  return (
    <section className="py-20 text-center">
      <div className="mb-10">
        <span className="font-poppins text-sm text-light leading-[1.6] block">Compartilhe sua decoração com</span>
        <span className="font-poppins text-[28px] font-bold text-dark block mb-2">#FuniroFurniture</span>
      </div>

      <div
        className="grid gap-3 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(2, 280px)',
        }}
      >
        {galleryImages.map((src, i) => (
          <div
            className={`gallery-item overflow-hidden relative cursor-pointer ${
              i === 0 || i === 2 || i === 5 ? 'row-span-2' : ''
            }`}
            key={i}
          >
            <img
              src={src}
              alt={`Ambiente Furniro ${i + 1}`}
              className="gallery-img w-full h-full object-cover transition-transform duration-[400ms] ease-in-out"
              loading="lazy"
            />
            <div className="gallery-overlay absolute inset-0 opacity-0 transition-opacity duration-300" style={{ background: 'rgba(172,39,79,0.2)' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
