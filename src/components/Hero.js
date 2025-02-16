import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="profile-image">
          <img src="/assets/Vesikalık.png" alt="Fayik Veznedaroglu" />
        </div>
        <h1>Hoş Geldiniz</h1>
        <p>Eğitim içeriklerim ve çalışmalarım için portfolyoma göz atın.</p>
      </div>
    </section>
  );
}

export default Hero;
