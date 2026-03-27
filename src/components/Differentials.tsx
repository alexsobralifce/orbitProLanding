"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Rocket, Zap } from "lucide-react";

export function Differentials() {
  const differentials = [
    {
      title: "Equipe Especializada",
      desc: "Profissionais experientes com sólida formação acadêmica e foco em IA.",
      icon: Users,
    },
    {
      title: "Abordagem Personalizada",
      desc: "Cada cliente é único. Desenvolvemos soluções adequadas ao seu contexto.",
      icon: ShieldCheck,
    },
    {
      title: "Resultados Ágeis",
      desc: "Compromisso com entregas rápidas e resultados mensuráveis.",
      icon: Rocket,
    },
    {
      title: "Atualização Constante",
      desc: "Acompanhamos as últimas inovações e tendências em inteligência artificial.",
      icon: Zap,
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4"
          >
            Diferenciais <span className="text-gradient">Orbit PRO</span>
          </motion.h2>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">
            Por que escolher a nossa equipe para guiar a transformação da sua empresa?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-orbit-teal/10 flex items-center justify-center mb-6 text-orbit-teal group-hover:bg-orbit-teal group-hover:text-white transition-all duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
