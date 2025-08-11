import React, { useState, useEffect } from "react";

export const Services = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className="col-xs-12 col-sm-6 col-md-4"
        style={{ 
          marginBottom: isMobile ? '30px' : '40px',
          padding: isMobile ? '0 10px' : '0 15px'
        }}
      >
        <div
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: isMobile ? '16px' : '20px',
            padding: isMobile ? '30px 20px' : '40px 25px',
            boxShadow: isHovered 
              ? '0 20px 40px rgba(99,114,255,0.15), 0 0 0 1px rgba(99,114,255,0.1)' 
              : '0 8px 25px rgba(99,114,255,0.08)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '80px',
            height: '80px',
            background: `linear-gradient(135deg, ${getServiceColor(index)}15 0%, ${getServiceColor(index)}05 100%)`,
            borderRadius: '0 20px 0 80px',
            opacity: 0.5
          }} />
          
          {/* Icon Container */}
          <div style={{
            width: isMobile ? '70px' : '80px',
            height: isMobile ? '70px' : '80px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${getServiceColor(index)} 0%, ${getServiceColor(index)}dd 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: isMobile ? '20px' : '25px',
            boxShadow: `0 8px 20px ${getServiceColor(index)}30`,
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}>
            <i 
              className={service.icon} 
              style={{
                fontSize: isMobile ? '28px' : '32px',
                color: '#fff',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
          
          {/* Content */}
          <h3 style={{
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: 700,
            color: '#1a202c',
            marginBottom: isMobile ? '12px' : '15px',
            lineHeight: 1.3,
            fontFamily: '"Raleway", sans-serif'
          }}>
            {service.name}
          </h3>
          
          <p style={{
            fontSize: isMobile ? '13px' : '14px',
            lineHeight: 1.6,
            color: '#6b7280',
            margin: 0,
            fontFamily: '"Open Sans", sans-serif'
          }}>
            {service.text}
          </p>
          
          {/* Hover Effect Line */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${getServiceColor(index)} 0%, ${getServiceColor(index)}88 100%)`,
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.3s ease',
            transformOrigin: 'left'
          }} />
        </div>
      </div>
    );
  };

  const getServiceColor = (index) => {
    const colors = [
      '#2563eb', // Blue
      '#059669', // Green
      '#dc2626', // Red
      '#7c3aed', // Purple
      '#ea580c', // Orange
      '#be185d', // Pink
      '#0891b2', // Cyan
      '#4338ca'  // Indigo
    ];
    return colors[index % colors.length];
  };

  return (
    <div id="services" style={{ 
      background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
      padding: isMobile ? '60px 0' : '100px 0'
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: isMobile ? '50px' : '70px' }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : '42px',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: isMobile ? '15px' : '20px',
            fontFamily: '"Raleway", sans-serif',
            textAlign: 'center'
          }}>
            Our Services & Benefits
          </h2>
          <div style={{
            width: isMobile ? '60px' : '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
            margin: '0 auto 25px',
            borderRadius: '2px'
          }} />
          <p style={{
            fontSize: isMobile ? '14px' : '18px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontFamily: '"Open Sans", sans-serif'
          }}>
            Comprehensive support and opportunities for professional growth and development
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="row" style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {props.data
            ? props.data.map((service, index) => (
                <ServiceCard 
                  key={`${service.name}-${index}`} 
                  service={service} 
                  index={index}
                />
              ))
            : "loading"}
        </div>
      </div>
      
      {/* Enhanced Styles */}
      <style>{`
        @media (max-width: 768px) {
          #services .col-xs-12 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
        
        @media (min-width: 769px) and (max-width: 991px) {
          #services .col-sm-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        
        @media (min-width: 992px) {
          #services .col-md-4 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
        }
        
        @keyframes serviceCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        #services .row {
          margin-left: -15px;
          margin-right: -15px;
        }
      `}</style>
    </div>
  );
};
