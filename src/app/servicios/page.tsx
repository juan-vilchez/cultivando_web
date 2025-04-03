// app/servicios/page.tsx
import Image from 'next/image';
import Header from '../componentesgeneral/header';
import FooterContact from '../componentesgeneral/footerContact';
import Footer from '../componentesgeneral/footer';

export const metadata = {
  title: 'Nuestros Servicios - Centro de Terapias Integrales',
  description: 'Descubre nuestros servicios especializados en terapia ocupacional, psicología y desarrollo integral',
};

export default function ServiciosPage() {
  const servicios = [
    {
      id: 1,
      titulo: 'Terapia Ocupacional',
      imagen: '/images/t-ocupacional.jpg',
      descripcion: 'Mejoramos la autonomía en actividades cotidianas mediante estrategias personalizadas para todas las edades.',
      caracteristicas: [
        'Integración sensorial',
        'Rehabilitación física',
        'Adaptación del entorno'
      ]
    },
    {
      id: 2,
      titulo: 'Psicología Clínica',
      imagen: '/images/t-psicologia.jpg',
      descripcion: 'Atención especializada para el bienestar emocional con enfoques basados en evidencia científica.',
      caracteristicas: [
        'Terapia cognitivo-conductual',
        'Manejo de ansiedad',
        'Terapia familiar'
      ]
    },
    {
      id: 3,
      titulo: 'Terapia de Lenguaje',
      imagen: '/images/t-lenguaje.jpg',
      descripcion: 'Intervención para trastornos de comunicación y lenguaje en todas las etapas de desarrollo.',
      caracteristicas: [
        'Tartamudez',
        'Retraso del lenguaje',
        'Dificultades de articulación'
      ]
    },
    {
      id: 4,
      titulo: 'Neuropsicología',
      imagen: '/images/t-neuropsicologia.jpg',
      descripcion: 'Evaluación e intervención en trastornos del desarrollo, aprendizaje y daño cerebral.',
      caracteristicas: [
        'Evaluación cognitiva',
        'Rehabilitación neuropsicológica',
        'Manejo de TDAH'
      ]
    },
    {
      id: 5,
      titulo: 'Talleres Educativos',
      imagen: '/images/t-talleres.jpg',
      descripcion: 'Programas grupales para desarrollo de habilidades sociales, emocionales y cognitivas.',
      caracteristicas: [
        'Habilidades sociales',
        'Manejo de emociones',
        'Técnicas de estudio'
      ]
    },
    {
      id: 6,
      titulo: 'Terapia de Aprendizaje',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Intervención especializada para dificultades académicas y trastornos del aprendizaje.',
      caracteristicas: [
        'Dislexia',
        'Discalculia',
        'Funciones ejecutivas'
      ]
    }
  ];

  const diferenciales = [
    {
      icono: '📊',
      titulo: 'Evaluación Inicial Integral',
      descripcion: 'Evaluación multidisciplinaria para diseñar el plan terapéutico más adecuado.'
    },
    {
      icono: '🔄',
      titulo: 'Seguimiento Continuo',
      descripcion: 'Ajustamos estrategias terapéuticas según los avances del paciente.'
    },
    {
      icono: '🏡',
      titulo: 'Terapia a Domicilio',
      descripcion: 'Sesiones en el entorno natural del paciente cuando se requiere.'
    }
  ];

  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 w-full">
        <Image
          src="/images/servicios-hero.jpg"
          alt="Niños en sesión de terapia"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios Especializados</h1>
            <p className="text-lg md:text-xl">Terapias personalizadas para cada etapa del desarrollo</p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Modelo de Atención Integral</h2>
          <p className="text-lg text-gray-700 mb-6">
            Combinamos terapias tradicionales con enfoques innovadores adaptados a las necesidades individuales
            de cada paciente.
          </p>
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600 max-w-2xl mx-auto">
            <p className="font-medium text-blue-800">
              🧠 <span className="font-semibold">Tecnología aplicada:</span> Utilizamos neurofeedback y herramientas digitales en nuestras terapias
            </p>
          </div>
        </div>
      </section>

      {/* Listado de Servicios */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div 
              key={servicio.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">{servicio.titulo}</h3>
                <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                <ul className="space-y-2 mb-5">
                  {servicio.caracteristicas.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-lg transition-colors">
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nuestro Diferencial */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">¿Qué nos hace diferentes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciales.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icono}</div>
                <h3 className="text-xl font-semibold mb-3">{item.titulo}</h3>
                <p className="text-blue-100">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">¿Necesitas orientación?</h2>
          <p className="text-gray-700 mb-6">
            Nuestros especialistas están disponibles para ayudarte a elegir el mejor tratamiento.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Contactar a un especialista
          </button>
        </div>
      </section>
    </main>
    <FooterContact/>
    <Footer/>
    </>
  );
}