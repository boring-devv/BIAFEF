import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => setIsLoaded(true), 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Responsive helper function
  const getResponsiveSize = (mobile, tablet, desktop) => {
    if (typeof window === 'undefined') return desktop;
    if (window.innerWidth <= 480) return mobile;
    if (window.innerWidth <= 768) return tablet || mobile;
    return desktop;
  };

  const HeroButton = ({ href, onClick, children, secondary = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <a
        href={href}
        onClick={onClick}
        style={{
          display: 'inline-block',
          padding: `${getResponsiveSize('12px', '14px', '16px')} ${getResponsiveSize('24px', '28px', '32px')}`,
          margin: getResponsiveSize('6px', '8px', '12px'),
          background: secondary 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: getResponsiveSize('25px', '35px', '50px'),
          fontSize: getResponsiveSize('13px', '14px', '16px'),
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: getResponsiveSize('0.3px', '0.4px', '0.5px'),
          fontFamily: '"Raleway", sans-serif',
          border: secondary ? '2px solid rgba(255, 255, 255, 0.3)' : 'none',
          boxShadow: secondary 
            ? 'none' 
            : '0 8px 25px rgba(37, 99, 235, 0.3)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
          backdropFilter: secondary ? 'blur(10px)' : 'none',
          minWidth: getResponsiveSize('140px', '160px', 'auto')
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    );
  };

  const FloatingElement = ({ delay = 0, size = 20, top = '20%', left = '10%' }) => (
    <div style={{
      position: 'absolute',
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderRadius: '50%',
      animation: `float 6s ease-in-out infinite ${delay}s`,
      backdropFilter: 'blur(10px)'
    }} />
  );

  return (
    <header 
      id="header" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Blurred Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('./img/intro-bg.jpg')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(3px)',
        transform: 'scale(1.1)',
        zIndex: 0
      }} />
      
      {/* Blue Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(29, 78, 216, 0.3) 50%, rgba(59, 130, 246, 0.25) 100%)`,
        zIndex: 1
      }} />
      {/* Animated Background Elements */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <FloatingElement delay={0} size={30} top="15%" left="10%" />
        <FloatingElement delay={2} size={20} top="25%" left="85%" />
        <FloatingElement delay={4} size={25} top="60%" left="5%" />
        <FloatingElement delay={1} size={15} top="70%" left="90%" />
        <FloatingElement delay={3} size={35} top="40%" left="95%" />
      </div>

      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Main Content */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1200px',
        padding: `0 ${getResponsiveSize('10px', '20px', '40px')}`,
        width: '100%',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          color: '#fff',
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {/* Logo/Icon */}
          <div style={{
            width: getResponsiveSize('60px', '80px', '120px'),
            height: getResponsiveSize('60px', '80px', '120px'),
            margin: `0 auto ${getResponsiveSize('20px', '25px', '30px')} auto`,
            background: 'linear-gradient(135deg, #ffffff20 0%, #ffffff10 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: getResponsiveSize('24px', '32px', '48px'),
            fontWeight: 800,
            fontFamily: '"Raleway", sans-serif',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animation: 'pulse 3s ease-in-out infinite'
          }}>
            B
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: getResponsiveSize('28px', '36px', '64px'),
            fontWeight: 800,
            marginBottom: getResponsiveSize('15px', '18px', '20px'),
            color: '#ffffff',
            fontFamily: '"Raleway", sans-serif',
            lineHeight: getResponsiveSize(1.1, 1.15, 1.2),
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            animation: 'slideInUp 1s ease-out 0.3s both',
            padding: `0 ${getResponsiveSize('5px', '10px', '0')}`
          }}>
            {props.data ? props.data.title : "BIAFEF"}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: getResponsiveSize('14px', '16px', '22px'),
            fontWeight: 400,
            marginBottom: getResponsiveSize('30px', '35px', '40px'),
            maxWidth: getResponsiveSize('95%', '85%', '700px'),
            margin: `0 auto ${getResponsiveSize('30px', '35px', '40px')} auto`,
            lineHeight: getResponsiveSize(1.5, 1.55, 1.6),
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: '"Open Sans", sans-serif',
            animation: 'slideInUp 1s ease-out 0.6s both',
            padding: `0 ${getResponsiveSize('10px', '15px', '0')}`
          }}>
            {props.data ? props.data.paragraph : "A global fellowship of professionals in accounting, finance, and entrepreneurship. Register today to connect, learn, and grow!"}
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: getResponsiveSize('column', 'row', 'row'),
            justifyContent: 'center',
            alignItems: 'center',
            gap: getResponsiveSize('8px', '15px', '20px'),
            marginBottom: getResponsiveSize('40px', '50px', '60px'),
            animation: 'slideInUp 1s ease-out 0.9s both',
            flexWrap: 'wrap'
          }}>
            <HeroButton href="/register" onClick={props.onRegisterClick}>
              Join BIAFEF Today
            </HeroButton>
            <HeroButton href="#about" secondary={true}>
              Learn More
            </HeroButton>
          </div>

          {/* Stats Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: getResponsiveSize('15px', '40px', '60px'),
            flexWrap: 'wrap',
            marginBottom: getResponsiveSize('20px', '30px', '40px'),
            animation: 'slideInUp 1s ease-out 1.2s both'
          }}>
            {[
              { number: '500+', label: 'Members' },
              { number: '8', label: 'Services' },
              { number: '50+', label: 'Countries' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: getResponsiveSize('12px 8px', '16px 12px', '20px'),
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: getResponsiveSize('12px', '14px', '16px'),
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                minWidth: getResponsiveSize('70px', '85px', '100px'),
                flex: getResponsiveSize('1 1 auto', 'none', 'none')
              }}>
                <div style={{
                  fontSize: getResponsiveSize('18px', '22px', '28px'),
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: '"Raleway", sans-serif',
                  marginBottom: getResponsiveSize('3px', '4px', '5px')
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: getResponsiveSize('10px', '12px', '14px'),
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: '"Open Sans", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: getResponsiveSize('0.3px', '0.4px', '0.5px')
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>

      {/* Enhanced Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        

        
        /* Enhanced Responsive Breakpoints */
        @media (max-width: 1200px) {
          #header {
            padding: 30px 0;
          }
        }
        
        @media (max-width: 992px) {
          #header {
            padding: 25px 0;
          }
        }
        
        @media (max-width: 768px) {
          #header {
            min-height: 100vh;
            padding: 20px 0;
          }
        }
        
        @media (max-width: 576px) {
          #header {
            min-height: 100vh;
            padding: 15px 0;
          }
        }
        
        @media (max-width: 480px) {
          #header {
            min-height: 100vh;
            padding: 10px 0;
          }
        }
        
        @media (max-width: 360px) {
          #header {
            min-height: 100vh;
            padding: 8px 0;
          }
        }
        
        /* Landscape orientation on mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          #header {
            min-height: 100vh;
            padding: 5px 0;
          }
        }
        
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
};

