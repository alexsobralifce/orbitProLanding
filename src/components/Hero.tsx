"use client";

import { motion } from "framer-motion";
import { NeuralNetwork } from "./NeuralNetwork";
import { ArrowRight, Bot } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-orbit-magenta/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] bg-orbit-teal/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[20%] w-[35vw] h-[35vw] bg-orbit-orange/20 rounded-full blur-[90px]"
        />
      </div>

      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
         <NeuralNetwork />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-row items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orbit-magenta animate-pulse" />
          <span className="text-sm font-medium text-gray-700">Portfólio 2026 Disponível</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-poppins font-bold text-foreground mb-6 leading-tight max-w-4xl tracking-tight"
        >
          Orbit Pro <br />
          <span className="text-gradient">Soluções em IA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-inter"
        >
          Transforme dados em decisões, processos em automações e ideias em
          soluções. A inteligência artificial sob medida para impulsionar seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-orbit-magenta text-white font-semibold hover:bg-orbit-purple transition-colors shadow-lg shadow-orbit-magenta/30 flex items-center justify-center gap-2 group"
          >
            Fale com um Especialista
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-50 border border-gray-200 transition-colors shadow-sm flex items-center justify-center gap-2 group"
          >
            Conheça Nossos Serviços
            <Bot className="w-5 h-5 text-orbit-teal group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Geometric Overlay for Premium Feel */}
      <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
