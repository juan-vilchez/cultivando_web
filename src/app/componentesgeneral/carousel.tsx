"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ImageFadeTransition() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  // Asegúrate de que las imágenes estén en public/images/
  const images = [
    {
      src: "/images/PS aula.jpg", // Sala de espera para descripcion general
      title: "Centro de Terapia Infantil",
      subtitle: "Cultivando su independencia desde un espacio pensado para ellos"
    },
    {
      src: "/images/TO aula.jpg", // Instalacines + descripcion
      title: "Materiales y Equipo Especializado",
      subtitle: "Un entorno terapéutico diseñado para el éxito: instalaciones y materiales que impulsan la efectividad de nuestros servicios."
    },
    {
      src: "/images/carousel-3.png",  // Instalacines + descripcion
      title: "Grandes Profesionales al Servicio de tu Bienestar",
      subtitle: "Un espacio seguro con instalaciones y materiales que fomentan el desarrollo psicológico y la autonomía en niños."
    }
  ];

  //whatsapp logica procurar modularizar y extraer logica en un hook reutilizable 
  const handleWhatsApp = () => {
    const number = "+51989621305";
    const message = "¡Hola! Quiero agendar una cita.";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile 
      ? `whatsapp://send?phone=${number}&text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };







  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fadeOut');
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeState('fadeIn');
      }, 500);
      
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
      {/* Imágenes con efecto de transición */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex 
              ? fadeState === 'fadeIn' ? 'opacity-100' : 'opacity-0'
              : 'opacity-0'
          }`}
        >
          <Image
            src={img.src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            quality={100}
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Capa de velo semitransparente */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Texto en la parte izquierda */}
      <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 z-20 text-white max-w-md px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{images[currentIndex].title}</h2>
        <p className="text-lg md:text-xl mb-6">{images[currentIndex].subtitle}</p>
        <button onClick={handleWhatsApp} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"> {/* ajustar color de boton */}
          Agenda tu cita hoy
        </button>
      </div>
    </div>
  );
}