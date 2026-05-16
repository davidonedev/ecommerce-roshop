import { Link } from 'react-router-dom';

const BG = "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1800&q=90')";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[500px] max-h-[900px] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: BG, backgroundPosition: 'left center' }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.42) 100%)' }}
      />

      {/* ── Card MOBILE: centralizado, sem animação ── */}
      <div className="md:hidden absolute inset-x-5 top-1/2 -translate-y-1/2 bg-white/92 backdrop-blur-sm p-7 text-center flex flex-col items-center">
        <span className="font-poppins text-[11px] font-bold tracking-[0.16em] text-primary uppercase mb-3 block">
          Nova Coleção
        </span>
        <h1
          className="font-poppins font-bold leading-[1.18] text-primary mb-4"
          style={{ fontSize: 'clamp(26px, 7vw, 36px)' }}
        >
          Descubra Nossa<br />Nova Coleção
        </h1>
        <p className="font-poppins text-sm leading-[1.75] text-medium mb-7 max-w-[280px]">
          Peças únicas de moda feminina para realçar sua beleza e expressar seu estilo.
        </p>
        <Link
          to="/shop"
          className="block w-full bg-primary text-white font-poppins text-sm font-semibold tracking-[0.1em] py-4 hover:bg-primary-dark transition-colors duration-200"
        >
          COMPRE AGORA
        </Link>
      </div>

      {/* ── Card DESKTOP: direita, com animação ── */}
      <div
        className="hidden md:block absolute right-[10%] top-1/2 bg-[rgba(255,255,255,0.733)] backdrop-blur-sm p-12 max-w-[540px] w-[80%]"
      >
        <span className="font-poppins text-sm font-semibold tracking-[0.12em] text-dark uppercase mb-3 block">
          Nova Coleção
        </span>
        <h1
          className="font-poppins font-bold leading-[1.12] text-primary mb-5"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Descubra Nossa<br />Nova Coleção
        </h1>
        <p className="font-poppins text-sm leading-[1.7] text-medium mb-10 max-w-[300px]">
          Descubra peças únicas de moda feminina — roupas e acessórios selecionados
          para realçar sua beleza e expressar seu estilo.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-primary text-white font-poppins text-sm tracking-[0.08em] px-14 py-4 hover:bg-primary-dark transition-colors duration-200"
        >
          COMPRE AGORA
        </Link>
      </div>

    </section>
  );
}
