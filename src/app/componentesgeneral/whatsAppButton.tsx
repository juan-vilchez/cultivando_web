// src/app/components/WhatsAppButton.tsx
"use client"; // Asegúrate de agregar esta línea

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const whatsappNumber = "+51989621305"; // Reemplaza con tu número de WhatsApp con el código de país
  const whatsappMessage = "¡Hola! Quiero obtener más información."; // Mensaje predeterminado (opcional)

  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    const getWhatsappLink = () => {
      if (typeof navigator !== "undefined") {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          return `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
        } else {
          return `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
        }
      }
      return ""; // Retorna una cadena vacía si navigator no está definido
    };

    setWhatsappLink(getWhatsappLink());
  }, [whatsappNumber, whatsappMessage]); // Dependencias para que se actualice si cambian

  return (
    whatsappLink && ( // Renderiza solo si whatsappLink tiene un valor
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50"
      >
        <Image src="/images/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
      </a>
    )
  );
}