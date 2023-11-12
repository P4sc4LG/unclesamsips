import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useCocktail from '@/hooks/useCocktail';


const Cocktail = () => {

    const { uid } = useParams();

    const { fetchCocktailById } = useCocktail();

    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCocktail = await fetchCocktailById(uid);
            setCocktail(fetchedCocktail);
            console.log(fetchedCocktail)
        };

        fetchData();
    }, [uid]);

    return (
        <div>
           <h1>{cocktail.strDrink}</h1>
        </div>
    );
};

export default Cocktail;