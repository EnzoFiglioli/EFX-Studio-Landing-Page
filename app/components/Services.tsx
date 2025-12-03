import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Workflow, Code, Smartphone } from 'lucide-react';

export default function Services(){
    return(
        <section id="servicios" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardContent className="p-8 text-center">
                <Workflow className="mx-auto mb-4" size={42} />
                <h3 className="text-2xl font-semibold mb-3 text-white">Automatización</h3>
                <p className="text-gray-400 text-base">
                  Bots, integraciones y sistemas que trabajan por vos. Reducí
                  tiempo y errores.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardContent className="p-8 text-center">
                <Code className="mx-auto mb-4" size={42} />
                <h3 className="text-2xl font-semibold mb-3 text-white">Web Apps</h3>
                <p className="text-gray-400 text-base">
                  Desarrollo de aplicaciones web modernas con React, Next.js y
                  APIs escalables.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardContent className="p-8 text-center">
                <Smartphone className="mx-auto mb-4" size={42} />
                <h3 className="text-2xl font-semibold mb-3 text-white">Mobile Apps</h3>
                <p className="text-gray-400 text-base">
                  Aplicaciones móviles rápidas y optimizadas con React Native.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
}