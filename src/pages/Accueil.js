import React from 'react';
import CardCocktail from '../components/CardCocktail/CardCocktail';

import cocktailEx from '../assets/example.jpg'

const Accueil = () => {
    return (
        <div>
            <CardCocktail
                title="Titre de la carte"
                text="Texte de la carte"
                alcoholic="No Alcoholic"
                img={cocktailEx}
            />
        </div>
    );
};

export default Accueil;