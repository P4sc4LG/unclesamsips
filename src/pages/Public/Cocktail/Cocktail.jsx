import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './cocktail.css';

import useCocktail from '@/hooks/useCocktail';
import ShowCocktail from "@/components/public/ShowCocktail/ShowCocktail";

const Cocktail = () => {
    const {uid} = useParams();
    const {fetchCocktailById} = useCocktail();
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCocktail = await fetchCocktailById(uid);
            setCocktail(fetchedCocktail);
        };

        fetchData();
    }, [uid]);

    return (
        <ShowCocktail
            cocktail={cocktail}
        />
    );
};

export default Cocktail;