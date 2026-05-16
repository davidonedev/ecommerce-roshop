import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';

const stats = [
  { value: '+5.000', label: 'Clientes Satisfeitas' },
  { value: '+200', label: 'Marcas Parceiras' },
  { value: '+3', label: 'Anos de Experiência' },
  { value: '4.9★', label: 'Avaliação Média' },
];

const values = [
  {
    title: 'Qualidade Premium',
    description:
      'Cada peça é selecionada com cuidado, garantindo materiais de alta qualidade que duram e valorizam quem usa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Estilo Feminino',
    description:
      'Nosso acervo celebra a moda feminina em todas as formas, com tendências atuais e peças atemporais para cada ocasião.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Atendimento Dedicado',
    description:
      'Estamos aqui para ajudar você a encontrar o look perfeito. Nossa equipe está disponível para atender com carinho e atenção.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>

        {/* ── Hero ── */}
        <section
          className="relative h-[280px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=1440&q=80')" }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.72)' }} />
          <div className="relative flex flex-col items-center gap-1 text-center">
            <svg className="w-14 h-14 mb-2" viewBox="0 0 40 40" fill="none">
              <path d="M 8 6 L 8 34" stroke="#AC274F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 8 6 L 20 6 C 31 6 31 20 20 20 L 8 20 M 8 20 L 22 20 C 34 20 34 34 22 34 L 8 34" stroke="#AC274F" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h1 className="font-poppins text-[48px] font-bold text-dark leading-[1.1]">Sobre</h1>
            <nav className="flex items-center gap-1.5 font-poppins text-sm mt-1" aria-label="Navegação">
              <Link to="/" className="font-semibold text-dark hover:text-primary transition-colors duration-200">Início</Link>
              <svg className="w-3.5 h-3.5 text-medium" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="text-medium font-light">Sobre</span>
            </nav>
          </div>
        </section>

        {/* ── Nossa História ── */}
        <section className="py-24 bg-white">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-w-[1240px] mx-auto px-6 items-center">

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=85"
                alt="Coleção feminina Bella Store"
                className="w-full h-[580px] object-cover object-center"
              />
            </div>

            <div>
              <span className="font-poppins text-sm font-semibold tracking-[0.14em] text-primary uppercase mb-4 block">
                Nossa História
              </span>
              <h2
                className="font-poppins font-bold text-dark leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
              >
                Nascemos para<br />celebrar o estilo<br />feminino
              </h2>
              <p className="font-poppins text-sm text-medium leading-[1.9] mb-5">
                A Bella Store nasceu da paixão por moda e da crença de que toda mulher merece se sentir poderosa, elegante e confiante em cada momento da sua vida. Desde o primeiro dia, nossa missão é oferecer peças cuidadosamente selecionadas que unem tendência, qualidade e identidade.
              </p>
              <p className="font-poppins text-sm text-medium leading-[1.9] mb-10">
                Acreditamos que a moda vai além da roupa — ela é expressão, é atitude, é a forma que você escolhe se apresentar ao mundo. Por isso, cada peça do nosso acervo é escolhida com atenção e carinho, pensando em diferentes estilos, corpos e ocasiões.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-primary text-white font-poppins text-sm tracking-[0.08em] px-12 py-4 hover:bg-primary-dark transition-colors duration-200"
              >
                EXPLORAR COLEÇÃO
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-cream py-20">
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-12 max-w-[1240px] mx-auto px-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3">
                <span
                  className="font-poppins font-bold text-primary leading-none"
                  style={{ fontSize: 'clamp(40px, 4vw, 56px)' }}
                >
                  {s.value}
                </span>
                <div className="w-8 h-[2px] bg-primary-light" />
                <span className="font-poppins text-sm text-medium font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Nossos Valores ── */}
        <section className="py-24 bg-white">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="font-poppins text-sm font-semibold tracking-[0.14em] text-primary uppercase mb-3 block">
                O Que Nos Move
              </span>
              <h2 className="font-poppins text-[40px] font-bold text-dark">Nossos Valores</h2>
            </div>

            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex flex-col items-center text-center gap-6 px-8 py-12 border border-[#E8D0D4] hover:border-primary hover:shadow-card-hover transition-all duration-300"
                >
                  <span className="w-[72px] h-[72px] rounded-full bg-cream flex items-center justify-center text-primary flex-shrink-0">
                    <span className="w-8 h-8 block">{v.icon}</span>
                  </span>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-dark mb-3">{v.title}</h3>
                    <p className="font-poppins text-sm text-medium leading-[1.8]">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quem Somos ── */}
        <section className="py-24 bg-cream">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-w-[1240px] mx-auto px-6 items-center">

            <div>
              <span className="font-poppins text-sm font-semibold tracking-[0.14em] text-primary uppercase mb-4 block">
                Quem Somos
              </span>
              <h2
                className="font-poppins font-bold text-dark leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
              >
                Uma equipe<br />apaixonada<br />por moda
              </h2>
              <p className="font-poppins text-sm text-medium leading-[1.9] mb-5">
                Somos um time de mulheres apaixonadas por moda, estilo e por fazer a diferença na vida das nossas clientes. Trabalhamos todos os dias para trazer o melhor da moda feminina — das tendências internacionais às peças que viram clássicos.
              </p>
              <p className="font-poppins text-sm text-medium leading-[1.9] mb-10">
                Cada compra é mais do que uma transação — é uma escolha de se cuidar, de se valorizar e de expressar quem você é. E nós queremos fazer parte desse momento especial.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-dark text-white font-poppins text-sm tracking-[0.08em] px-12 py-4 hover:bg-black transition-colors duration-200"
              >
                FALE CONOSCO
              </Link>
            </div>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=85"
                alt="Equipe Bella Store"
                className="w-full h-[580px] object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-primary text-center px-6">
          <h2
            className="font-poppins font-bold text-white leading-[1.15] mb-5"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
          >
            Pronta para se reinventar?
          </h2>
          <p className="font-poppins text-sm leading-[1.9] mb-10 max-w-[460px] mx-auto" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Descubra nossa coleção completa de roupas e acessórios femininos. Encontre o seu estilo com a Bella Store.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-primary font-poppins text-sm tracking-[0.08em] font-semibold px-14 py-4 hover:bg-cream transition-colors duration-200"
          >
            VER COLEÇÃO
          </Link>
        </section>

        <ShopFeatures />
      </main>
      <Footer />
    </>
  );
}
