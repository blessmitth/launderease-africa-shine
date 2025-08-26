import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const FloatingLogo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldShow = scrollTop > 200;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(shouldShow);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent, to: string) => {
    if (location.pathname === to) {
      e.preventDefault();
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-4 right-4 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
    >
      <Link 
        to="/"
        onClick={(e) => handleLogoClick(e, "/")}
        className="block group"
      >
        <div className={`relative transition-all duration-1000 ${
          isTransitioning 
            ? 'scale-[2] rotate-[720deg] opacity-90 animate-pulse' 
            : 'scale-100 rotate-0 hover:scale-110 hover:rotate-12'
        }`}>
          <img 
            src="/lovable-uploads/bd8afb50-d00b-4315-a176-dc542d768f89.png" 
            alt="LaunderEase Logo" 
            className="h-16 w-16 rounded-full border-3 border-white shadow-2xl animate-logo-float group-hover:animate-logo-bounce"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse opacity-60"></div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 animate-spin-slow opacity-30"></div>
        </div>
      </Link>
    </div>
  );
};

export default FloatingLogo;