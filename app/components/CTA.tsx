import {motion} from 'framer-motion'
import {Rocket} from'lucide-react'

export default function CTA(){
    return(
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Rocket size={60} className="mx-auto mb-6 text-blue-500" />
                  <h2 className="text-4xl font-bold mb-4">Listo para impulsar tu proyecto</h2>
                  <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
                    Contactame y armemos algo poderoso para tu negocio.
                  </p>
                  <a
                    className="rounded-xl cursor-pointer text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                    href='mailto:efx.studio.oficial@gmail.com'
                  >
                    Empezar ahora
                  </a>
                </motion.div>
              </section>
    )
}