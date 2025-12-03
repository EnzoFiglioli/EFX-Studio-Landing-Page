import {motion} from 'framer-motion'
import { Code, Workflow, Rocket } from 'lucide-react';

export default function Process() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-14">Cómo trabajamos</h2>
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-800"
        >
          <Code className="mx-auto mb-4" size={42} />
          <h3 className="text-2xl font-semibold mb-2 text-white">Idea</h3>
          <p className="text-gray-400">
            Entendemos tu proyecto y definimos objetivos claros.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-800"
        >
          <Workflow className="mx-auto mb-4" size={42} />
          <h3 className="text-2xl font-semibold mb-2 text-white">Desarrollo</h3>
          <p className="text-gray-400">
            Creamos aplicaciones web y móviles escalables y rápidas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-800"
        >
          <Rocket className="mx-auto mb-4" size={42} />
          <h3 className="text-2xl font-semibold mb-2 text-white">Entrega</h3>
          <p className="text-gray-400">
            Entregamos soluciones listas para usar y optimizadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
