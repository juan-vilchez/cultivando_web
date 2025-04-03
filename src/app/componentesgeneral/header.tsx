// src/app/components/Header.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 pt-0 p-4">
      {/* Notificaciín extra para contactos */}
      <div className="bg-orange-200 -mx-4 px-4 py-2 text-gray-800">
        Sedes: San Juan de Miraflores - Lima | Teléfono: 989 621 305 | Email: cultivando02@gmail.com
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center">
          <Image src="/images/cultivando-tittle-rec.png" alt="Logo" width={150} height={150} className="rounded-full mr-4" />

          {/* Menú desplegable para móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-blue-500">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.828-4.829a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.829 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú normal para escritorio */}
          <nav className={`space-x-4 ${isMenuOpen ? 'flex flex-col' : 'hidden'} md:flex md:space-x-4 md:flex-row`}>
            <Link href="/" className="text-gray-800 hover:text-blue-500 border-b border-gray-300 pb-2 md:border-b-0 md:pb-0">Inicio</Link>
            <Link href="/nosotros" className="text-gray-800 hover:text-blue-500 border-b border-gray-300 pb-2 md:border-b-0 md:pb-0">Nosotros</Link>
            <Link href="/servicios" className="text-gray-800 hover:text-blue-500 border-b border-gray-300 pb-2 md:border-b-0 md:pb-0">Servicios</Link>
            <Link href="/equipo" className="text-gray-800 hover:text-blue-500 border-b border-gray-300 pb-2 md:border-b-0 md:pb-0">Equipo</Link>
            {/* <Link href="/formacion" className="text-gray-800 hover:text-blue-500 border-b border-gray-300 pb-2 md:border-b-0 md:pb-0">Formación</Link> */}
            <Link href="/contacto" className="text-gray-800 hover:text-blue-500 border-b border-gray-300 pb-2 md:border-b-0 md:pb-0">Contacto</Link>
          </nav>
        </div>

        <div className="flex space-x-4">
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
    </header>
  );
}