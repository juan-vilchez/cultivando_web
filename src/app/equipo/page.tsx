import Image from 'next/image';
import Header from '../componentesgeneral/header';
import FooterContact from '../componentesgeneral/footerContact';
import Footer from '../componentesgeneral/footer';

export default function EquipoPage() {
  return (

    <div>

        <Header/>

        <div className="bg-gray-50">

      {/* Nuestro Equipo */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nuestro Equipo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.specialty}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </div>

    <FooterContact/>
    <Footer/>
    </div>
  );
}

// Datos del equipo
const teamMembers = [
  {
    name: "Dra. María Fernández",
    specialty: "Psicóloga Clínica",
    bio: "Especialista en terapia cognitivo-conductual con 15 años de experiencia.",
    image: "/images/team-1.jpg"
  },
  {
    name: "Lic. Carlos Gutiérrez",
    specialty: "Terapeuta Ocupacional",
    bio: "Experto en integración sensorial y rehabilitación física.",
    image: "/images/team-2.jpg"
  },
  {
    name: "Lic. Ana Rodríguez",
    specialty: "Terapeuta de Lenguaje",
    bio: "Especializada en trastornos del desarrollo del lenguaje en niños.",
    image: "/images/team-3.jpg"
  },
  {
    name: "Dra. Luisa Torres",
    specialty: "Neuropsicóloga",
    bio: "Evaluación e intervención en trastornos del aprendizaje.",
    image: "/images/team-4.jpg"
  }
];