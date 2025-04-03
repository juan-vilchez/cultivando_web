// src/app/components/FooterContact.tsx
import Image from 'next/image';

export default function FooterContact() {
  return (
    <footer className="bg-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          
            <Image
                  src="/images/cultivando-removebg-preview.png"
                  alt="Mapa Sede San Juan de Miraflores"
                  width={150}
                  height={150}
                />
          
          <h2 className="text-xl font-semibold mt-4 mb-4">Comunícate con Nosotros</h2>
          <p>
            <a href="tel:014801072" className="text-blue-500 hover:underline">989621305</a>
          </p>
          <p>
            <a href="mailto:cultivando02@gmail.com" className="text-blue-500 hover:underline">cultivando02@gmail.com</a>
          </p>
          <p>
            <a href="www.cultivando.pe" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.cultivando.pe</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Dirección</h2>
          <p>1 - Cooperativa América MZ P Lote 32 - San Juan de Miraflores. A la Altura del Puente América en la Panamericana Sur.</p>
          
          <div className="mt-4">
            <a href="https://maps.app.goo.gl/TbD2oAQDdCB8ehN4A" target="_blank" rel="noopener noreferrer" className="md:block hidden">
              <Image
                src="/images/mapa-cultivando-san-juan-de-miraflores.png"
                alt="Mapa Sede San Juan de Miraflores"
                width={300}
                height={200}
              />
            </a>
            <a href="https://maps.app.goo.gl/TbD2oAQDdCB8ehN4A" target="_blank" rel="noopener noreferrer" className="md:hidden block text-blue-500 hover:underline">
              Ver en Google Maps
            </a>
            <p className="mt-2">Sede San Juan de Miraflores</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Horarios</h2>
          <p>Lunes a Viernes de 8:00 AM a 8:00 PM</p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Síguenos en nuestras redes</h2>
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
        </div>
      </div>
    </footer>
  );
}