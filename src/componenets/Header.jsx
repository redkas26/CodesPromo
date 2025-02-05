// src/components/Header.jsx
import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  

  return (
    <header className="header">
      <h1>CodesPromo</h1>
      <nav>
        <ul>
          <li><a href="/">Codes Promo</a></li>
          <li><a href="/promos">Selection de jour</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button onClick={() => setShowSignupModal(true)} className="auth-button">
          Inscription
        </button>
        <button onClick={() => setShowLoginModal(true)} className="auth-button">
          Connexion
        </button>
      </div>

      {/* Modal d'inscription */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Inscription</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Mot de passe" required />
              <button type="submit">S'inscrire</button>
            </form>
            <button onClick={() => setShowSignupModal(false)}>Fermer</button>
          </div>
        </div>
      )}

      {/* Modal de connexion */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Connexion</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Mot de passe" required />
              <button type="submit">Se connecter</button>
            </form>
            <button onClick={() => setShowLoginModal(false)}>Fermer</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;