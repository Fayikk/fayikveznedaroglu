import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Social.css';

function Social() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fayik-veznedaroglu-a0236b197/?originalSubdomain=tr',
      icon: <FaLinkedin className="social-icon linkedin" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Fayikk',
      icon: <FaGithub className="social-icon github" />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@TelefericHouse',
      icon: <FaYoutube className="social-icon youtube" />,
    }
  ];

  return (
    <section id="social" className="social-container">
      
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.name}
          >
            {link.icon}
            <span className="social-name">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Social;
