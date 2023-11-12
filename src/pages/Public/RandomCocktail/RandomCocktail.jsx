import React, {useEffect, useState, useRef} from 'react';
import useCocktail from "@/hooks/useCocktail";

const RandomCocktail = () => {

    const [randomCocktail, setRandomCocktail] = useState([]);
    const flag = useRef(false);
    const {fetchRandomCocktail} = useCocktail();

    useEffect(() => {
        if (flag.current === false){
            async function fetchRandom() {
                try {
                    const cocktail = await fetchRandomCocktail();
                    setRandomCocktail(cocktail);
                } catch (error) {
                    console.error('Erreur lors de la récupération du cocktail aléatoire :', error);
                }
            }
            fetchRandom();

        }
        return () => flag.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            //TODO transformer en composant Cocktail
        </div>
    );
};

export default RandomCocktail;