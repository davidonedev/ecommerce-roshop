import { useState } from 'react';
import { rooms } from '../../data/products';
import './Inspiration.scss';

export default function Inspiration() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === rooms.length - 1 ? 0 : c + 1));

  const slideWidth = 428;
  const translateX = -(current * slideWidth);

  return (
    <section className="inspiration">
      <div className="inspiration__inner">
        {/* Left panel */}
        <div className="inspiration__left">
          <h2 className="inspiration__title">
            +50 Ambientes<br />Inspiradores
          </h2>
          <p className="inspiration__desc">
            Nossos designers criaram diversos protótipos de ambientes prontos para inspirar a decoração da sua casa.
          </p>
          <button className="inspiration__explore-btn">Explorar Mais</button>
        </div>

        {/* Right slider */}
        <div className="inspiration__right">
          <div
            className="inspiration__slider-track"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {rooms.map((room) => (
              <div className="inspiration__slide" key={room.id}>
                <img
                  src={room.image}
                  alt={room.title}
                  className="inspiration__slide-img"
                  loading="lazy"
                />
                <div className="inspiration__slide-info">
                  <div className="inspiration__slide-meta">
                    <div>
                      <span className="inspiration__slide-num">{room.number}</span>
                      <span className="inspiration__slide-type">— {room.type}</span>
                    </div>
                    <p className="inspiration__slide-title">{room.title}</p>
                  </div>
                  <button className="inspiration__slide-arrow" onClick={next} aria-label="Próximo">
                    <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="inspiration__dots">
            {rooms.map((_, i) => (
              <button
                key={i}
                className={`inspiration__dot${i === current ? ' inspiration__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
