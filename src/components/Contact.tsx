"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, Phone, Mail, Globe } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Integração com WhatsApp
    const message = `Olá, vim pelo site! Meu nome é ${data.name}. 
Email: ${data.email}
Telefone: ${data.phone}
Mensagem: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/5588993573809?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    reset();
  };

  return (
    <section id="contato" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-orbit-magenta/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-orbit-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-6 leading-tight">
                Vamos <span className="text-gradient">Conversar?</span>
              </h2>
              <p className="text-gray-600 font-inter text-lg">
                Se sua empresa busca inovar com inteligência, conte com a Orbit PRO
                para transformar dados em decisões, processos em automações e ideias
                em soluções.
              </p>
            </div>

            <div className="space-y-6 mt-4">
              <a href="https://www.orbitpro.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orbit-blue group-hover:bg-orbit-blue group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-poppins font-medium text-gray-700 group-hover:text-orbit-blue transition-colors">www.orbitpro.com.br</span>
              </a>
              <a href="https://wa.me/5588993573809" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orbit-teal group-hover:bg-orbit-teal group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-poppins font-medium text-gray-700 group-hover:text-orbit-teal transition-colors">(88) 99357-3809</span>
              </a>
              <a href="mailto:orbitprosobral@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orbit-magenta group-hover:bg-orbit-magenta group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-poppins font-medium text-gray-700 group-hover:text-orbit-magenta transition-colors">orbitprosobral@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100/50"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nome Completo</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-orbit-teal focus:ring-2 focus:ring-orbit-teal/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">E-mail</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-orbit-teal focus:ring-2 focus:ring-orbit-teal/20 outline-none transition-all"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Telefone</label>
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-orbit-teal focus:ring-2 focus:ring-orbit-teal/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Como podemos ajudar?</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-orbit-teal focus:ring-2 focus:ring-orbit-teal/20 outline-none transition-all resize-none"
                  placeholder="Conte um pouco sobre o seu projeto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-xl bg-orbit-magenta text-white font-semibold hover:bg-orbit-purple transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
