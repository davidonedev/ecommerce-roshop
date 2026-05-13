import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { ProductCard, formatPrice, formatInstallment } from '../components/Products/Products';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

// ── Star Rating ───────────────────────────────────────────────────────────────
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = rating >= star ? 1 : rating >= star - 0.5 ? 0.5 : 0;
        return (
          <svg key={star} className="w-5 h-5" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`grad-${star}`}>
                <stop offset={`${fill * 100}%`} stopColor="#FFDA5F" />
                <stop offset={`${fill * 100}%`} stopColor="#D9D9D9" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={`url(#grad-${star})`}
              stroke="#FFDA5F"
              strokeWidth="0.5"
            />
          </svg>
        );
      })}
    </div>
  );
}

// ── Product Page ──────────────────────────────────────────────────────────────
export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <>
        <Header />
        <main style={{ paddingTop: '100px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', marginBottom: '16px' }}>Produto não encontrado</h2>
            <button
              onClick={() => navigate('/shop')}
              style={{ fontFamily: 'Poppins, sans-serif', padding: '12px 32px', background: '#AC274F', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px' }}
            >
              Voltar para a Loja
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>

        {/* ── Breadcrumb ── */}
        <nav className="bg-cream py-[18px]" aria-label="Breadcrumb">
          <div className="flex items-center gap-2.5 max-w-[1240px] mx-auto px-6 font-poppins text-base">
            <Link to="/" className="text-medium hover:text-primary transition-colors duration-200">Início</Link>
            <svg className="w-4 h-4 stroke-medium fill-none flex-shrink-0" viewBox="0 0 24 24" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            <Link to="/shop" className="text-medium hover:text-primary transition-colors duration-200">Loja</Link>
            <svg className="w-4 h-4 stroke-medium fill-none flex-shrink-0" viewBox="0 0 24 24" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            <span className="inline-block w-px h-7 bg-medium mx-1" aria-hidden="true" />
            <span className="text-dark">{product.name}</span>
          </div>
        </nav>

        {/* ── Detail Section ── */}
        <section className="py-14 bg-white">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[72px] max-lg:gap-10 max-w-[1240px] mx-auto px-6 items-start">

            {/* Gallery */}
            <div className="flex gap-5 items-start">
              <div className="flex flex-col gap-4 flex-shrink-0">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`w-[76px] h-20 bg-[#FFE8EC] border-2 overflow-hidden transition-colors duration-200 ${
                      activeImg === i ? 'border-primary' : 'border-transparent hover:border-cream-dark'
                    }`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img src={img} alt={`${product.name} foto ${i + 1}`} className="w-full h-full object-cover block" loading="lazy" />
                  </button>
                ))}
              </div>
              <div className="flex-1 bg-[#FFE8EC] overflow-hidden" style={{ aspectRatio: '1 / 1.05' }}>
                <img
                  src={product.gallery[activeImg]}
                  alt={product.name}
                  className="w-full h-full object-cover block"
                  loading="eager"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3">
              <h1 className="font-poppins text-[42px] font-normal text-dark leading-[1.15]">{product.name}</h1>
              <p className="font-poppins text-2xl font-normal text-medium">{formatPrice(product.price)}</p>
              <p className="font-poppins text-[13px] text-medium mt-0.5">
                ou 12x de {formatInstallment(product.price)} sem juros
              </p>

              <div className="flex items-center gap-3.5 mb-1">
                <StarRating rating={product.rating} />
                <span className="inline-block w-px h-7 bg-[#C4A8B2]" aria-hidden="true" />
                <span className="font-poppins text-[13px] text-medium">{product.reviewCount} Avaliações de Clientes</span>
              </div>

              <p className="font-poppins text-[13px] text-medium leading-[1.7] max-w-[420px]">{product.longDescription}</p>

              <div className="h-px bg-[#E8D0D4] my-1" />

              {/* Size */}
              <div className="flex flex-col gap-2.5">
                <span className="font-poppins text-sm text-medium font-medium">Tamanho</span>
                <div className="flex gap-3">
                  {product.sizes.map((size, i) => (
                    <button
                      key={size}
                      className={`min-w-12 h-12 px-3 font-poppins text-sm font-medium rounded transition-all duration-200 ${
                        selectedSize === i ? 'bg-primary text-white' : 'bg-[#FFE8EC] text-dark hover:bg-cream-dark'
                      }`}
                      onClick={() => setSelectedSize(i)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="flex flex-col gap-2.5">
                <span className="font-poppins text-sm text-medium font-medium">Cor</span>
                <div className="flex gap-4">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-[3px] border-transparent cursor-pointer transition-all duration-150 ${
                        selectedColor === i
                          ? 'outline outline-2 outline-primary outline-offset-[3px]'
                          : 'hover:outline hover:outline-2 hover:outline-medium hover:outline-offset-[3px]'
                      }`}
                      style={{ background: color }}
                      onClick={() => setSelectedColor(i)}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Cart actions */}
              <div className="flex items-center gap-4 flex-wrap mt-2">
                <div className="flex items-center border border-[#9F9F9F] rounded overflow-hidden">
                  <button
                    className="w-11 h-[52px] font-poppins text-[22px] font-light text-dark hover:bg-cream transition-colors duration-150"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span className="min-w-[40px] text-center font-poppins text-base font-medium text-dark border-l border-r border-[#9F9F9F] leading-[52px]">{qty}</span>
                  <button
                    className="w-11 h-[52px] font-poppins text-[22px] font-light text-dark hover:bg-cream transition-colors duration-150"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
                <button
                  className="h-[52px] px-9 bg-white text-dark border border-dark font-poppins text-base font-medium rounded tracking-[0.03em] hover:bg-dark hover:text-white transition-all duration-200"
                  onClick={() => addItem(product, qty)}
                >
                  Adicionar ao Carrinho
                </button>
                <button className="h-[52px] px-7 bg-transparent text-dark border border-dark font-poppins text-base font-medium rounded hover:bg-dark hover:text-white transition-all duration-200">
                  + Comparar
                </button>
              </div>

              {/* Meta */}
              <div className="h-px bg-[#E8D0D4] my-3" />
              <dl className="flex flex-col gap-2.5">
                <div className="flex gap-5 font-poppins text-sm">
                  <dt className="w-[90px] text-medium font-normal flex-shrink-0">SKU</dt>
                  <dd className="text-medium font-normal">: {product.sku}</dd>
                </div>
                <div className="flex gap-5 font-poppins text-sm">
                  <dt className="w-[90px] text-medium font-normal flex-shrink-0">Categoria</dt>
                  <dd className="text-medium font-normal">: {product.category}</dd>
                </div>
                <div className="flex gap-5 font-poppins text-sm">
                  <dt className="w-[90px] text-medium font-normal flex-shrink-0">Tags</dt>
                  <dd className="text-medium font-normal">: {product.tags.join(', ')}</dd>
                </div>
                <div className="flex gap-5 font-poppins text-sm">
                  <dt className="w-[90px] text-medium font-normal flex-shrink-0">Compartilhar</dt>
                  <dd className="text-medium font-normal flex items-center gap-4">
                    :
                    <a href="#" className="text-dark flex items-center hover:text-primary transition-colors duration-200" aria-label="Compartilhar no Facebook" onClick={(e) => e.preventDefault()}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="#" className="text-dark flex items-center hover:text-primary transition-colors duration-200" aria-label="Compartilhar no LinkedIn" onClick={(e) => e.preventDefault()}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="text-dark flex items-center hover:text-primary transition-colors duration-200" aria-label="Compartilhar no Twitter" onClick={(e) => e.preventDefault()}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ── Tabs ── */}
        <section className="bg-white py-12 pb-16 border-t border-[#E8E0D8]">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="flex gap-12 mb-9 border-b border-[#E8D0D4] max-sm:gap-6 max-sm:overflow-x-auto">
              {[
                { key: 'description', label: 'Descrição' },
                { key: 'additional', label: 'Informações Adicionais' },
                { key: 'reviews', label: `Avaliações [${product.reviewCount}]` },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`pb-[18px] font-poppins text-xl font-normal border-b-2 -mb-px whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'text-dark font-medium border-dark'
                      : 'text-medium border-transparent hover:text-dark'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div>
              {activeTab === 'description' && (
                <>
                  <p className="font-poppins text-sm text-medium leading-[1.8] mb-5 max-w-[900px]">
                    Incorporando o espírito ousado do design contemporâneo, o {product.name} traz
                    o visual e a sensação inconfundíveis do artesanato premium, se destaca do comum e
                    ocupa o centro das atenções em qualquer ambiente. Suas linhas limpas e proporções
                    cuidadosas fazem dele uma peça marcante que chama a atenção sem precisar pedir.
                  </p>
                  <p className="font-poppins text-sm text-medium leading-[1.8] mb-5 max-w-[900px]">
                    Com uma estrutura robusta e refinada, o {product.name} é uma peça atemporal de
                    engenharia de qualidade. Referência entre as melhores peças de sua classe, oferece
                    uma estética equilibrada com silhueta elegante e detalhamento marcante. As proporções
                    cuidadosamente planejadas permitem posicioná-lo com conforto no seu espaço, enquanto
                    os materiais de qualidade garantem fácil cuidado e longevidade com estilo.
                  </p>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-9">
                    <div className="bg-[#FFE8EC] overflow-hidden rounded-sm" style={{ aspectRatio: '16/10' }}>
                      <img
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80"
                        alt="Produto em ambiente"
                        className="w-full h-full object-cover block"
                        loading="lazy"
                      />
                    </div>
                    <div className="bg-[#FFE8EC] overflow-hidden rounded-sm" style={{ aspectRatio: '16/10' }}>
                      <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80"
                        alt="Detalhe do produto"
                        className="w-full h-full object-cover block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'additional' && (
                <div className="py-2">
                  <table className="border-collapse font-poppins text-sm">
                    <tbody>
                      {[
                        ['SKU', product.sku],
                        ['Categoria', product.category],
                        ['Tags', product.tags.join(', ')],
                        ['Tamanhos Disponíveis', product.sizes.join(', ')],
                        ['Cores Disponíveis', `${product.colors.length} cores`],
                        ['Avaliação', `${product.rating} / 5 (${product.reviewCount} avaliações)`],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <th className="text-left py-3 pr-6 text-dark font-medium w-[200px] border-b border-[#F0EBE3]">{label}</th>
                          <td className="text-left py-3 pr-6 text-medium font-normal border-b border-[#F0EBE3]">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <p className="font-poppins text-sm text-medium leading-[1.8] mb-5 max-w-[900px]">
                    {product.reviewCount} clientes avaliaram este produto. Nota média:{' '}
                    <strong>{product.rating}</strong> / 5.
                  </p>
                  <div className="flex flex-col gap-6 mt-5">
                    {Array.from({ length: Math.min(3, product.reviewCount) }, (_, i) => (
                      <div key={i} className="p-5 bg-cream rounded flex flex-col gap-2">
                        <StarRating rating={product.rating} />
                        <p className="font-poppins text-sm text-medium leading-[1.6]">
                          {i === 0
                            ? 'Amei este produto! A qualidade é excepcional e fica ainda mais bonito pessoalmente.'
                            : i === 1
                            ? 'Ótimo custo-benefício. Construção sólida e chegou bem embalado. Super recomendo!'
                            : 'Design lindo, combina perfeitamente com minha sala. Entrega rápida também!'}
                        </p>
                        <span className="font-poppins text-[13px] text-light font-medium">Cliente {i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Related Products ── */}
        <section className="bg-white py-12 pb-[72px] border-t border-[#E8E0D8] text-center">
          <h2 className="font-poppins text-[36px] font-bold text-dark mb-12">Produtos Relacionados</h2>
          <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-w-[1240px] mx-auto px-6 text-left">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-12">
            <button
              className="font-poppins text-[15px] tracking-[0.04em] px-[72px] py-3.5 border border-dark text-dark hover:bg-dark hover:text-white transition-all duration-200"
              onClick={() => navigate('/shop')}
            >
              Ver Mais
            </button>
          </div>
        </section>

        <ShopFeatures />
      </main>
      <Footer />
    </>
  );
}
