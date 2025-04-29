// src/app/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import Header from './componentesgeneral/header';
import Footer from './componentesgeneral/footer';
import FooterContact from './componentesgeneral/footerContact';
import Carousel from './componentesgeneral/carousel';
import Servicios from './servicios/servicios';

export default function Home() {
  return (
    <div>
      <Header /> 
      <main>
        <Carousel/>
        <section className="bg-cover bg-center py-16" style={{ backgroundImage: 'url(/images/cultivando-tittle-rec.png)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Nuestros Servicios</h2>
              {/* Terapia de Lenguaje */}

              <Servicios />


            
            
          </div>
        </section>
      </main>

      <FooterContact/>
      <Footer />

    </div>
  );
}