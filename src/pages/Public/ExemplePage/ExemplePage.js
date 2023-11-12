import React, { useEffect, useState } from 'react';
import useCocktail from "@/hooks/useCocktail";

const ExemplePage = () => {
  const { fetchRandomCocktail } = useCocktail();
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    async function fetchRandom() {
      try {
        const cocktail = await fetchRandomCocktail();
        setRandomCocktail(cocktail);
      } catch (error) {
        console.error('Erreur lors de la récupération du cocktail aléatoire :', error);
      }
    }

    fetchRandom();
  }, []);

  return (
    <div>
      <h1>Autre page exemple</h1>
      {randomCocktail && (
        <div>
          <h2>{randomCocktail.strDrink}</h2>
          <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
        </div>
      )}
    </div>
  );
};

export default ExemplePage;
