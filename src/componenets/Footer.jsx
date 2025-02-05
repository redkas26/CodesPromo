import React from 'react';
import '../styles/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Site de Codes Promo. Tous droits réservés.</p>
      <nav>
        <ul>
          <li><a href="/mentions-legales">Mentions légales</a></li>
          <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;