import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Dalia <span className="text-rose-poudre">Coiffure</span>
            </h3>
            <p className="text-gray-400">
              Votre salon de coiffure élégant et moderne à Paris 20ème
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-gray-400 hover:text-rose-poudre transition-colors duration-200 text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('prestations')}
                  className="text-gray-400 hover:text-rose-poudre transition-colors duration-200 text-left"
                >
                  Prestations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galerie')}
                  className="text-gray-400 hover:text-rose-poudre transition-colors duration-200 text-left"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('avis')}
                  className="text-gray-400 hover:text-rose-poudre transition-colors duration-200 text-left"
                >
                  Avis
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>252 Rue des Pyrénées</li>
              <li>75020 Paris</li>
              <li>
                <a 
                  href="tel:+33983511824" 
                  className="hover:text-rose-poudre transition-colors duration-200"
                >
                  09 83 51 18 24
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-rose-poudre transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-rose-poudre transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-rose-poudre transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dalia Coiffure. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
