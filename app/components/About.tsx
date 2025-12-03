import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Sobre EFX Studio
      </motion.h2>
      <motion.p
        className="text-gray-300 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        En EFX Studio nos dedicamos a crear soluciones digitales rápidas,
        escalables y eficientes para negocios que quieren crecer y automatizar
        sus procesos.
      </motion.p>
    </section>
  );
}
