"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/public/hero.png";

export function Hero() {
  return (
    <section id="inicio" className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Transforma tus procesos con soluciones digitales a medida.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
          En EFX Studio te ayudamos a crear aplicaciones rápidas, escalables y
          eficientes.
        </p>

        <a href="mailto:efx.studio.oficial@gmail.com" className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
          Hablemos de tu proyecto
        </a>
      </motion.div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10"
      >
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
          {/* Fondo radial */}
          <div className="absolute inset-0 -z-10 bg-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_80%)]" />
          </div>

          {/* Imagen */}
          <Image
            src={heroImg}
            alt="Hero"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
