import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__card">
        <span className="hero__tag">New Arrival</span>
        <h1 className="hero__title">
          Discover Our<br />New Collection
        </h1>
        <p className="hero__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis.
        </p>
        <button className="hero__btn">BUY NOW</button>
      </div>
    </section>
  );
}
