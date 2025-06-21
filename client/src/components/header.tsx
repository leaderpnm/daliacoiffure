import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900">
            Dalia <span className="text-rose-poudre-dark">Coiffure</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('prestations')}
            className="text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200"
          >
            Prestations
          </button>
          <button 
            onClick={() => scrollToSection('galerie')}
            className="text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200"
          >
            Galerie
          </button>
          <button 
            onClick={() => scrollToSection('avis')}
            className="text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200"
          >
            Avis
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-rose-poudre hover:bg-rose-poudre-dark text-gray-900 px-6 py-2 rounded-full font-medium transition-colors duration-200"
          >
            Prendre Rendez-vous
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="block w-full text-left text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200 py-2"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('prestations')}
              className="block w-full text-left text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200 py-2"
            >
              Prestations
            </button>
            <button 
              onClick={() => scrollToSection('galerie')}
              className="block w-full text-left text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200 py-2"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('avis')}
              className="block w-full text-left text-gray-700 hover:text-rose-poudre-dark transition-colors duration-200 py-2"
            >
              Avis
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-rose-poudre hover:bg-rose-poudre-dark text-gray-900 px-6 py-3 rounded-full font-medium text-center transition-colors duration-200"
            >
              Prendre Rendez-vous
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
