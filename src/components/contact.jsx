import React from "react";

export const Contact = (props) => {
  return (
    <div id="contact" style={{ 
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      padding: '80px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: '50px' }}>
          <h2 style={{ 
            color: '#fff',
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '20px',
            fontFamily: '"Raleway", sans-serif'
          }}>
            Connect With Us
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Stay connected with BIAFEF through our social media channels and join our growing community
          </p>
        </div>
        
        <div className="social" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <a 
            href={props.data ? props.data.facebook : "/"} 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontSize: '24px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#1877f2';
              e.target.style.transform = 'translateY(-5px) scale(1.1)';
              e.target.style.boxShadow = '0 10px 30px rgba(24, 119, 242, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <i className="fa fa-facebook"></i>
          </a>
          
          <a 
            href={props.data ? props.data.twitter : "/"} 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontSize: '24px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#1da1f2';
              e.target.style.transform = 'translateY(-5px) scale(1.1)';
              e.target.style.boxShadow = '0 10px 30px rgba(29, 161, 242, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <i className="fa fa-twitter"></i>
          </a>
          
          <a 
            href={props.data ? props.data.youtube : "/"} 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontSize: '24px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#ff0000';
              e.target.style.transform = 'translateY(-5px) scale(1.1)';
              e.target.style.boxShadow = '0 10px 30px rgba(255, 0, 0, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
