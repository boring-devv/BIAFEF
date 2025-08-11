import React, { useState, useEffect } from 'react';

export const Footer = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const FooterSection = ({ title, children }) => (
    <div className={isMobile ? "col-xs-12" : "col-md-3"} style={{ 
      marginBottom: isMobile ? '30px' : '0',
      textAlign: isMobile ? 'center' : 'left'
    }}>
      <h4 style={{
        fontSize: isMobile ? '16px' : '18px',
        fontWeight: 700,
        color: '#fff',
        marginBottom: isMobile ? '15px' : '20px',
        fontFamily: '"Raleway", sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {title}
      </h4>
      {children}
    </div>
  );

  const FooterLink = ({ href, children, external = false }) => (
    <a 
      href={href} 
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      style={{
        color: 'rgba(255, 255, 255, 0.8)',
        textDecoration: 'none',
        fontSize: isMobile ? '13px' : '14px',
        lineHeight: '1.8',
        fontFamily: '"Open Sans", sans-serif',
        transition: 'all 0.3s ease',
        display: 'block',
        marginBottom: '8px'
      }}
      onMouseOver={(e) => {
        e.target.style.color = '#fff';
        e.target.style.paddingLeft = '5px';
      }}
      onMouseOut={(e) => {
        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
        e.target.style.paddingLeft = '0px';
      }}
    >
      {children}
    </a>
  );

  const SocialIcon = ({ icon, href, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isMobile ? '40px' : '45px',
          height: isMobile ? '40px' : '45px',
          borderRadius: '50%',
          background: isHovered ? color : 'rgba(255, 255, 255, 0.1)',
          margin: isMobile ? '0 8px 10px 8px' : '0 10px 10px 0',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-3px) scale(1.1)' : 'translateY(0) scale(1)',
          boxShadow: isHovered ? `0 8px 25px ${color}40` : '0 2px 10px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i 
          className={icon} 
          style={{
            fontSize: isMobile ? '18px' : '20px',
            color: '#fff',
            transition: 'all 0.3s ease'
          }}
        />
      </a>
    );
  };

  return (
    <div id="footer" style={{
      background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e293b 100%)',
      padding: isMobile ? '50px 0 30px 0' : '80px 0 40px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(99, 114, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      <div className="container" style={{ 
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px'
      }}>
        {/* Main Footer Content */}
        <div className="row" style={{ marginBottom: isMobile ? '30px' : '50px' }}>
          {/* About Section */}
          <FooterSection title="About BIAFEF">
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: isMobile ? '13px' : '14px',
              lineHeight: '1.7',
              marginBottom: '20px',
              fontFamily: '"Open Sans", sans-serif'
            }}>
              A vibrant community of accountants, finance experts, and entrepreneurs dedicated to professional growth and networking.
            </p>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <SocialIcon 
                icon="fa fa-facebook" 
                href={props.data?.facebook || "#"} 
                color="#1877f2"
              />
              <SocialIcon 
                icon="fa fa-twitter" 
                href={props.data?.twitter || "#"} 
                color="#1da1f2"
              />
              <SocialIcon 
                icon="fa fa-youtube" 
                href={props.data?.youtube || "#"} 
                color="#ff0000"
              />
              <SocialIcon 
                icon="fa fa-linkedin" 
                href="#" 
                color="#0077b5"
              />
            </div>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#team">Our Team</FooterLink>
            <FooterLink href="#testimonials">Testimonials</FooterLink>
            <FooterLink href="#contact">Contact Us</FooterLink>
            <FooterLink href="/register">Join Us</FooterLink>
          </FooterSection>

          {/* Services */}
          <FooterSection title="Our Services">
            <FooterLink href="#services">Employment & Study Abroad</FooterLink>
            <FooterLink href="#services">Business Planning</FooterLink>
            <FooterLink href="#services">Property Development</FooterLink>
            <FooterLink href="#services">Training & Development</FooterLink>
            <FooterLink href="#services">Community Support</FooterLink>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Us">
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: isMobile ? '12px' : '16px',
              padding: isMobile ? '16px 12px' : '20px 16px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: isMobile ? '11px' : '12px',
                lineHeight: '1.6',
                fontFamily: '"Open Sans", sans-serif'
              }}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#93c5fd', fontWeight: 500 }}>
                    📍 34 Ambo Street, Calabar
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#93c5fd', fontWeight: 500 }}>
                    📞 +234 809 560 4798
                  </div>
                  <div style={{ fontSize: isMobile ? '10px' : '11px', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Secretary General
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#93c5fd', fontWeight: 500 }}>
                    📞 +44 7498 568 978
                  </div>
                  <div style={{ fontSize: isMobile ? '10px' : '11px', color: 'rgba(255, 255, 255, 0.7)' }}>
                    International Chairman
                  </div>
                </div>
                
                <div>
                  <div style={{ color: '#93c5fd', fontWeight: 500 }}>
                    ✉️ irjack2000@yahoo.com
                  </div>
                  <div style={{ color: '#93c5fd', fontWeight: 500, marginTop: '4px' }}>
                    ✉️ alukojoseph@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
          margin: isMobile ? '30px 0 20px 0' : '40px 0 30px 0'
        }} />

        {/* Bottom Footer */}
        <div className="row">
          <div className="col-md-12">
            <div style={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: isMobile ? '12px' : '14px',
              fontFamily: '"Open Sans", sans-serif'
            }}>
              <p style={{ margin: '0 0 10px 0' }}>
                © {new Date().getFullYear()} BIAFEF (BCS International Accountants, Finance and Entrepreneurs Fellowship).
              </p>
              <p style={{ margin: 0 }}>
                All rights reserved. | Empowering professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Styles */}
      <style>{`
        @media (max-width: 768px) {
          #footer .col-xs-12 {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0 15px;
          }
        }
        
        @media (min-width: 769px) {
          #footer .col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
            padding: 0 15px;
          }
        }
        
        #footer .row {
          margin-left: -15px;
          margin-right: -15px;
        }
        
        @keyframes footerFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        #footer .col-xs-12,
        #footer .col-md-3 {
          animation: footerFadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

