import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import BrowseRange from '../components/BrowseRange/BrowseRange';
import Products from '../components/Products/Products';
import Inspiration from '../components/Inspiration/Inspiration';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="main-pad">
        <Hero />
        <BrowseRange />
        <Products />
        <Inspiration />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
