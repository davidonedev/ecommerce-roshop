import { galleryImages } from '../../data/products';

export default function Gallery() {
  return (
    <section className="py-20 text-center">
      <div className="mb-10">
        <span className="font-poppins text-sm text-light leading-[1.6] block">Compartilhe sua decoração com</span>
        <span className="font-poppins text-[28px] font-bold text-dark block mb-2">#BellaStore</span>
      </div>

      <div className="gallery-grid grid gap-2 sm:gap-3">
        {galleryImages.map((src, i) => (
          <div
            className={`gallery-item overflow-hidden relative cursor-pointer ${
              i === 0 || i === 2 ? 'row-span-2' : ''
            }`}
            style={{ minHeight: '160px' }}
            key={i}
          >
            <img
              src={src}
              alt={`Ambiente Bella Store ${i + 1}`}
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
