// app/contacto/page.tsx
import Image from 'next/image';
import Header from '../componentesgeneral/header';
import Footer from '../componentesgeneral/footer';
import FooterContact from '../componentesgeneral/footerContact';

export const metadata = {
  title: 'Contacto - Centro de Terapias Integrales',
  description: 'Contáctanos para más información sobre nuestros servicios terapéuticos',
};

export default function ContactoPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
        event.currentTarget.reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Ocurrió un error. Por favor inténtalo nuevamente.');
      console.error(error);
    }
  }

  return (
    <>
    <Header/>

    
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 w-full bg-blue-800 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-lg">Estamos aquí para ayudarte en lo que necesites</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Envía un mensaje</h2>
            {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono (opcional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp Highlight */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Image 
                    src="/images/whatsapp-icon.svg" 
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-green-800">Contacto por WhatsApp</h3>
              </div>
              <p className="text-gray-700 mb-4">Para consultas rápidas, escríbenos directamente:</p>
              <a 
                href="https://wa.me/51987654321" // Reemplaza con tu número
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                <Image 
                  src="/images/whatsapp-icon.svg" 
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Chatear por WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Image 
                      src="/images/location-icon.svg" 
                      alt="Ubicación"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dirección</h4>
                    <p className="text-gray-600">Av. Ejemplo 123, Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Image 
                      src="/images/phone-icon.svg" 
                      alt="Teléfono"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">(01) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Image 
                      src="/images/email-icon.svg" 
                      alt="Email"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Correo electrónico</h4>
                    <p className="text-gray-600">info@terapiasintegrales.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Image 
                      src="/images/clock-icon.svg" 
                      alt="Horario"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horario de atención</h4>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 am - 8:00 pm</p>
                    <p className="text-gray-600">Sábados: 9:00 am - 2:00 pm</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Síguenos en redes</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Image src="/images/facebook-icon.svg" alt="Facebook" width={20} height={20} />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Image src="/images/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <h3 className="text-xl font-bold text-blue-800 p-6">Nuestra ubicación</h3>
          <div className="h-80 w-full bg-gray-200">
            {/* Reemplaza esto con tu mapa embebido */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.965949656809!2d-77.0425489241646!3d-12.04699008818537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1623259877800!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>

    <FooterContact/>
    <Footer/>
    </>

  );
}