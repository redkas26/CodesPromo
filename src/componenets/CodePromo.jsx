// src/components/PromoCode.jsx
import React from 'react';

const PromoCode = ({ code, description, link, isSale }) => {
  return (
    <div className="promo-code">
      {isSale && <span className="sale-badge">Soldes</span>}
      <h3>{code}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="promo-link">
        Utiliser ce code
      </a>
    </div>
  );
};

export default PromoCode;