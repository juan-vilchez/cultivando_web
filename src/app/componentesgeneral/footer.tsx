// src/app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© {new Date().getFullYear()} Cultivando. Todos los derechos reservados.</p>
      </footer>
    );
  }