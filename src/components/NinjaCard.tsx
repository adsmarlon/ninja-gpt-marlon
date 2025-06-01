
import React, { useState } from 'react';

interface NinjaCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
  delay?: number;
}

const NinjaCard: React.FC<NinjaCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  onClick,
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`ninja-card relative p-0 rounded-xl cursor-pointer transform transition-all duration-500 group`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image container */}
      <div className="relative h-64 rounded-t-xl overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Ninja emoji overlay */}
        <div className="absolute top-4 right-4 text-2xl opacity-80">
          🥷
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-3 text-white shadow-text">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Action indicator */}
        <div className={`flex items-center text-xs text-gray-400 transition-all duration-300 ${
          isHovered ? 'text-white transform translate-x-2' : ''
        }`}>
          <span>Acessar agente</span>
          <span className="ml-2">→</span>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03), transparent)',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
      }} />
    </div>
  );
};

export default NinjaCard;
