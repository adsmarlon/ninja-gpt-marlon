
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface MagicalCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  delay?: number;
}

const MagicalCard: React.FC<MagicalCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick,
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`mystical-card relative p-8 rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 animate-float group shadow-2xl ${
        isHovered ? 'animate-glow' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Icon with glow effect */}
      <div className="flex justify-center mb-6">
        <div className={`p-4 rounded-full bg-gradient-to-br from-mystic-gold to-yellow-500 transition-all duration-300 ${
          isHovered ? 'animate-pulse-glow scale-110' : ''
        }`}>
          <Icon size={48} className="text-mystic-dark" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-mystic-gold to-yellow-300 bg-clip-text text-transparent">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-center leading-relaxed">
        {description}
      </p>

      {/* Magical border glow on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(139, 92, 246, 0.1))',
        filter: 'blur(8px)',
        zIndex: -1
      }} />
    </div>
  );
};

export default MagicalCard;
