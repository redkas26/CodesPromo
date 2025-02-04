// src/pages/Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <div>
      <h2>Inscription</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;