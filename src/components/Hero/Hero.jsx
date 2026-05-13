import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__card">
        <span className="hero__tag">Nova Coleção</span>
        <h1 className="hero__title">
          Descubra Nossa<br />Nova Coleção
        </h1>
        <p className="hero__desc">
          Explore nossos móveis exclusivos e transforme cada ambiente da sua casa
          em um espaço único e acolhedor.
        </p>
        <button className="hero__btn">COMPRE AGORA</button>
      </div>
    </section>
  );
}
