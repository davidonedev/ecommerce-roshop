import './styles/global.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BrowseRange from './components/BrowseRange/BrowseRange';
import Products from './components/Products/Products';
import Inspiration from './components/Inspiration/Inspiration';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
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
