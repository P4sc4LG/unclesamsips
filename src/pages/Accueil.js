import React from 'react';
import CardCocktail from '../components/CardCocktail';

const Accueil = () => {
    return (
        <div>
            <h1>Accueil</h1>
            <CardCocktail
                title="Titre de la carte"
                text="Texte de la carte"
                img="URL de l'image"
            />
        </div>
    );
};

export default Accueil;