import { useState, useEffect } from 'react';

function useCocktail(nameCocktail) {
  const [cocktails, setCocktails] = useState([]);
  const apiUrl = nameCocktail
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameCocktail}`
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

  useEffect(() => {
    async function fetchCocktails() {
      try {
        const alphabet = 'w';
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
        setCocktails(cocktailsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des cocktails :', error);
      }
    }
    fetchCocktails();
  }, [nameCocktail,apiUrl]);

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
  
  return { cocktails, fetchCocktailById, fetchRandomCocktail };
}

export default useCocktail;
