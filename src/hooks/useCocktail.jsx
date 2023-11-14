import { useState, useEffect } from 'react';

function useCocktail(nameCocktail) {

  const apiUrl = nameCocktail
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameCocktail}`
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

 
    async function fetchCocktails() {
      try {
        const isTestMode = process.env.REACT_APP_TEST === 'true';
        const alphabet = isTestMode ? 'abc' : 'abcdefghijklmnopqrstuvwxyz';
        const cocktailsData = [];
        if(!nameCocktail){
            for (const letter of alphabet) {
            const response = await fetch(`${apiUrl}${letter}`);
            const data = await response.json();
            if (data.drinks) {
                cocktailsData.push(...data.drinks);
            }
            await new Promise(resolve => setTimeout(resolve, 350));
            }
        }else{
            const response = await fetch(
                apiUrl,
            );
            const data = await response.json();
            cocktailsData.push(...data.drinks);
        }
        return cocktailsData;
      } catch (error) {
        console.error('Erreur lors de la récupération des cocktails :', error);
      }
  }

  async function fetchCocktailById(id){
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks[0];
  }

  async function fetchRandomCocktail(){
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data.drinks[0];
  }
  
  return { fetchCocktails, fetchCocktailById, fetchRandomCocktail };
}

export default useCocktail;
