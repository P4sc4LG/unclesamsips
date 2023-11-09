import React, { useState } from 'react';
import useCocktail from '../hooks/useCocktail';

function CocktailList() {
  const {cocktails, fetchCocktailById} = useCocktail('a') ; // Passer null pour obtenir tous les cocktails
  const [cocktail, setCocktail] = useState([]);

  const cocktailById = async (id) => {
    try{
        const result = await fetchCocktailById(id);
        setCocktail(result.strDrink);
    }catch(error){
        console.error('Erreur lors de la recherche du cocktail par ID :', error);
    }
    //console.log("non",id);
  };
  //const test = FetchCocktailById(12333);
  return (
    <div>
       <h2> cocktail selected </h2> 
       <h1>{cocktail}</h1>
      <h2>Liste des IDs des Cocktails</h2>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>{cocktail.idDrink}
           <button onClick={()=>cocktailById(cocktail.idDrink)}>
              Rechercher par ID
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailList;
