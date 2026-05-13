import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';

const contactInfo = [
  {
    id: 'address',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Endereço',
    lines: ['236 5th SE Avenue, New', 'York NY10000, Estados', 'Unidos'],
  },
  {
    id: 'phone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.5 2 2 0 0 1 3.59 1.33h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Telefone',
    lines: ['Celular: +(84) 546-6789', 'Fixo: +(84) 456-6789'],
  },
  {
    id: 'time',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Horário de Atendimento',
    lines: ['Segunda a Sexta: 9h – 22h', 'Sábado e Domingo: 9h – 21h'],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>

        {/* ── Hero ── */}
        <section
          className="relative h-[280px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1440&q=80')" }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.72)' }} />
          <div className="relative flex flex-col items-center gap-1 text-center">
            <svg className="w-14 h-14 mb-2" viewBox="0 0 40 40" fill="none">
              <path d="M5 32 L20 8 L35 32" stroke="#AC274F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M10 24 L30 24" stroke="#AC274F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <h1 className="font-poppins text-[48px] font-bold text-dark leading-[1.1]">Contato</h1>
            <nav className="flex items-center gap-1.5 font-poppins text-sm mt-1" aria-label="Navegação">
              <Link to="/" className="font-semibold text-dark hover:text-primary transition-colors duration-200">Início</Link>
              <svg className="w-3.5 h-3.5 text-medium" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              <span className="text-medium font-light">Contato</span>
            </nav>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-[72px] pb-14 text-center px-6">
          <h2 className="font-poppins text-[36px] font-bold text-dark mb-4">Entre em Contato Conosco</h2>
          <p className="font-poppins text-sm text-medium leading-[1.8] max-w-[540px] mx-auto">
            Para mais informações sobre nossos produtos e serviços, sinta-se à vontade para<br />
            nos enviar uma mensagem. Nossa equipe está sempre pronta para ajudá-lo!
          </p>
        </section>

        {/* ── Main ── */}
        <section className="pb-24 bg-white">
          <div className="grid grid-cols-[340px_1fr] max-lg:grid-cols-1 gap-20 max-lg:gap-14 max-w-[1240px] mx-auto px-6 items-start">

            {/* Contact Info */}
            <div className="flex flex-col gap-12 pt-2">
              {contactInfo.map((item) => (
                <div key={item.id} className="flex items-start gap-6">
                  <span className="flex-shrink-0 w-7 h-7 mt-0.5 flex items-center justify-center text-dark" aria-hidden="true">
                    <span className="w-7 h-7 block">{item.icon}</span>
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-poppins text-xl font-semibold text-dark mb-2">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="font-poppins text-sm text-medium leading-[1.6]">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form className="flex flex-col gap-7" onSubmit={handleSubmit} noValidate>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="name">Seu nome</label>
                <input id="name" name="name" type="text"
                  className="h-[52px] border border-[#9F9F9F] rounded-md px-[18px] font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Ex: João Silva" value={form.name} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email"
                  className="h-[52px] border border-[#9F9F9F] rounded-md px-[18px] font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="exemplo@email.com" value={form.email} onChange={handleChange} required />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="subject">Assunto</label>
                <input id="subject" name="subject" type="text"
                  className="h-[52px] border border-[#9F9F9F] rounded-md px-[18px] font-poppins text-sm text-dark bg-white placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Opcional" value={form.subject} onChange={handleChange} />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-poppins text-sm font-medium text-dark" htmlFor="message">Mensagem</label>
                <textarea id="message" name="message"
                  className="border border-[#9F9F9F] rounded-md px-[18px] py-3.5 font-poppins text-sm text-dark bg-white resize-y min-h-[120px] placeholder:text-light focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Olá! Gostaria de saber mais sobre..." rows={5}
                  value={form.message} onChange={handleChange} required />
              </div>

              {sent && (
                <p className="font-poppins text-sm text-primary-light font-medium">
                  Mensagem enviada! Entraremos em contato em breve.
                </p>
              )}

              <button
                type="submit"
                className="self-start h-[52px] px-20 bg-primary text-white border-0 rounded font-poppins text-base font-medium tracking-[0.04em] hover:bg-primary-dark transition-colors duration-[250ms]"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>

        <ShopFeatures />
      </main>
      <Footer />
    </>
  );
}
