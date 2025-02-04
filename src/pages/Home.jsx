import React, { useState } from 'react'
import '../App.css';
import SearchBar from '../componenets/SearchBar'
import PromoCode from '../componenets/CodePromo'
import { div } from 'framer-motion/client';

function Home() {

    const [searchTerm, setSearchTerm] = useState('');
    const [showSales, setShowSales] = useState(false)
    const promoCodes = [
      {
        code: "PROMO10",
        description: "10% de réduction sur Amazon",
        link: "https://www.amazon.fr/?tag=VOTRE_ID_AFFILIATION",
        isSale: true,
      },
      {
        code: "SOLDES20",
        description: "20% de réduction sur Cdiscount",
        link: "https://www.cdiscount.com/?tag=VOTRE_ID_AFFILIATION",
        isSale: true,
    },
      {
        code: "FREESHIP",
        description: "Livraison gratuite sur Zalando",
        link: "https://www.zalando.fr/?tag=VOTRE_ID_AFFILIATION",      
        isSale: true,
      },
      {
        code: "BLACKFRIDAY",
        description: "30% de réduction pour le Black Friday",
        link: "https://www.example.com/?tag=VOTRE_ID_AFFILIATION",
        isSale: true,
    },
      {
        code: "PROMO10",
        description: "10% de réduction sur Amazon",
        link: "https://www.amazon.fr/?tag=VOTRE_ID_AFFILIATION",
        isSale: false,
    },
      {
        code: "SOLDES20",
        description: "20% de réduction sur Cdiscount",
        link: "https://www.cdiscount.com/?tag=VOTRE_ID_AFFILIATION",
        isSale: false,
    },
      {
        code: "FREESHIP",
        description: "Livraison gratuite sur Zalando",
        link: "https://www.zalando.fr/?tag=VOTRE_ID_AFFILIATION",
        isSale: true,
    },
      {
        code: "BLACKFRIDAY",
        description: "30% de réduction pour le Black Friday",
        link: "https://www.example.com/?tag=VOTRE_ID_AFFILIATION",
        isSale: true,
    },
      
    ];
  
    const filteredPromos = promoCodes.filter((promo) => {
        const matchesSearch = promo.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              promo.description.toLowerCase().includes(searchTerm.toLowerCase());
        return showSales ? matchesSearch && promo.isSale : matchesSearch;
      });
  
  return (
    <>
    <div className='selection'>
         <h1>Codes Promo Disponibles</h1>
        <SearchBar onSearch={setSearchTerm} />

        <button
          onClick={() => setShowSales(!showSales)}
          className="sales-button"
        >
          {showSales ? "Voir tous les codes" : "Voir les soldes"}
        </button>
    </div>
    <main>
       
        
        {filteredPromos.map((promo, index) => (
          <PromoCode 
            key={index} 
            code={promo.code} 
            description={promo.description} 
            link={promo.link} />
        ))}
      </main>
      </>
  )
}

export default Home