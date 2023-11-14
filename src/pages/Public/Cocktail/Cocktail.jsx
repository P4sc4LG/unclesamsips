import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import './cocktail.css';
import useCocktail from '../../../hooks/useCocktail';
import {DarkModeContext} from '../../../context/DarkModeContext';
import {ShowCocktail} from "../../../components/index";

const Loading = () => <div>Loading...</div>;


const Cocktail = () => {
    const {uid} = useParams();
    const {fetchCocktailById} = useCocktail();
    const [cocktail, setCocktail] = useState({});
    const {darkMode} = useContext(DarkModeContext);

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