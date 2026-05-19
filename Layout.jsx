import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main style={{ padding: '2rem', minHeight: 'calc(100vh - 70px)' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;