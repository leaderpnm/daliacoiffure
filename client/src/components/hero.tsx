import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Salon Dalia Coiffure - Intérieur élégant" 
          className="w-full h-full object-cover filter grayscale opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Dalia Coiffure
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-rose-poudre-dark mb-4">
            votre salon chic à Paris 20ème
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Élégance, expertise et tarifs transparents
          </p>
          <Button 
            onClick={() => scrollToSection('prestations')}
            className="bg-rose-poudre hover:bg-rose-poudre-dark text-gray-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Voir nos Prestations
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
