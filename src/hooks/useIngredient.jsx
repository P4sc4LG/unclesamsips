function useIngredient() {

    async function fetchIngredientByName(name) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
        const data = await response.json();
        return data.ingredients[0];
    }

    async function fetchIngredientById(id) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`);
        const data = await response.json();
        return data.ingredients[0];
    }

    async function fetchCocktailsByIngredient(nameIngredient) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nameIngredient}`);
        const data = await response.json();
        return data.drinks;
    }

    async function fetchAllIngredients() {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        const data = await response.json();
        return data.drinks;
    }

    return {fetchIngredientByName, fetchIngredientById, fetchCocktailsByIngredient, fetchAllIngredients};
}

export default useIngredient();