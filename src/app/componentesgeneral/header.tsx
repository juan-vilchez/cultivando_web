"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      {/* Notificación extra para contactos */}
      {/* 
      <div className="bg-orange-200 -mx-4 px-4 py-2 text-gray-800 text-sm md:text-base flex items-center justify-center md:justify-start space-x-4">
        <div className="flex items-center space-x-1">
          <Image src="/images/location-pin.svg" alt="Sede" width={16} height={16} />
          <span>Sedes: San Juan de Miraflores - Lima</span>
        </div>
        <div className="flex items-center space-x-1">
          <Image src="/images/phone.svg" alt="Teléfono" width={16} height={16} />
          <span>Teléfono: 989 621 305</span>
        </div>
        <div className="flex items-center space-x-1">
          <Image src="/images/envelope-lines.svg" alt="Email" width={16} height={16} />
          <span>Email: cultivando02@gmail.com</span>
        </div>
      </div> 
      */}

    <header className="bg-gray-100 p-2">
      
      {/* Contenedor principal con padding vertical y horizontal en escritorio */}
      <div className="flex justify-between items-center py-4 md:py-6 md:px-16 lg:px-24 xl:px-32">
        {/* Contenedor para el Logo y el Menú de Escritorio - Alineación vertical centrada */}
        <div className="flex items-center md:space-x-8">
          <Image src="/images/cultivando-tittle-rec.png" alt="Logo" width={180} height={180} className="rounded-full mr-16 " />

          {/* Menú normal para escritorio */}
          <nav className="mt-4 md:mt-0 px-4 hidden md:flex md:flex-row md:space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-500 py-2">INICIO</Link>
            <Link href="/servicios" className="text-gray-800 hover:text-blue-500 py-2">SERVICIOS</Link>
            <Link href="/nosotros" className="text-gray-800 hover:text-blue-500 py-2">NOSOTROS</Link>
            {/* <Link href="/equipo" className="text-gray-800 hover:text-blue-500 py-2">Equipo</Link> */}
            {/* <Link href="/formacion" className="text-gray-800 hover:text-blue-500 py-2">Formación</Link> */}
            <Link href="/contacto" className="text-gray-800 hover:text-blue-500 py-2">CONTACTO</Link>
          </nav>
        </div>

        {/* Botón de menú móvil alineado a la derecha */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.828-4.829a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.829 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Logos de redes sociales - Ocultos en móvil, visibles en escritorio */}
        <div className="hidden md:flex space-x-4">
          <a href="https://www.facebook.com/cultivando.edu" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook.svg" alt="Facebook" width={30} height={30} />
          </a>
          <a href="https://www.facebook.com/cultivando.edu" target="_blank" rel="noopener noreferrer">
            <Image src="/images/instagram.svg" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.tiktok.com/@cultivandope" target="_blank" rel="noopener noreferrer">
            <Image src="/images/tiktok.svg" alt="TikTok" width={30} height={30} />
          </a>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <nav className={`md:hidden ${isMenuOpen ? 'flex flex-col space-y-2 mt-2' : 'hidden'}`}>
        <Link href="/" className="text-gray-800 hover:text-blue-500">INICIO</Link>
        <Link href="/servicios" className="text-gray-800 hover:text-blue-500">SERVICIOS</Link>
        <Link href="/nosotros" className="text-gray-800 hover:text-blue-500">NOSOTROS</Link>
        {/* <Link href="/equipo" className="text-gray-800 hover:text-blue-500">Equipo</Link> */}
        {/* <Link href="/formacion" className="text-gray-800 hover:text-blue-500">Formación</Link> */}
        <Link href="/contacto" className="text-gray-800 hover:text-blue-500">CONTACTO</Link>
      </nav>
    </header>
    </main>
    
  );
}