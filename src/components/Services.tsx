"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, LineChart, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Agentes Inteligentes e Bots",
    icon: Lightbulb,
    color: "from-orbit-magenta to-orbit-purple",
    textColor: "text-orbit-magenta",
    features: [
      "Assistentes virtuais personalizados (SAC)",
      "Bots para WhatsApp, Instagram e Telegram",
      "Manutenção contínua baseada em métricas",
    ],
  },
  {
    title: "Aplicações Web e Mobile",
    icon: Code2,
    color: "from-orbit-blue to-orbit-teal",
    textColor: "text-orbit-blue",
    features: [
      "Integração de IA em sistemas e apps",
      "Sistemas de recomendação e classificação",
      "React, Flutter, TensorFlow, e Node.js",
    ],
  },
  {
    title: "Análise de Dados e BI",
    icon: LineChart,
    color: "from-orbit-teal to-orbit-orange",
    textColor: "text-orbit-teal",
    features: [
      "Tratamento e visualização de dados",
      "Machine Learning para detecção de padrões",
      "Dashboards no Power BI, Tableau e Python",
    ],
  },
  {
    title: "Treinamento Corporativo",
    icon: GraduationCap,
    color: "from-orbit-orange to-orbit-yellow",
    textColor: "text-orbit-orange",
    features: [
      "Capacitação para uso estratégico da IA",
      "Workshops práticos sobre automação",
      "Formação técnica em Python e Machine Learning",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-orbit-teal/10 text-orbit-teal font-semibold text-sm mb-4"
          >
            Nossas Especialidades
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4"
          >
            Consultoria em Inteligência Artificial
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-inter text-lg"
          >
            A Orbit PRO oferece soluções focadas em aplicações práticas que
            impulsionam negócios e otimizam processos. Atuamos nestas 4 frentes:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${service.color}`}
              />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                 <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <service.icon className={`w-6 h-6 ${service.textColor}`} />
                 </div>
              </div>

              <h3 className="text-xl font-poppins font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full block flex-shrink-0 bg-gradient-to-br ${service.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
