import React from 'react';
import useCocktail from '../hooks/useCocktail';

function CocktailList() {
  const cocktails = useCocktail(null); // Passer null pour obtenir tous les cocktails

  return (
    <div>
      <h2>Liste des IDs des Cocktails</h2>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>{cocktail.idDrink}</li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailList;
