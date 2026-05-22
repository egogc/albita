import { Heart, Users, School, Sparkles, Star, Menu, X, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import pollito from "../assets/pollito2.jpg";
import product01 from "../assets/01.png";
import product02 from "../assets/02.png";
import product03 from "../assets/03.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroSectionRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!heroImgRef.current || !heroSectionRef.current) return;
        if (heroSectionRef.current.getBoundingClientRect().bottom < 0) return;
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5C518]">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo - centered on mobile, left on desktop */}
            <div className="flex-1 md:flex-initial">
              <h1 className="text-2xl md:text-3xl font-black text-[#1A1A2E] text-center md:text-left" style={{ fontFamily: 'Nunito, sans-serif' }}>
                La Granja de Albita
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-[#1A1A2E]">
                <li className="hover:opacity-70 cursor-pointer transition-opacity font-bold text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  La Experiencia
                </li>
                <li className="hover:opacity-70 cursor-pointer transition-opacity font-bold text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Razas
                </li>
                <li className="hover:opacity-70 cursor-pointer transition-opacity font-bold text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Programas
                </li>
                <li className="hover:opacity-70 cursor-pointer transition-opacity font-bold text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Tienda
                </li>
                <li className="hover:opacity-70 cursor-pointer transition-opacity font-bold text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Contacto
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1A1A2E] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-6 pb-4">
              <ul className="flex flex-col gap-4 text-[#1A1A2E]">
                <li className="text-center py-3 hover:opacity-70 cursor-pointer transition-opacity font-bold text-lg border-b border-[#1A1A2E]/20" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  La Experiencia
                </li>
                <li className="text-center py-3 hover:opacity-70 cursor-pointer transition-opacity font-bold text-lg border-b border-[#1A1A2E]/20" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Razas
                </li>
                <li className="text-center py-3 hover:opacity-70 cursor-pointer transition-opacity font-bold text-lg border-b border-[#1A1A2E]/20" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Programas
                </li>
                <li className="text-center py-3 hover:opacity-70 cursor-pointer transition-opacity font-bold text-lg border-b border-[#1A1A2E]/20" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Tienda
                </li>
                <li className="text-center py-3 hover:opacity-70 cursor-pointer transition-opacity font-bold text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Contacto
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section ref={heroSectionRef} className="relative h-screen w-full overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0">
          <img
            ref={heroImgRef}
            src={pollito}
            alt="Pollito en la granja"
            className="absolute w-full object-cover object-center"
            style={{ height: '130%', top: '-15%', willChange: 'transform' }}
          />
          {/* Dark navy overlay */}
          <div className="absolute inset-0 bg-[#1A1A2E]/45"></div>
        </div>

        {/* Content overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 space-y-8">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Los 21 días más mágicos de tu vida
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-normal leading-relaxed">
            Vive en familia el nacimiento de la vida.<br />
            Kits de incubación guiados para hogares, colegios y ancianatos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8">
            <button className="bg-[#F5C518] hover:bg-[#F5C518]/90 text-[#1A1A2E] px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Comienza la aventura
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] px-10 py-5 rounded-full text-lg font-bold transition-all">
              Ver cómo funciona
            </button>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FEFEFE] to-transparent"></div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-[#1A1A2E] mb-16" style={{ fontFamily: 'Nunito, sans-serif' }}>
            ¿Cómo funciona?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: "1", title: "Elige tu kit", desc: "Selecciona huevos de razas ornamentales únicas" },
              { num: "2", title: "Incuba con guía", desc: "Te acompañamos día a día durante los 21 días" },
              { num: "3", title: "¡Celebra el nacimiento!", desc: "Vive la magia de ver nacer tus pollitos" }
            ].map((step) => (
              <div key={step.num} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F5C518] text-[#1A1A2E] text-3xl font-black shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A2E]">{step.title}</h3>
                <p className="text-lg text-[#1A1A2E]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 py-20 lg:px-16 bg-gradient-to-b from-white to-[#B8E4F9]/10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-[#1A1A2E] mb-16" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Nuestros productos
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Kit Incubación Completo",
                price: "$450.000",
                image: product01,
                desc: "Incubadora + 6 huevos + guía completa"
              },
              {
                title: "Gallinas Ornamentales",
                price: "$280.000",
                image: product02,
                desc: "Razas exóticas y coloridas"
              },
              {
                title: "Huevos Fértiles",
                price: "$90.000",
                image: product03,
                desc: "Pack de 6 huevos garantizados"
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="p-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-[#1A1A2E]">{product.title}</h3>
                  <p className="text-[#1A1A2E]/70">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-[#F5C518] text-[#1A1A2E] px-4 py-2 rounded-full font-bold text-xl">
                      {product.price}
                    </span>
                    <button className="bg-[#FF7043] hover:bg-[#FF7043]/90 text-white px-6 py-2 rounded-full font-bold transition-colors">
                      Ver producto
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="flex justify-center mt-12">
            <button className="border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white px-8 py-4 rounded-full font-bold transition-all text-lg group">
              Ver todos los productos
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-[#1A1A2E] mb-16" style={{ fontFamily: 'Nunito, sans-serif' }}>
            ¿Para quién es?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Familias",
                desc: "Crea recuerdos inolvidables mientras tus hijos aprenden sobre la vida"
              },
              {
                icon: <School className="w-12 h-12" />,
                title: "Colegios",
                desc: "Herramienta educativa perfecta para ciencias naturales"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Adultos mayores",
                desc: "Actividad terapéutica que conecta con la naturaleza"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#B8E4F9]/30 to-[#B8E4F9]/10 rounded-3xl p-8 text-center space-y-4 hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F5C518] text-[#1A1A2E]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A2E]">{item.title}</h3>
                <p className="text-lg text-[#1A1A2E]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 lg:px-16 bg-[#B8E4F9]/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-[#1A1A2E] mb-16" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Lo que dicen nuestras familias
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text: "Ver nacer los pollitos fue lo más emocionante que vivimos como familia este año. Mis hijos no paraban de hablar de ello en el colegio.",
                name: "María González",
                stars: 5
              },
              {
                text: "Como profesora, es la mejor herramienta pedagógica que he usado. Los niños aprendieron sobre responsabilidad, paciencia y naturaleza.",
                name: "Profesora Ana Ramírez",
                stars: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg space-y-4">
                <div className="text-6xl text-[#F5C518] leading-none">"</div>
                <p className="text-lg text-[#1A1A2E]/80">{testimonial.text}</p>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F5C518] text-[#F5C518]" />
                  ))}
                </div>
                <p className="font-bold text-[#1A1A2E]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#F5C518] px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <Sparkles className="w-16 h-16 mx-auto text-[#1A1A2E]" />
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A2E]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            ¿Listo para comenzar la aventura?
          </h2>
          <p className="text-xl text-[#1A1A2E]/80">
            Contáctanos por WhatsApp y te ayudaremos a elegir el kit perfecto para ti
          </p>
          <button className="bg-[#1A1A2E] hover:bg-[#1A1A2E]/90 text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            Escribir por WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-white px-6 py-12 lg:px-16">
        <div className="mx-auto max-w-6xl text-center space-y-6">
          <h3 className="text-3xl font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>
            La Granja de Albita
          </h3>
          <p className="text-white/70">Medellín, Colombia</p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4 py-4">
            <a href="#" className="w-12 h-12 rounded-full bg-[#F5C518] flex items-center justify-center hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#F5C518] flex items-center justify-center hover:scale-110 transition-transform">
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#F5C518] flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#F5C518] flex items-center justify-center hover:scale-110 transition-transform">
              <Youtube className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#F5C518] flex items-center justify-center hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
          </div>

          <p className="text-white/60 text-sm">
            © 2026 La Granja de Albita. Creando momentos mágicos, un pollito a la vez.
          </p>
        </div>
      </footer>
    </div>
  );
}