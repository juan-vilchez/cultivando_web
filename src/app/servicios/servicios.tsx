"use client";

import Image from 'next/image';

export default function Servicios() {
  // Datos de los servicios (ahora dentro del componente)
  const servicios = [
    {
      id: 1,
      tipo: 'Individual',
      titulo: 'Terapia Ocupacional',
      imagen: '/images/t-ocupacional.jpg',
      descripcion: 'Intervención dirigida a mejorar las habilidades motoras finas y gruesas, facilitando la realización de actividades cotidianas como vestirse, alimentarse y participar en el juego.',
      caracteristicas: [
        'Sesión individual: S/. 40',
        'Paquete de 8 sesiones: S/. 280'
      ]
    },
    {
      id: 2,
      tipo: 'Individual',
      titulo: 'Terapia Ocupacional con Enfoque en Integración Sensorial',
      imagen: '/images/t-psicologia.jpg',
      descripcion: 'Se centra en ayudar a los niños a procesar y responder adecuadamente a estímulos sensoriales, utilizando actividades lúdicas que promueven una adecuada integración sensorial.',
      caracteristicas: [
        'Sesión individual: S/. 40',
        'Paquete de 8 sesiones: S/. 280'
      ]
    },
    {
      id: 3,
      tipo: 'Individual',
      titulo: 'Estimulación del Lenguaje',
      imagen: '/images/t-lenguaje.jpg',
      descripcion: 'Fomenta el desarrollo de habilidades comunicativas y del habla, ayudando a los niños a mejorar su capacidad para entender y expresarse verbalmente.',
      caracteristicas: [
        'Sesión individual: S/. 38',
        'Paquete de 8 sesiones: S/. 270'
      ]
    },
    {
      id: 4,
      tipo: 'Individual',
      titulo: 'Terapia de Conducta',
      imagen: '/images/t-neuropsicologia.jpg',
      descripcion: 'Intervención enfocada en identificar y modificar comportamientos desafiantes, enseñando estrategias para manejar emociones y promover conductas positivas.',
      caracteristicas: [
        'Sesión individual: S/. 38',
        'Paquete de 8 sesiones: S/. 270'
      ]
    },
    {
      id: 5,
      tipo: 'Individual',
      titulo: 'Terapia de Aprendizaje',
      imagen: '/images/t-talleres.jpg',
      descripcion: 'Brinda apoyo a niños con dificultades académicas, implementando técnicas y estrategias que facilitan el proceso de aprendizaje y mejoran el rendimiento escolar.',
      caracteristicas: [
        'Sesión individual: S/. 38',
        'Paquete de 8 sesiones: S/. 270'
      ]
    },
    {
      id: 6,
      tipo: 'Individual',
      titulo: 'Terapia Emocional',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Se enfoca en el manejo y expresión adecuada de las emociones, fortaleciendo la inteligencia emocional y promoviendo el bienestar psicológico del niño.',
      caracteristicas: [
        'Sesión individual: S/. 38',
        'Paquete de 8 sesiones: S/. 270'
      ]
    },
    {
      id: 7,
      tipo: 'Individual',
      titulo: 'Terapia de Atención y Concentración',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Diseñada para mejorar la capacidad de los niños para mantener la atención y concentración en diversas tareas, utilizando técnicas que incrementan el enfoque y reducen la distractibilidad.',
      caracteristicas: [
        'Sesión individual: S/. 38',
        'Paquete de 8 sesiones: S/. 270'
      ]
    },
    {
      id: 8,
      tipo: 'Taller grupal',
      titulo: 'Taller de Habilidades Sociales',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Programa orientado a desarrollar y mejorar las habilidades de interacción social, facilitando la comunicación efectiva y la empatía en los niños.',
      caracteristicas: [
        'Costo del Paquete: S/ 135 por 8 sesiones'
      ]
    },
    {
      id: 9,
      tipo: 'Taller grupal',
      titulo: 'Taller de Preparación para el Nido o Jardín',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Facilita la adaptación al entorno escolar para los más pequeños, preparando a los niños para su ingreso al nido o jardín de infancia mediante actividades que promueven la independencia y la socialización.',
      caracteristicas: [
        'Costo del Paquete: S/ 135 por 8 sesiones'
      ]
    },
    {
      id: 10,
      tipo: 'Taller grupal',
      titulo: 'Taller de Lectoescritura',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Fomenta habilidades de lectura y escritura en etapas iniciales, utilizando actividades lúdicas que estimulan el interés por la lectoescritura y desarrollan competencias básicas en estas áreas.',
      caracteristicas: [
        'Costo del Paquete: S/ 135 por 8 sesiones'
      ]
    },
    {
      id: 11,
      tipo: 'Taller grupal',
      titulo: 'Taller de Desarrollo Cognitivo',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Estimula funciones cognitivas como memoria, atención y resolución de problemas, mediante actividades diseñadas para potenciar el desarrollo intelectual y promover el pensamiento crítico en los niños.',
      caracteristicas: [
        'Costo del Paquete: S/ 135 por 8 sesiones'
      ]
    },
    {
      id: 12,
      tipo: 'Individual',
      titulo: 'Evaluaciones Integrales',
      imagen: '/images/t-aprendizaje.jpg',
      descripcion: 'Proceso de evaluación que abarca cinco sesiones, incluyendo entrevista familiar y análisis de áreas cognitivas, sociales, emocionales y familiares. Ideal para cumplir con los requisitos de evaluación solicitados por centros educativos.',
      caracteristicas: [
        'Costo Total: S/ 350'
      ]
    }
  ];

  return (
<section className="py-8 w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-3 sm:px-6">
    {servicios.map((servicio) => (
      <div 
        key={servicio.id}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-100 min-h-[420px] flex flex-col" // Añadido min-h y flex
      >
        {/* Imagen con efecto */}
        <div className="h-56 overflow-hidden relative flex-shrink-0">
          <Image
            src={servicio.imagen}
            alt={servicio.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <span className="absolute top-3 right-3 bg-blue-500/90 text-white text-xs font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
            {servicio.tipo}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow"> {/* Añadido flex-grow */}
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {servicio.titulo}
          </h3>
          <p className="text-gray-600 mb-3 text-sm leading-relaxed">
            {servicio.descripcion}
          </p>
          
          <ul className="space-y-1.5 mb-4">
            {servicio.caracteristicas.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-1.5 text-sm">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          
          {/* Botón fijo en la parte inferior */}
          <div className="mt-auto">
            <button className="relative overflow-hidden group-hover:bg-blue-600 bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 w-full text-sm sm:text-base">
              <span className="relative z-10 flex items-center justify-center">
                Más información
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 group-hover:animate-ripple transition-all duration-700"></span>
            </button>
          </div>
        </div>
        
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    ))}
  </div>
</section>
  );
}