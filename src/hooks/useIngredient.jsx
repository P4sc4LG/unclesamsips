import { useState, useEffect } from 'react';

function useIngredient(ingredientName) {
  const [ingredients, setIngredients] = useState([]);
  const apiUrl = ingredientName
    ? `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`
    : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        let ingredientsData = [];
        if (ingredientName) {
          // If searching by ingredient, use the filter endpoint
          ingredientsData = data.drinks || [];
        } else {
          // If fetching the list of all ingredients, use the list endpoint
          ingredientsData = data.drinks || [];
        }

        setIngredients(ingredientsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des ingrédients :', error);
      }
    }

    fetchIngredients();
  }, [ingredientName, apiUrl]);

  async function fetchIngredientById(id) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`);
    const data = await response.json();
    return data.ingredients[0];
  }

  return { ingredients, fetchIngredientById };
}

export default useIngredient;
