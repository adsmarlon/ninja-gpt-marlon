
import React from 'react';
import { Lightbulb, HelpCircle, PenTool } from 'lucide-react';
import MagicalCard from '../components/MagicalCard';
import FloatingBackground from '../components/FloatingBackground';

const Index = () => {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  const agents = [
    {
      title: "Gerador de Ideias de Produto Low Ticket",
      description: "Desperte sua criatividade e descubra produtos digitais inovadores de baixo custo que podem transformar seu negócio.",
      icon: Lightbulb,
      url: "#", // Você pode substituir pelos links reais dos agentes ChatGPT
      delay: 0
    },
    {
      title: "Gerador de Quiz", 
      description: "Crie quizzes envolventes e interativos que capturam a atenção do seu público e geram leads qualificados.",
      icon: HelpCircle,
      url: "#", // Você pode substituir pelos links reais dos agentes ChatGPT
      delay: 200
    },
    {
      title: "Gerador de Copies para Anúncios",
      description: "Elabore textos persuasivos e impactantes que convertem visitantes em clientes e maximizam seus resultados.",
      icon: PenTool,
      url: "#", // Você pode substituir pelos links reais dos agentes ChatGPT
      delay: 400
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingBackground />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-mystic-gold via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
            Agentes Mágicos
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Desperte o poder da inteligência artificial e transforme suas ideias em realidade com nossos agentes especializados
          </p>
          
          {/* Mystical divider */}
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-mystic-gold to-transparent w-64"></div>
            <div className="mx-4 w-2 h-2 bg-mystic-gold rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-mystic-gold to-transparent w-64"></div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {agents.map((agent, index) => (
            <MagicalCard
              key={index}
              title={agent.title}
              description={agent.description}
              icon={agent.icon}
              onClick={() => handleCardClick(agent.url)}
              delay={agent.delay}
            />
          ))}
        </div>

        {/* Footer magic */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-gray-400 text-sm">
            ✨ Escolha seu agente e embarque em uma jornada mágica de criação ✨
          </p>
        </div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mystic-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mystic-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mystic-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Index;
