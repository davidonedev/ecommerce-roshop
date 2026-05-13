import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { ProductCard, formatPrice, formatInstallment } from '../components/Products/Products';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductPage.scss';

// ── Star Rating ───────────────────────────────────────────────────────────────
function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = rating >= star ? 1 : rating >= star - 0.5 ? 0.5 : 0;
        return (
          <svg key={star} className="star-rating__star" viewBox="0 0 24 24">
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
              style={{ fontFamily: 'Poppins, sans-serif', padding: '12px 32px', background: '#B88E2F', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px' }}
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
      <main className="product-page" style={{ paddingTop: '100px' }}>

        {/* ── Breadcrumb ── */}
        <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
          <div className="product-page__breadcrumb-inner">
            <Link to="/" className="product-page__bc-link">Início</Link>
            <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            <Link to="/shop" className="product-page__bc-link">Loja</Link>
            <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            <span className="product-page__bc-separator" aria-hidden="true" />
            <span className="product-page__bc-current">{product.name}</span>
          </div>
        </nav>

        {/* ── Detail Section ── */}
        <section className="product-page__detail">
          <div className="product-page__detail-inner">

            {/* Gallery */}
            <div className="product-page__gallery">
              <div className="product-page__thumbs">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`product-page__thumb${activeImg === i ? ' product-page__thumb--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img src={img} alt={`${product.name} foto ${i + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
              <div className="product-page__main-img">
                <img
                  src={product.gallery[activeImg]}
                  alt={product.name}
                  loading="eager"
                />
              </div>
            </div>

            {/* Info */}
            <div className="product-page__info">
              <h1 className="product-page__name">{product.name}</h1>
              <p className="product-page__price">{formatPrice(product.price)}</p>
              <p className="product-page__installment">
                ou 12x de {formatInstallment(product.price)} sem juros
              </p>

              <div className="product-page__rating-row">
                <StarRating rating={product.rating} />
                <span className="product-page__rating-sep" aria-hidden="true" />
                <span className="product-page__review-count">{product.reviewCount} Avaliações de Clientes</span>
              </div>

              <p className="product-page__short-desc">{product.longDescription}</p>

              <div className="product-page__divider" />

              {/* Size */}
              <div className="product-page__option-group">
                <span className="product-page__option-label">Tamanho</span>
                <div className="product-page__size-btns">
                  {product.sizes.map((size, i) => (
                    <button
                      key={size}
                      className={`product-page__size-btn${selectedSize === i ? ' product-page__size-btn--active' : ''}`}
                      onClick={() => setSelectedSize(i)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="product-page__option-group">
                <span className="product-page__option-label">Cor</span>
                <div className="product-page__colors">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      className={`product-page__color${selectedColor === i ? ' product-page__color--active' : ''}`}
                      style={{ background: color }}
                      onClick={() => setSelectedColor(i)}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Cart actions */}
              <div className="product-page__cart-row">
                <div className="product-page__qty">
                  <button
                    className="product-page__qty-btn"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span className="product-page__qty-val">{qty}</span>
                  <button
                    className="product-page__qty-btn"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
                <button
                  className="product-page__add-btn"
                  onClick={() => addItem(product, qty)}
                >
                  Adicionar ao Carrinho
                </button>
                <button className="product-page__compare-btn">+ Comparar</button>
              </div>

              {/* Meta */}
              <div className="product-page__meta-divider" />
              <dl className="product-page__meta">
                <div className="product-page__meta-row">
                  <dt>SKU</dt>
                  <dd>: {product.sku}</dd>
                </div>
                <div className="product-page__meta-row">
                  <dt>Categoria</dt>
                  <dd>: {product.category}</dd>
                </div>
                <div className="product-page__meta-row">
                  <dt>Tags</dt>
                  <dd>: {product.tags.join(', ')}</dd>
                </div>
                <div className="product-page__meta-row">
                  <dt>Compartilhar</dt>
                  <dd className="product-page__share">
                    :
                    <a href="#" aria-label="Compartilhar no Facebook" onClick={(e) => e.preventDefault()}>
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="#" aria-label="Compartilhar no LinkedIn" onClick={(e) => e.preventDefault()}>
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" aria-label="Compartilhar no Twitter" onClick={(e) => e.preventDefault()}>
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ── Tabs ── */}
        <section className="product-page__tabs">
          <div className="product-page__tabs-nav">
            {[
              { key: 'description', label: 'Descrição' },
              { key: 'additional', label: 'Informações Adicionais' },
              { key: 'reviews', label: `Avaliações [${product.reviewCount}]` },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`product-page__tab-btn${activeTab === tab.key ? ' product-page__tab-btn--active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="product-page__tabs-body">
            {activeTab === 'description' && (
              <>
                <p className="product-page__tab-text">
                  Incorporando o espírito ousado do design contemporâneo, o {product.name} traz
                  o visual e a sensação inconfundíveis do artesanato premium, se destaca do comum e
                  ocupa o centro das atenções em qualquer ambiente. Suas linhas limpas e proporções
                  cuidadosas fazem dele uma peça marcante que chama a atenção sem precisar pedir.
                </p>
                <p className="product-page__tab-text">
                  Com uma estrutura robusta e refinada, o {product.name} é uma peça atemporal de
                  engenharia de qualidade. Referência entre as melhores peças de sua classe, oferece
                  uma estética equilibrada com silhueta elegante e detalhamento marcante. As proporções
                  cuidadosamente planejadas permitem posicioná-lo com conforto no seu espaço, enquanto
                  os materiais de qualidade garantem fácil cuidado e longevidade com estilo.
                </p>
                <div className="product-page__tab-images">
                  <div className="product-page__tab-img-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80"
                      alt="Produto em ambiente"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-page__tab-img-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80"
                      alt="Detalhe do produto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'additional' && (
              <div className="product-page__additional">
                <table className="product-page__add-table">
                  <tbody>
                    <tr><th>SKU</th><td>{product.sku}</td></tr>
                    <tr><th>Categoria</th><td>{product.category}</td></tr>
                    <tr><th>Tags</th><td>{product.tags.join(', ')}</td></tr>
                    <tr><th>Tamanhos Disponíveis</th><td>{product.sizes.join(', ')}</td></tr>
                    <tr><th>Cores Disponíveis</th><td>{product.colors.length} cores</td></tr>
                    <tr><th>Avaliação</th><td>{product.rating} / 5 ({product.reviewCount} avaliações)</td></tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="product-page__reviews">
                <p className="product-page__tab-text">
                  {product.reviewCount} clientes avaliaram este produto. Nota média:{' '}
                  <strong>{product.rating}</strong> / 5.
                </p>
                <div className="product-page__review-list">
                  {Array.from({ length: Math.min(3, product.reviewCount) }, (_, i) => (
                    <div key={i} className="product-page__review-item">
                      <StarRating rating={product.rating} />
                      <p className="product-page__review-text">
                        {i === 0
                          ? 'Amei este produto! A qualidade é excepcional e fica ainda mais bonito pessoalmente.'
                          : i === 1
                          ? 'Ótimo custo-benefício. Construção sólida e chegou bem embalado. Super recomendo!'
                          : 'Design lindo, combina perfeitamente com minha sala. Entrega rápida também!'}
                      </p>
                      <span className="product-page__review-author">Cliente {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Related Products ── */}
        <section className="product-page__related">
          <h2 className="product-page__related-title">Produtos Relacionados</h2>
          <div className="product-page__related-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="product-page__related-footer">
            <button className="product-page__show-more" onClick={() => navigate('/shop')}>
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
