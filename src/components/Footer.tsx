import { Instagram, Linkedin, MessageSquare, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer text-gray-300 py-16">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Contact Block - Top of Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-12 border-b border-white/10">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-3xl text-white tracking-tight mb-2">¿Hablamos?</h4>
            <p className="text-gray-400 font-sans font-light text-base">Estoy a un mensaje de distancia para cualquier consulta o colaboración.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/59173346906" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-cream hover:bg-white text-black px-6 py-3 rounded-full font-sans font-medium tracking-wide text-sm transition-all hover:scale-105 duration-200"
            >
              Hablemos por WhatsApp
            </a>
            <a 
              href="mailto:drsamuelsilva.med@gmail.com" 
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white px-6 py-3 rounded-full font-sans font-medium tracking-wide text-sm transition-all hover:scale-105 duration-200"
            >
              Enviar correo
            </a>
          </div>
        </div>

        {/* Navigation & Branding and Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Navigation & Branding */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <p className="font-serif text-2xl text-white tracking-wide">Dr. Samuel Silva</p>
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-sans uppercase tracking-wider">
              <a href="#home" className="hover:text-white transition-colors">Inicio</a>
              <a href="#about" className="hover:text-white transition-colors">Quién soy</a>
              <a href="#areas" className="hover:text-white transition-colors">Enfoques</a>
              <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
            </nav>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href="https://www.instagram.com/drsamuelsilva.med" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/drsamuelsilvamed/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/59173346906" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="mailto:drsamuelsilva.med@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center text-xs font-sans text-gray-500">
              <span>&copy; {currentYear} Dr. Samuel Silva. Todos los derechos reservados.</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
