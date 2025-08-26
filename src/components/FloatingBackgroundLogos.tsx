import { useEffect, useState } from "react";

interface FloatingLogo {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  direction: 'up' | 'down' | 'left' | 'right' | 'diagonal-up' | 'diagonal-down';
}

const FloatingBackgroundLogos = () => {
  const [logos, setLogos] = useState<FloatingLogo[]>([]);

  useEffect(() => {
    const generateLogos = () => {
      const directions: FloatingLogo['direction'][] = [
        'up', 'down', 'left', 'right', 'diagonal-up', 'diagonal-down'
      ];
      
      const newLogos: FloatingLogo[] = [];
      
      for (let i = 0; i < 100; i++) {
        newLogos.push({
          id: i,
          x: Math.random() * 100, // Random X position (%)
          y: Math.random() * 100, // Random Y position (%)
          size: Math.random() * 20 + 15, // Size between 15-35px
          duration: Math.random() * 20 + 15, // Animation duration 15-35s
          delay: Math.random() * 10, // Delay 0-10s
          direction: directions[Math.floor(Math.random() * directions.length)]
        });
      }
      
      setLogos(newLogos);
    };

    generateLogos();
  }, []);

  const getAnimationClass = (direction: FloatingLogo['direction']) => {
    switch (direction) {
      case 'up': return 'animate-float-up';
      case 'down': return 'animate-float-down';
      case 'left': return 'animate-float-left';
      case 'right': return 'animate-float-right';
      case 'diagonal-up': return 'animate-float-diagonal-up';
      case 'diagonal-down': return 'animate-float-diagonal-down';
      default: return 'animate-float-up';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className={`absolute opacity-10 ${getAnimationClass(logo.direction)}`}
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            width: `${logo.size}px`,
            height: `${logo.size}px`,
            animationDuration: `${logo.duration}s`,
            animationDelay: `${logo.delay}s`,
          }}
        >
          <img
            src="/lovable-uploads/bd8afb50-d00b-4315-a176-dc542d768f89.png"
            alt=""
            className="w-full h-full rounded-full opacity-60 blur-[0.5px]"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBackgroundLogos;