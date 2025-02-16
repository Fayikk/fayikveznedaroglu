import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Fayik Veznedaroğlu</div>
      <div className="nav-links">
        <a href="#home" className="nav-link">Ana Sayfa</a>
        <a href="#courses" className="nav-link">Eğitimler</a>
        <a href="#social" className="nav-link">Sosyal Medya</a>
      </div>
    </nav>
  );
}

export default Navbar;
