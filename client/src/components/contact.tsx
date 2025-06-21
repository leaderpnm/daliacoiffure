import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prendre Rendez-vous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Réservez votre créneau en ligne ou contactez-nous directement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6">Informations pratiques</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-poudre rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Adresse</h4>
                      <p className="text-gray-600">252 Rue des Pyrénées<br />75020 Paris</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-poudre rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Téléphone</h4>
                      <a 
                        href="tel:+33983511824" 
                        className="text-rose-poudre-dark hover:text-rose-poudre-dark font-medium transition-colors duration-200"
                      >
                        09 83 51 18 24
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-poudre rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Horaires d'ouverture</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Lundi à Vendredi : 10:00–20:00</p>
                        <p>Samedi : 10:00–19:00</p>
                        <p>Dimanche : 11:00–19:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button className="bg-rose-poudre hover:bg-rose-poudre-dark text-gray-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver en Ligne
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Ou appelez-nous directement pour plus d'informations
              </p>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-medium">Carte Google Maps</p>
                    <p className="text-sm">252 Rue des Pyrénées, 75020 Paris</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
