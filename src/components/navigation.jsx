import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    handleScroll();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '#features', label: 'Features', icon: 'fa-star' },
    { href: '#about', label: 'About', icon: 'fa-info-circle' },
    { href: '#services', label: 'Services', icon: 'fa-briefcase' },
    { href: '#testimonials', label: 'Testimonials', icon: 'fa-comments' },
    { href: '#team', label: 'Team', icon: 'fa-users' },
    { href: '#contact', label: 'Connect', icon: 'fa-envelope' }
  ];

  const NavLink = ({ href, label, icon, mobile = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <a
        href={href}
        onClick={closeMenu}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: mobile ? '12px' : '8px',
          padding: mobile ? '16px 24px' : '12px 16px',
          margin: mobile ? '0' : '0 4px',
          color: mobile ? '#1a202c' : (isScrolled ? '#1a202c' : '#fff'),
          textDecoration: 'none',
          fontSize: mobile ? '16px' : '14px',
          fontWeight: 600,
          fontFamily: '"Raleway", sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          borderRadius: mobile ? '0' : '12px',
          background: mobile 
            ? (isHovered ? 'rgba(37, 99, 235, 0.1)' : 'transparent')
            : (isHovered ? 'rgba(37, 99, 235, 0.1)' : 'transparent'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered && !mobile ? 'translateY(-2px)' : 'translateY(0)',
          position: 'relative',
          borderLeft: mobile && isHovered ? '4px solid #2563eb' : '4px solid transparent'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {mobile && (
          <i 
            className={`fa ${icon}`} 
            style={{ 
              fontSize: '16px', 
              color: isHovered ? '#2563eb' : '#6b7280',
              transition: 'color 0.3s ease'
            }} 
          />
        )}
        <span>{label}</span>
        {!mobile && (
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isHovered ? '80%' : '0',
            height: '2px',
            background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
            borderRadius: '1px',
            transition: 'width 0.3s ease'
          }} />
        )}
      </a>
    );
  };

  return (
    <>
      <nav 
        id="menu" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderBottom: isScrolled 
            ? '1px solid rgba(0, 0, 0, 0.1)' 
            : '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isScrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
            : '0 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: isScrolled ? '12px 0' : '16px 0'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            {/* Logo */}
            <a 
              href="#page-top" 
              style={{
                fontSize: isMobile ? '22px' : '28px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                fontFamily: '"Raleway", sans-serif',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
            BIAFEF
            </a>

            {/* Desktop Menu */}
            {!isMobile && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {menuItems.map((item, index) => (
                  <NavLink 
                    key={index} 
                    href={item.href} 
                    label={item.label} 
                    icon={item.icon}
                  />
                ))}
                
                {/* CTA Button */}
                <a
                  href="/register"
                  style={{
                    marginLeft: '16px',
                    padding: '10px 20px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: '"Raleway", sans-serif',
                    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
                  }}
                >
                  Join Us
                </a>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
          <button
                onClick={toggleMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px',
                  cursor: 'pointer',
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', width: '24px', height: '18px' }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '24px',
                    height: '3px',
                    background: isScrolled ? '#1a202c' : '#fff',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
                  }} />
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '7px',
                    width: '24px',
                    height: '3px',
                    background: isScrolled ? '#1a202c' : '#fff',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    opacity: isMenuOpen ? 0 : 1
                  }} />
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '14px',
                    width: '24px',
                    height: '3px',
                    background: isScrolled ? '#1a202c' : '#fff',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
                  }} />
                </div>
          </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 999,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }} onClick={closeMenu} />
      )}

      {/* Modern Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          maxWidth: '400px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          zIndex: 1001,
          animation: 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          overflow: 'hidden'
        }}>
          {/* Brand Header */}
          <div style={{
            padding: '24px 24px 20px 24px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(29, 78, 216, 0.05) 100%)',
            borderBottom: '1px solid rgba(37, 99, 235, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              margin: '0 auto 12px auto',
              background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 800,
              color: '#fff',
              fontFamily: '"Raleway", sans-serif',
              boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)'
            }}>
              B
            </div>
            <span style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1a202c',
              fontFamily: '"Raleway", sans-serif',
              background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              BIAFEF
            </span>
        </div>

          {/* Menu Items */}
          <div style={{ padding: '16px 0' }}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px 24px',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                  fontFamily: '"Open Sans", sans-serif',
                  transition: 'all 0.3s ease',
                  borderLeft: '4px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(37, 99, 235, 0.05)';
                  e.target.style.borderLeftColor = '#2563eb';
                  e.target.style.color = '#2563eb';
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderLeftColor = 'transparent';
                  e.target.style.color = '#374151';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <i className={item.icon} style={{
                  fontSize: '18px',
                  marginRight: '12px',
                  width: '20px',
                  textAlign: 'center'
                }} />
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div style={{ 
            padding: '20px 24px 24px 24px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(29, 78, 216, 0.01) 100%)',
            borderTop: '1px solid rgba(37, 99, 235, 0.1)'
          }}>
            <a
              href="/register"
              onClick={closeMenu}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px 20px',
                background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '16px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: '"Raleway", sans-serif',
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.25)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.25)';
              }}
            >
              Join BIAFEF Today
            </a>
            
            {/* Quick Contact */}
            <div style={{
              textAlign: 'center',
              marginTop: '16px',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '12px',
              border: '1px solid rgba(37, 99, 235, 0.1)'
            }}>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                marginBottom: '6px',
                fontFamily: '"Open Sans", sans-serif'
              }}>
                Quick Contact
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px'
              }}>
                <a href="tel:+1234567890" style={{
                  color: '#2563eb',
                  fontSize: '18px',
                  textDecoration: 'none'
                }}>
                  <i className="fa fa-phone" />
                </a>
                <a href="mailto:info@biafef.org" style={{
                  color: '#2563eb',
                  fontSize: '18px',
                  textDecoration: 'none'
                }}>
                  <i className="fa fa-envelope" />
                </a>
                <a href="https://wa.me/1234567890" style={{
                  color: '#2563eb',
                  fontSize: '18px',
                  textDecoration: 'none'
                }}>
                  <i className="fa fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Styles */}
      <style>{`
        @media (max-width: 768px) {
          body.menu-open {
            overflow: hidden;
          }
        }
        
        #menu a {
          position: relative;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        .nav-item {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
