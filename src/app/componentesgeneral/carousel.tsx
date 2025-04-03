// src/app/components/Carousel.tsx
"use client"; // Asegúrate de agregar esta línea

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 5000); // Cambia la imagen cada N segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  return (
    <div className="carousel w-full relative overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
      >
        {[1, 2, 3].map((index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={`/images/carousel-${index}.png`}
              alt={`Slide ${index}`}
              width={1920}
              height={800}
            />
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
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={handlePrev} className="btn btn-circle">
          ❮
        </button>
        <button onClick={handleNext} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}