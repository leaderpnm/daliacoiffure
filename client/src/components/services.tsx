import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { User, Users, Palette, Wind, Brush } from "lucide-react";

interface Service {
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
}

const menServices: Service[] = [
  {
    title: "Coupe et Soin Homme",
    description: "Shampooing • Soin Intensif • Coupe tondeuse • Coiffage",
    originalPrice: "26,00 €",
    discountedPrice: "18,20 €"
  },
  {
    title: "Forfait Couleur Homme",
    description: "Coloration • Shampooing • Coiffage",
    originalPrice: "35,00 €",
    discountedPrice: "24,50 €"
  },
  {
    title: "Coupe, Taille de Barbe et Soin",
    description: "Shampooing • Coupe tondeuse • Coiffage • Taille de Barbe",
    originalPrice: "36,00 €",
    discountedPrice: "25,20 €"
  },
  {
    title: "Forfait Couleur et Coupe",
    description: "Coloration • Shampooing • Coupe tondeuse • Coiffage",
    originalPrice: "54,00 €",
    discountedPrice: "37,80 €"
  }
];

const womenServices: Service[] = [
  {
    title: "Forfait Coupe et Soin",
    description: "Shampooing • Soin • Coupe • Séchage Naturel",
    originalPrice: "32,00 €",
    discountedPrice: "22,40 €"
  },
  {
    title: "Couleur (racines) et Soin",
    description: "Coloration • Shampooing • Soin • Brushing",
    originalPrice: "55,00 €",
    discountedPrice: "38,50 €"
  },
  {
    title: "Couleur (tête entière) et Soin",
    description: "Coloration • Shampooing • Soin • Brushing",
    originalPrice: "55,00 €",
    discountedPrice: "38,50 €"
  },
  {
    title: "Couleur, Coupe et Soin",
    description: "Coloration • Shampooing • Soin • Coupe • Brushing",
    originalPrice: "63,00 €",
    discountedPrice: "44,10 €"
  }
];

const specializedServices = [
  {
    category: "Ombré Hair / Tye & Die",
    icon: <Palette className="w-6 h-6" />,
    services: [
      {
        title: "Ombré Hair, Patine et Soin",
        description: "Ombré Hair • Patine • Shampooing • Soin • Brushing",
        originalPrice: "132,00 €",
        discountedPrice: "92,40 €"
      },
      {
        title: "Ombré Hair, Coupe, Patine et Soin",
        description: "Ombré Hair • Patine • Coupe • Shampooing • Soin • Brushing",
        originalPrice: "142,00 €",
        discountedPrice: "99,40 €"
      }
    ]
  },
  {
    category: "Lissage / Défrisage",
    icon: <Wind className="w-6 h-6" />,
    services: [
      {
        title: "Forfait Lissage",
        description: "Lissage • Brushing",
        originalPrice: "160,00 €",
        discountedPrice: "112,00 €"
      },
      {
        title: "Lissage et Coupe",
        description: "Lissage • Coupe • Brushing",
        originalPrice: "168,00 €",
        discountedPrice: "117,60 €"
      }
    ]
  },
  {
    category: "Balayage / Mèches",
    icon: <Brush className="w-6 h-6" />,
    services: [
      {
        title: "Balayage, Patine et Soin",
        description: "Balayage • Patine • Shampooing • Soin • Brushing",
        originalPrice: "85,00 €",
        discountedPrice: "59,50 €"
      },
      {
        title: "Mèches, Patine et Soin",
        description: "Mèches • Patine • Shampooing • Soin • Brushing",
        originalPrice: "85,00 €",
        discountedPrice: "59,50 €"
      }
    ]
  }
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <CardContent className="p-6">
        <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        <div className="mb-4">
          <Badge variant="destructive" className="bg-red-100 text-red-600 text-xs font-medium">
            Jusqu'à -30%
          </Badge>
        </div>
        <div className="flex items-center mb-4">
          <span className="price-crossed text-gray-400 text-lg mr-3">{service.originalPrice}</span>
          <span className="text-2xl font-bold text-rose-poudre-dark">{service.discountedPrice}</span>
        </div>
        <Button className="w-full bg-rose-poudre hover:bg-rose-poudre-dark text-gray-900 py-2 px-4 rounded-full font-medium transition-colors duration-200">
          Réserver
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <section id="prestations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Forfaits & Soins
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos prestations haut de gamme avec des promotions exceptionnelles jusqu'à -30%
          </p>
        </motion.div>

        {/* Men's Services */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <User className="text-rose-poudre-dark" />
            Prestations Homme
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </motion.div>

        {/* Women's Services */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <Users className="text-rose-poudre-dark" />
            Prestations Femme
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {womenServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </motion.div>

        {/* Specialized Techniques */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {specializedServices.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                <span className="text-rose-poudre-dark">{category.icon}</span>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-5">
                      <h4 className="font-medium text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="price-crossed text-gray-400 mr-2">{service.originalPrice}</span>
                          <span className="text-lg font-bold text-rose-poudre-dark">{service.discountedPrice}</span>
                        </div>
                        <Button 
                          size="sm"
                          className="bg-rose-poudre hover:bg-rose-poudre-dark text-gray-900 px-4 py-1 rounded-full text-sm font-medium"
                        >
                          Réserver
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
