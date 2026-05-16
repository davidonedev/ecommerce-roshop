import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';

function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="main-pad">

        {/* ── Hero ── */}
        <section
          className="relative h-[180px] sm:h-[280px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=1440&q=80')" }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.72)' }} />
          <div className="relative flex flex-col items-center gap-1 text-center">
            <svg className="w-14 h-14 mb-2" viewBox="0 0 40 40" fill="none">
              <path d="M 8 6 L 8 34" stroke="#AC274F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M 8 6 L 20 6 C 31 6 31 20 20 20 L 8 20 M 8 20 L 22 20 C 34 20 34 34 22 34 L 8 34" stroke="#AC274F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <h1 className="font-poppins text-3xl sm:text-[48px] font-bold text-dark leading-[1.1]">Carrinho</h1>
            <nav className="flex items-center gap-1.5 font-poppins text-sm mt-1" aria-label="Navegação">
              <Link to="/" className="font-semibold text-dark hover:text-primary transition-colors duration-200">Início</Link>
              <svg className="w-3.5 h-3.5 text-medium" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="text-medium font-light">Carrinho</span>
            </nav>
          </div>
        </section>

        {/* ── Cart Content ── */}
        <section className="py-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 max-w-[1240px] mx-auto px-4 sm:px-6 items-start">

            <div className="min-w-0">
              {items.length === 0 ? (
                <div className="text-center py-16 px-6 font-poppins">
                  <p className="text-lg text-medium mb-6">Seu carrinho está vazio.</p>
                  <button
                    className="font-poppins text-sm tracking-[0.04em] px-12 py-3.5 bg-dark text-white border border-dark hover:bg-black transition-all duration-200"
                    onClick={() => navigate('/shop')}
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                {/* ── Mobile card list ── */}
                <div className="sm:hidden flex flex-col divide-y divide-[#F0EBE3]">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 py-5">
                      <div className="w-[80px] h-[80px] bg-[#FFE8EC] rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover block" loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                        <p className="font-poppins text-sm font-semibold text-dark leading-[1.3] truncate">{item.name}</p>
                        <p className="font-poppins text-sm text-medium">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <input
                            type="number"
                            className="w-[60px] h-9 border border-[#9F9F9F] rounded text-center font-poppins text-sm text-dark bg-white px-1 focus:outline-none focus:border-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            value={item.qty}
                            min={1}
                            onChange={(e) => updateQty(item.id, Number(e.target.value))}
                            aria-label={`Quantidade de ${item.name}`}
                          />
                          <span className="font-poppins text-sm font-semibold text-dark">{formatPrice(item.price * item.qty)}</span>
                        </div>
                      </div>
                      <button
                        className="text-primary self-start p-1 hover:text-red-600 transition-colors duration-200"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remover ${item.name}`}
                      >
                        <span className="w-5 h-5 block"><TrashIcon /></span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* ── Desktop table ── */}
                <table className="hidden sm:table w-full border-collapse">
                  <thead className="bg-cream">
                    <tr>
                      <th className="font-poppins text-base font-semibold text-dark py-5 px-5 text-left pl-6" colSpan={2}>Produto</th>
                      <th className="font-poppins text-base font-semibold text-dark py-5 px-5 text-left">Preço</th>
                      <th className="font-poppins text-base font-semibold text-dark py-5 px-5 text-left">Quantidade</th>
                      <th className="font-poppins text-base font-semibold text-dark py-5 px-5 text-left">Subtotal</th>
                      <th className="font-poppins text-base font-semibold text-dark py-5 px-5 pr-6" />
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-b border-[#F0EBE3] last:border-0">
                        <td className="py-6 pl-6 pr-4 align-middle w-[110px]">
                          <div className="w-[105px] h-[105px] bg-[#FFE8EC] rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover block" loading="lazy" />
                          </div>
                        </td>
                        <td className="py-6 px-5 align-middle font-poppins text-base text-dark whitespace-nowrap">{item.name}</td>
                        <td className="py-6 px-5 align-middle font-poppins text-base text-medium whitespace-nowrap">{formatPrice(item.price)}</td>
                        <td className="py-6 px-5 align-middle w-[90px]">
                          <input
                            type="number"
                            className="w-[72px] h-11 border border-[#9F9F9F] rounded text-center font-poppins text-base text-dark bg-white px-2 focus:outline-none focus:border-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            value={item.qty}
                            min={1}
                            onChange={(e) => updateQty(item.id, Number(e.target.value))}
                            aria-label={`Quantidade de ${item.name}`}
                          />
                        </td>
                        <td className="py-6 px-5 align-middle font-poppins text-base text-dark whitespace-nowrap">{formatPrice(item.price * item.qty)}</td>
                        <td className="py-6 pr-6 px-5 align-middle w-12">
                          <button
                            className="text-primary flex items-center p-1 hover:text-red-600 transition-colors duration-200"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remover ${item.name}`}
                          >
                            <span className="w-[22px] h-[22px]"><TrashIcon /></span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {items.length > 0 && (
              <div className="bg-cream px-10 py-9 rounded-sm">
                <h2 className="font-poppins text-[28px] font-bold text-dark mb-7 text-center">Total do Carrinho</h2>

                <div className="flex items-start justify-between gap-4 py-3">
                  <span className="font-poppins text-base font-medium text-dark">Subtotal</span>
                  <span className="font-poppins text-base text-medium">{formatPrice(subtotal)}</span>
                </div>

                <div className="h-px bg-[#E8D0D4] my-2" />

                <div className="flex items-start justify-between gap-4 py-3">
                  <span className="font-poppins text-base font-medium text-dark">Total</span>
                  <span className="font-poppins text-xl font-semibold text-primary">{formatPrice(subtotal)}</span>
                </div>

                <button
                  className="w-full h-[58px] bg-dark text-white border border-dark rounded-md font-poppins text-lg font-medium mt-8 tracking-[0.02em] hover:bg-black transition-all duration-[250ms]"
                  onClick={() => navigate('/checkout')}
                >
                  Finalizar Compra
                </button>
              </div>
            )}
          </div>
        </section>

        <ShopFeatures />
      </main>
      <Footer />
    </>
  );
}
