import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header id="header" style={{ marginTop: '25px', position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0f172a' }}>

      {/* Background Image with modern overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'url(./img/intro-bg.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(30, 58, 138, 0.6) 100%)',
        zIndex: 1
      }} />

      {/* Subtle Grid Pattern for "Finance/Structure" vibe */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 1, pointerEvents: 'none'
      }} />

      {/* Main Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', paddingTop: '40px', paddingBottom: '60px', paddingLeft: '25px', paddingRight: '25px' }}>
        <div className="row align-items-center">

          {/* Left Text Column */}
          <div className="col-lg-7 col-md-12" style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '30px',
              color: '#60a5fa', fontSize: '13px', fontWeight: '600', letterSpacing: '1.5px',
              textTransform: 'uppercase', marginBottom: '24px', fontFamily: '"Plus Jakarta Sans", sans-serif'
            }}>
              Global Professional Network
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', color: '#ffffff',
              lineHeight: '1.15', marginBottom: '24px', fontFamily: '"Plus Jakarta Sans", sans-serif',
              textShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              {props.data ? props.data.title : "BIAFEF"}
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)', color: '#e2e8f0', lineHeight: '1.7',
              marginBottom: '40px', maxWidth: '600px', fontWeight: '400', fontFamily: '"Inter", sans-serif'
            }}>
              {props.data ? props.data.paragraph : "A global fellowship of professionals in accounting, finance, and entrepreneurship. Connect, learn, and grow with industry leaders."}
            </p>

            <div className="hero-buttons-container" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="/register" onClick={props.onRegisterClick} className="hero-btn-primary" style={{
                padding: '16px 36px', background: '#3b82f6', color: '#fff', borderRadius: '8px',
                fontWeight: '600', fontSize: '16px', textDecoration: 'none', transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)', display: 'inline-block',
                fontFamily: '"Plus Jakarta Sans", sans-serif'
              }}>
                Become a Member
              </a>
              <a href="#about" className="hero-btn-secondary" style={{
                padding: '16px 36px', background: 'rgba(255, 255, 255, 0.05)', color: '#fff',
                borderRadius: '8px', fontWeight: '600', fontSize: '16px', textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease', display: 'inline-block',
                fontFamily: '"Plus Jakarta Sans", sans-serif'
              }}>
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Visual/Stats Column */}
          <div className="col-lg-5 col-md-12 hero-stats-container" style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            marginTop: '0px'
          }}>
            <div className="impact-card-wrapper" style={{
              background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px', padding: '40px', backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', overflow: 'hidden'
            }}>
              {/* Glass reflection */}
              <div style={{
                position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
                opacity: '0.5', pointerEvents: 'none', transform: 'rotate(30deg)'
              }} />

              <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', marginBottom: '30px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                Our Impact
              </h3>

              <div className="impact-grid" style={{ display: 'grid', gap: '20px' }}>
                {[
                  { value: '500+', label: 'Global Members', icon: 'fa fa-users' },
                  { value: '8+', label: 'Core Services', icon: 'fa fa-briefcase' },
                  { value: '50+', label: 'Countries', icon: 'fa fa-globe' },
                  { value: '100%', label: 'Commitment', icon: 'fa fa-handshake-o' }
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: '20px', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)', transition: 'transform 0.3s ease'
                  }} className="stat-card">
                    <div style={{ fontSize: '24px', marginBottom: '12px', color: '#60a5fa' }}>
                      <i className={stat.icon}></i>
                    </div>
                    <div style={{ color: '#fff', fontSize: '28px', fontWeight: '800', marginBottom: '4px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      {stat.value}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: '"Inter", sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .impact-grid {
          grid-template-columns: 1fr 1fr;
        }
        .hero-btn-primary:hover {
          background: #2563eb !important;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.5) !important;
        }
        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-2px);
        }
        .stat-card:hover {
          transform: translateY(-5px) !important;
          background: rgba(30, 41, 59, 0.6) !important;
          border-color: rgba(96, 165, 250, 0.3) !important;
        }
        @media (max-width: 991px) {
          .hero-stats-container {
            margin-top: 50px !important;
          }
          #header {
            padding: 60px 0 40px 0;
            height: auto !important;
            min-height: 100vh;
          }
        }
        @media (max-width: 576px) {
          .impact-card-wrapper {
            padding: 20px !important;
          }
          .stat-card {
            padding: 12px !important;
          }
          .hero-buttons-container {
            flex-direction: row !important;
            flex-wrap: nowrap;
            gap: 10px !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            flex: 1;
            padding: 12px 10px !important;
            font-size: 14px !important;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

