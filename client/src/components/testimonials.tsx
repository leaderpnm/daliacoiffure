import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "Service exceptionnel ! Dalia a su comprendre exactement ce que je voulais. Le résultat dépasse mes attentes et les tarifs sont très raisonnables.",
    author: "Marie L.",
    subtitle: "Cliente depuis 2 ans"
  },
  {
    content: "Accueil chaleureux, conseils personnalisés et un balayage magnifique ! Je recommande vivement ce salon à toutes mes amies.",
    author: "Sophie M.",
    subtitle: "Cliente régulière"
  },
  {
    content: "Enfin un salon qui respecte les horaires ! Dalia est très professionnelle et la qualité des prestations est irréprochable.",
    author: "Thomas B.",
    subtitle: "Client depuis 1 an"
  }
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ce qu'ils disent de nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les témoignages de nos clients satisfaits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
