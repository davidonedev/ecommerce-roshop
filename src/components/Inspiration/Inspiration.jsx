import { useState } from 'react';
import { rooms } from '../../data/products';

export default function Inspiration() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === rooms.length - 1 ? 0 : c + 1));

  const slideWidth = 428;
  const translateX = -(current * slideWidth);

  return (
    <section className="bg-cream py-20 overflow-hidden">
      <div className="flex items-center">
        {/* Left panel */}
        <div className="flex-[0_0_380px] pl-20 max-xl:flex-[0_0_320px] max-xl:pl-10 max-lg:flex-[0_0_280px] max-lg:pl-6">
          <h2 className="font-poppins font-bold text-dark leading-[1.15] mb-5" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
            +50 Ambientes<br />Inspiradores
          </h2>
          <p className="font-poppins text-sm text-light leading-[1.8] mb-9 max-w-[260px]">
            Nossos designers criaram diversos protótipos de ambientes prontos para inspirar a decoração da sua casa.
          </p>
          <button className="bg-primary text-white font-poppins text-sm tracking-[0.06em] px-11 py-3.5 hover:bg-primary-dark transition-colors duration-200">
            Explorar Mais
          </button>
        </div>

        {/* Right slider */}
        <div className="flex-1 overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(${translateX}px)`,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {rooms.map((room) => (
              <div
                className="flex-[0_0_auto] w-[404px] mr-6 relative overflow-hidden rounded-sm max-lg:w-[320px] max-sm:w-[280px]"
                key={room.id}
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[480px] object-cover block max-lg:h-[380px]"
                  loading="lazy"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between text-white"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
                >
                  <div className="leading-[1.3]">
                    <div>
                      <span className="text-xs font-medium opacity-75">{room.number}</span>
                      <span className="text-[11px] opacity-65 ml-1">— {room.type}</span>
                    </div>
                    <p className="text-lg font-bold mt-1">{room.title}</p>
                  </div>
                  <button
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-primary transition-colors duration-200 group"
                    onClick={next}
                    aria-label="Próximo"
                  >
                    <svg className="w-[18px] h-[18px] stroke-dark group-hover:stroke-white fill-none stroke-2" style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {rooms.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  i === current ? 'bg-primary w-7 rounded-[5px]' : 'bg-[#D8D8D8] w-2.5'
                }`}
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
