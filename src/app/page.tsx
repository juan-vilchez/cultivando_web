// src/app/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import Header from './componentesgeneral/header';
import Footer from './componentesgeneral/footer';
import FooterContact from './componentesgeneral/footerContact';
import Carousel from './componentesgeneral/carousel';

export default function Home() {
  return (
    <div>
      <Header /> 
      <main>
        <Carousel/>
        <section className="bg-cover bg-center py-16" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Terapia de Lenguaje */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative">
                  <Image
                    src="/images/t-lenguaje.jpg"
                    alt="Terapia de Lenguaje"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Terapia de Lenguaje</h3>
                  <p className="text-gray-700 mb-4">Intervención especializada para mejorar la comunicación oral y escrita en niños y adultos.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    Más información
                  </button>
                </div>
              </div>

              {/* Terapia Ocupacional */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative">
                  <Image
                    src="/images/t-ocupacional.jpg"
                    alt="Terapia Ocupacional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Terapia Ocupacional</h3>
                  <p className="text-gray-700 mb-4">Mejoramos la autonomía y participación en actividades cotidianas mediante estrategias personalizadas.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    Más información
                  </button>
                </div>
              </div>

              {/* Terapia de Conducta */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative">
                  <Image
                    src="/images/t-conducta.jpg"
                    alt="Terapia de Conducta"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Terapia de Conducta</h3>
                  <p className="text-gray-700 mb-4">Modificación de patrones de comportamiento mediante técnicas basadas en evidencia.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    Más información
                  </button>
                </div>
              </div>

              {/* Psicología */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative">
                  <Image
                    src="/images/t-psicologia.jpg"
                    alt="Psicología"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Psicología</h3>
                  <p className="text-gray-700 mb-4">Atención integral para el bienestar emocional y mental en todas las etapas de la vida.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    Más información
                  </button>
                </div>
              </div>

              {/* Terapia de Aprendizaje */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative">
                  <Image
                    src="/images/t-aprendizaje.jpg"
                    alt="Terapia de Aprendizaje"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Terapia de Aprendizaje</h3>
                  <p className="text-gray-700 mb-4">Intervención especializada para dificultades académicas y desarrollo de habilidades cognitivas.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    Más información
                  </button>
                </div>
              </div>

              {/* Talleres educativos */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative">
                  <Image
                    src="/images/t-aprendizaje.jpg"
                    alt="Talleres educativos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Talleres educativos</h3>
                  <p className="text-gray-700 mb-4">Espacios interactivos para el desarrollo de habilidades sociales y emocionales en grupo.</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterContact/>
      <Footer />

    </div>
  );
}