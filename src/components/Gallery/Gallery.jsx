import { galleryImages } from '../../data/products';
import './Gallery.scss';

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__header">
        <span className="gallery__subtext">Compartilhe sua decoração com</span>
        <span className="gallery__hashtag">#FuniroFurniture</span>
      </div>

      <div className="gallery__grid">
        {galleryImages.map((src, i) => (
          <div className="gallery__item" key={i}>
            <img
              src={src}
              alt={`Ambiente Furniro ${i + 1}`}
              className="gallery__item-img"
              loading="lazy"
            />
            <div className="gallery__item-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}
