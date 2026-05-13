import { categories } from '../../data/products';
import './BrowseRange.scss';

export default function BrowseRange() {
  return (
    <section className="browse">
      <div className="browse__header">
        <h2 className="browse__title">Explore a Coleção</h2>
        <p className="browse__subtitle">
          Encontre o estilo perfeito para cada ambiente da sua casa.
        </p>
      </div>

      <div className="browse__grid">
        {categories.map((cat) => (
          <div className="browse-card" key={cat.id}>
            <div className="browse-card__img-wrap">
              <img
                src={cat.image}
                alt={cat.name}
                className="browse-card__img"
                loading="lazy"
              />
            </div>
            <p className="browse-card__name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
