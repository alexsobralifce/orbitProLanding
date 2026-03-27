export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-poppins font-bold text-xl text-white">
                OrbitPro
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
              Transformando dados em decisões, processos em automações e ideias
              em soluções através da Inteligência Artificial.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://www.orbitpro.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orbit-teal transition-colors flex items-center gap-2"
                >
                  www.orbitpro.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5588993573809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orbit-teal transition-colors flex items-center gap-2"
                >
                  (88) 99357-3809
                </a>
              </li>
              <li>
                <a
                  href="mailto:orbitprosobral@gmail.com"
                  className="hover:text-orbit-teal transition-colors flex items-center gap-2"
                >
                  orbitprosobral@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#sobre" className="hover:text-orbit-magenta transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-orbit-magenta transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-orbit-magenta transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-orbit-magenta transition-colors">
                  Falar com um consultor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Orbit Pro Soluções em IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
