import React from 'react';

const Navbar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.2s'
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2rem',
      height: '70px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff', cursor: 'pointer' }}>
        SoeunLee
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/projects" style={linkStyle}>Projects</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;