import React from 'react';
import CardCocktail from '../../components/CardCocktail/CardCocktail';

import useCocktail from '../../hooks/useCocktail';

import cocktailEx from '../../assets/example.jpg'

const Accueil = () => {

    const { cocktails } = useCocktail(); // Passer null pour obtenir tous les cocktails

    return (
        <div>
            <div className="row row-cols-5">
                {cocktails.map(cocktail => (
                    <CardCocktail
                        key={cocktail.idDrink}
                        title={cocktail.strDrink}
                        text={cocktail.strInstructions}
                        alcoholic={cocktail.strAlcoholic}
                        img={cocktail.strDrinkThumb || cocktailEx}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accueil;