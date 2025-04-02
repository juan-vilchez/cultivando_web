// src/app/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import Header from './header';

export default function Home() {
  return (
    <div>
      <Header /> 

      <main>
        <div className="carousel w-full">
          {[1, 2, 3].map((index) => (
            <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
              <Image src={`/images/carousel-${index}.png`} alt={`Slide ${index}`} width={1920} height={800} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index === 1 ? 3 : index - 1}`} className="btn btn-circle">❮</a>
                <a href={`#slide${index === 3 ? 1 : index + 1}`} className="btn btn-circle">❯</a>
              </div>
              <div className="absolute text-center transform -translate-y-1/2 left-0 right-0 top-1/2">
                <h2 className="text-4xl font-bold text-gray-800">Título {index}</h2>
                <p className="text-lg text-gray-800">Subtítulo {index}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4">
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-cover bg-center py-16" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Terapia Ocupacional</h3>
              <p className="text-gray-700">Descripción de la terapia ocupacional</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Terapia Psicológica</h3>
              <p className="text-gray-700">Descripción de la terapia psicológica</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Estimulación Temprana</h3>
              <p className="text-gray-700">Descripción de la estimulación temprana</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© {new Date().getFullYear()} Cultivando Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}