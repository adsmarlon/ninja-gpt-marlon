
import React from 'react';
import NinjaCard from '../components/NinjaCard';

const Index = () => {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  const agents = [
    {
      title: "Gerador de Ideias Low Ticket 🥷",
      description: "Desperte sua criatividade ninja e descubra produtos digitais inovadores de baixo custo que podem transformar seu negócio de forma silenciosa e eficaz.",
      imageUrl: "/placeholder.svg?height=256&width=400&text=Ninja+Ideas", // Substitua pela primeira imagem
      url: "#",
      delay: 0
    },
    {
      title: "Gerador de Quiz 🥷", 
      description: "Crie quizzes envolventes com a precisão de um ninja, captando a atenção do seu público e gerando leads qualificados com estratégias furtivas.",
      imageUrl: "/placeholder.svg?height=256&width=400&text=Ninja+Quiz", // Substitua pela segunda imagem
      url: "#",
      delay: 200
    },
    {
      title: "Gerador de Copies 🥷",
      description: "Elabore textos persuasivos com a letalidade de um ninja, criando copies que convertem visitantes em clientes e maximizam seus resultados.",
      imageUrl: "/placeholder.svg?height=256&width=400&text=Ninja+Copy", // Substitua pela terceira imagem
      url: "#",
      delay: 400
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 text-white glow-text">
            Agentes Ninja 🥷
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed shadow-text">
            Desperte o poder silencioso da inteligência artificial e transforme suas ideias em realidade com nossos agentes ninja especializados
          </p>
          
          {/* Divider */}
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent w-64"></div>
            <div className="mx-4 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent w-64"></div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {agents.map((agent, index) => (
            <NinjaCard
              key={index}
              title={agent.title}
              description={agent.description}
              imageUrl={agent.imageUrl}
              onClick={() => handleCardClick(agent.url)}
              delay={agent.delay}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-gray-500 text-sm shadow-text">
            🥷 Escolha seu agente ninja e embarque em uma jornada silenciosa de criação 🥷
          </p>
        </div>
      </div>

      {/* Ambient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default Index;
