import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShopFeatures from '../components/ShopFeatures/ShopFeatures';
import Footer from '../components/Footer/Footer';
import './ContactPage.scss';

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
        <section className="contact-hero">
          <div className="contact-hero__content">
            <svg className="contact-hero__logo-icon" viewBox="0 0 40 40" fill="none">
              <path d="M5 32 L20 8 L35 32" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M10 24 L30 24" stroke="#B88E2F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <h1 className="contact-hero__title">Contato</h1>
            <nav className="contact-hero__breadcrumb" aria-label="Navegação">
              <Link to="/" className="contact-hero__bc-link">Início</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              <span>Contato</span>
            </nav>
          </div>
        </section>

        {/* ── Introdução ── */}
        <section className="contact-intro">
          <h2 className="contact-intro__title">Entre em Contato Conosco</h2>
          <p className="contact-intro__text">
            Para mais informações sobre nossos produtos e serviços, sinta-se à vontade para<br />
            nos enviar uma mensagem. Nossa equipe está sempre pronta para ajudá-lo!
          </p>
        </section>

        {/* ── Principal ── */}
        <section className="contact-main">
          <div className="contact-main__inner">

            {/* Esquerda — Informações */}
            <div className="contact-info">
              {contactInfo.map((item) => (
                <div key={item.id} className="contact-info__item">
                  <span className="contact-info__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="contact-info__body">
                    <h3 className="contact-info__title">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="contact-info__line">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Direita — Formulário */}
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="name">Seu nome</label>
                <input id="name" name="name" type="text" className="contact-form__input"
                  placeholder="Ex: João Silva" value={form.name} onChange={handleChange} required />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" className="contact-form__input"
                  placeholder="exemplo@email.com" value={form.email} onChange={handleChange} required />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="subject">Assunto</label>
                <input id="subject" name="subject" type="text" className="contact-form__input"
                  placeholder="Opcional" value={form.subject} onChange={handleChange} />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" className="contact-form__textarea"
                  placeholder="Olá! Gostaria de saber mais sobre..." rows={5}
                  value={form.message} onChange={handleChange} required />
              </div>

              {sent && (
                <p className="contact-form__success">
                  Mensagem enviada! Entraremos em contato em breve.
                </p>
              )}

              <button type="submit" className="contact-form__submit">
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
