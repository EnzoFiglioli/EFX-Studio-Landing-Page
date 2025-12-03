import Image from "next/image";
import logo from "@/public/logo.png"; 

export default function Header() {

  const navItems = [
    { name: "Servicios", href: "#servicios" },
    // { name: "Proceso", href: "#proceso" },
    // { name: "Sobre Nosotros", href: "#sobre-nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        {/* Logo (Puede ser un link a la sección Hero/Inicio) */}
        <a href="#inicio" className="flex items-center gap-3 cursor-pointer">
          {/* El tamaño puede ajustarse al diseño final */}
          <Image src={logo} width={40} height={40} alt="EFX Studio Logo" /> 
          <span className="text-xl font-extrabold text-white hidden sm:block">
            EFX Studio
          </span>
        </a>

        {/* Navegación y CTA */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-4 text-sm md:text-base text-gray-300 font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-white transition cursor-pointer">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          
          {/* CTA Destacado - Se convierte en un botón */}
          <a
            href="mailto:efx.studio.oficial@gmail.com"
            className="px-4 py-2 text-sm md:text-base font-semibold text-black bg-blue-500 rounded-md 
                       hover:bg-blue-400 transition duration-200 shadow-lg"
          >
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
}