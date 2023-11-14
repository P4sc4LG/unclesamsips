import React, {useEffect, useState, useRef} from 'react';
import useCocktail from "@/hooks/useCocktail";
import ShowCocktail from "@/components/public/ShowCocktail/ShowCocktail";
import Loading from "@/components/shared/Loading/Loading";

const RandomCocktail = () => {

    const [randomCocktail, setRandomCocktail] = useState([]);
    const flag = useRef(false);
    const {fetchRandomCocktail} = useCocktail();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        if (flag.current === false) {
            setIsLoading(false);

            async function fetchRandom() {
                try {
                    const cocktail = await fetchRandomCocktail();
                    setRandomCocktail(cocktail);
                    setIsLoading(true);
                } catch (error) {
                    console.error('Erreur lors de la récupération du cocktail aléatoire :', error);
                    setIsLoading(true);
                }
            }

            fetchRandom();

        }
        return () => flag.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {
                isLoading ? <ShowCocktail cocktail={randomCocktail}/> : <Loading/>
            }
        </div>
    );
};

export default RandomCocktail;