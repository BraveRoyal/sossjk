import React from 'react';
import { Phone, MessageSquare, PenTool as Tool, DoorOpen, SlidersHorizontal, Hammer, MapPin, Clock, ChevronRight, Mail, MessageCircle } from 'lucide-react';
import Logo from './assets/LogoFundoTransparente2.png'
import './styles/custom.css'

function App() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511946159837', '_blank');
  };
  const handleTel = () => {
    window.open('tel:5511946159837', '_blank');
  };
  const handleMail = () => {
    window.open('mailto:sos.sjk@outlook.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-header text-white from-amber-50 to-orange-50 py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          {/* Contato - escondido no mobile */}
          <div className="hidden md:flex flex-col items-start gap-3">
            <h4 className="text-lg font-semibold">Entre em contato:</h4>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 hover:text-orange-600"
            >
              <MessageSquare className="w-5 h-5" />
              Mensagem no WhatsApp
            </button>
          </div>

          {/* Logo - sempre visível e centralizada */}
          <div className="flex justify-center">
            <img
              src={Logo}
              alt="Logo da S.O.S SJK"
              className="h-16 md:h-24 transition-all duration-300"
            />
          </div>

          {/* Horário - escondido no mobile */}
          <div className="hidden md:flex flex-col items-end gap-3">
            <h4 className="text-lg font-semibold">Horário de Funcionamento</h4>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5" />
              Seg-Sáb: 8h às 18h
            </div>
          </div>

        </div>
      </header>

      <header className="bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Porta emperrando? Gaveta torta?
          <br />
          <span className="text-orange-600">Nós resolvemos pra você.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Reparos rápidos e profissionais em marcenaria, direto na sua casa.
        </p>
          <button
            onClick={handleWhatsApp}
            className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <MessageSquare className="w-5 h-5" />
            Peça um Orçamento Grátis pelo WhatsApp
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<DoorOpen className="w-8 h-8" />}
              title="Conserto de Portas"
              description="Conserte dobradiças rangendo, maçanetas soltas e problemas de alinhamento"
            />
            <ServiceCard
              icon={<SlidersHorizontal className="w-8 h-8" />}
              title="Alinhamento de Armários"
              description="Ajuste e conserto de portas e gavetas de armários"
            />
            <ServiceCard
              icon={<Tool className="w-8 h-8" />}
              title="Reparos Gerais"
              description="Prateleiras, acabamentos e consertos em madeira"
            />
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Trabalho</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GalleryItem
              before="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"
              after="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800"
              title="Reparo de Armário"
            />
            <GalleryItem
              before="https://images.unsplash.com/photo-1595514535415-dae8580c416c?w=800"
              after="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800"
              title="Restauração de Porta"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              text="Eles consertaram nossos armários de cozinha com rapidez e profissionalismo. Ótimo serviço!"
              author="Sarah Johnson"
            />
            <TestimonialCard
              text="Trabalho excelente nos consertos das nossas portas. Muito confiável e habilidoso."
              author="Michael Chen"
            />
            <TestimonialCard
              text="Resposta rápida e consertos de qualidade. Altamente recomendado!"
              author="Emma Davis"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Fale Conosco</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
              <div className="space-y-4">
                <button
                  onClick={handleTel}
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-600"
                >
                  <Phone className="w-5 h-5" />
                  (11) 94615-9837
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-600"
                >
                  <MessageSquare className="w-5 h-5" />
                  Mensagem no WhatsApp
                </button>
                <button
                  onClick={handleMail}
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-600"
                >
                  <Mail className="w-5 h-5" />
                  sos.sjk@outlook.com
                </button>
              </div>
            </div>
            <div>
              <form onSubmit={SendMessage} className="space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Endereço de E-mail"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  name="text"
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">S.O.S SJK</h3>
            <p className="text-gray-400">
            Serviços profissionais de conserto de marcenaria para sua casa
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Área de Atendimento</h4>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              São Paulo (Zona Sul)
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5" />
              Seg-Sáb: 8h às 18h
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600"
        >
          <MessageSquare className="w-5 h-5" />
          Fale conosco
        </button>
      </div>
    </div>
  );

  function SendMessage(event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    const formData = new FormData(event.target);
    let name = formData.get("name")
    let email = formData.get("email")
    let text = formData.get("text")
    const customText = `Olá, meu nome é ${name} e meu email é ${email}. Venho do site S.O.S SJK para solicitar o seguinte: "${text}"`;
    window.open(`https://wa.me/5511946159837?text=${encodeURIComponent(customText)}`, '_blank');
  }

}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-orange-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function GalleryItem({ before, after, title }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={before} alt="Before" className="rounded-lg w-full h-48 object-cover" />
          <p className="text-center mt-2 text-sm text-gray-500">Antes</p>
        </div>
        <div>
          <img src={after} alt="After" className="rounded-lg w-full h-48 object-cover" />
          <p className="text-center mt-2 text-sm text-gray-500">Depois</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
    </div>
  );
}

function TestimonialCard({ text, author }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <p className="text-gray-600 mb-4">"{text}"</p>
      <p className="font-semibold">- {author}</p>
    </div>
  );
}

export default App;