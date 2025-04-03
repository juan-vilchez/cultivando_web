import Image from 'next/image';
import Header from '../componentesgeneral/header';
import FooterContact from '../componentesgeneral/footerContact';
import Footer from '../componentesgeneral/footer';

export default function NosotrosPage() {
  return (

    <>
        <Header/>

        <div className="bg-gray-50">
      {/* Hero Section */}
      {/* <section className="relative h-96 w-full">
        <Image
          src="/images/nosotros-hero.jpg"
          alt="Equipo de terapeutas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Centro de Terapias Integrales</h1>
            <p className="text-xl md:text-2xl">Más de 10 años transformando vidas</p>
          </div>
        </div>
      </section> */}

      {/* Nuestra Historia */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/historia.jpg"
              alt="Historia del centro"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Nuestra Historia</h2>
            <p className="text-lg mb-4">
              Fundado en 2013, el Centro de Terapias Integrales nació con la misión de brindar atención 
              especializada en terapia ocupacional y psicológica a la comunidad de Lima.
            </p>
            <p className="text-lg mb-4">
              Lo que comenzó como un pequeño consultorio hoy es un centro multidisciplinario reconocido 
              por su enfoque humano y profesional.
            </p>
            <p className="text-lg">
              Hemos atendido a más de 2,500 pacientes y formado alianzas con las principales instituciones 
              educativas y de salud de la región.
            </p>
          </div>
        </div>
      </section>

    

      {/* Nuestra Filosofía */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nuestra Filosofía</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">👩‍⚕️</div>
            <h3 className="text-xl font-semibold mb-3">Enfoque Integral</h3>
            <p>Atendemos a la persona en todas sus dimensiones: física, emocional, cognitiva y social.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">💖</div>
            <h3 className="text-xl font-semibold mb-3">Atención Personalizada</h3>
            <p>Cada tratamiento se diseña según las necesidades específicas del paciente.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-3">Trabajo en Equipo</h3>
            <p>Nuestros especialistas colaboran para ofrecer la mejor solución a cada caso.</p>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nuestras Instalaciones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/instalacion-1.jpg"
                alt="Sala de terapia"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/instalacion-2.jpg"
                alt="Área de espera"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">
              Contamos con espacios especialmente diseñados para cada tipo de terapia, equipados con 
              tecnología de punta y materiales didácticos de última generación.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Agendar una visita
            </button>
          </div>
        </div>
      </section>
    </div>

    <FooterContact/>
    <Footer/>
    </>
  );
}

