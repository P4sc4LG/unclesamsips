import React, { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePalette } from 'color-thief-react';
import Color from 'color';
import Card from 'react-bootstrap/Card';

import './cocktail.css';

import useCocktail from '@/hooks/useCocktail';
import { Instruction, Label } from '@/components';
import { Col, Row } from 'react-bootstrap';
import { DarkModeContext } from '../../../context/DarkModeContext';
import ShowCocktail from "@/components/public/ShowCocktail/ShowCocktail";

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