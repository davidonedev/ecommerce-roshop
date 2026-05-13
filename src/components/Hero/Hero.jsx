export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=90')",
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.15) 100%)' }} />

      {/* Card */}
      <div
        className="absolute right-[10%] top-1/2 bg-[rgba(255,255,255,0.733)] backdrop-blur-sm p-12 max-w-[540px] w-[90%]"
        style={{ animation: 'slideInRight 0.8s ease forwards' }}
      >
        <span className="font-poppins text-sm font-semibold tracking-[0.12em] text-dark uppercase mb-3 block">
          Nova Coleção
        </span>
        <h1 className="font-poppins font-bold leading-[1.12] text-primary mb-5" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Descubra Nossa<br />Nova Coleção
        </h1>
        <p className="font-poppins text-sm leading-[1.7] text-medium mb-10 max-w-[300px]">
          Explore nossos móveis exclusivos e transforme cada ambiente da sua casa
          em um espaço único e acolhedor.
        </p>
        <button className="bg-primary text-white font-poppins text-sm tracking-[0.08em] px-14 py-4 hover:bg-primary-dark transition-colors duration-200">
          COMPRE AGORA
        </button>
      </div>
    </section>
  );
}
