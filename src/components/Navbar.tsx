"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#diferenciais" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-poppins font-bold text-xl tracking-tight text-foreground">
            Orbit<span className="text-orbit-magenta">Pro</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-orbit-magenta transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-full bg-orbit-magenta text-white text-sm font-semibold hover:bg-orbit-purple transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-800 py-2 border-b border-gray-50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-5 py-3 text-center rounded-lg bg-orbit-magenta text-white font-semibold hover:bg-orbit-purple transition-all"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
