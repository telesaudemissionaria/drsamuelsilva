import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="bg-brand-cream text-black py-24 md:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}h
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">Quién soy</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
            Médico que lleva la medicina donde el sistema no llega
          </h2>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-8 font-sans font-light text-lg text-gray-800 leading-relaxed"
        >
          <p>
            Formado en el campo antes que en el aula: 13 años entre comunidades rurales bolivianas, desde brigadas de salud voluntarias hasta práctica clínica supervisada en Hospitales. Con la convicción que me llevó al campo: que la calidad de tu salud no debería depender de dónde naciste.
          </p>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-2 text-black">Qué Hago</h3>
            <p>
              Mi práctica integra medicina clínica, salud comunitaria, telemedicina en baja conectividad y ética médica frente a la inteligencia artificial. La fe no es un añadido — es el fundamento que define cómo entiendo al paciente: como persona que lleva la imagen de Dios.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-2 text-black">Mi Formación</h3>
            <p className="font-medium text-black mb-3">
              Médico por la Universidad De Aquino Bolivia (UDABOL). Certificado en ACLS, Salud Digital y Vertex AI (Google).
            </p>
            <ul className="list-none pl-0 flex flex-col gap-2 text-gray-700 text-base">
              <li className="flex items-start gap-2">
                <span className="text-black font-semibold mt-0.5">•</span>
                <span>Atención Primaria a la Salud y Telesalud — UFRN/AVASUS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-semibold mt-0.5">•</span>
                <span>Transformación Digital en Salud — ESR/RNP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-semibold mt-0.5">•</span>
                <span>Telesalud en APS — PAHO</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-semibold mt-0.5">•</span>
                <span>IA en Healthcare — Stanford</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-semibold mt-0.5">•</span>
                <span>ACLS — American Heart Association</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-semibold mt-0.5">•</span>
                <span>APS y Urgencias — UNA-SUS Brasil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-semibold mt-0.5">•</span>
                <span>Trauma Prehospitalario — IBRAPH</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
