import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePalette } from 'color-thief-react';
import Color from 'color';

import './cocktail.css';

import useCocktail from '@/hooks/useCocktail';

const Loading = () => <div>Loading...</div>;

const Cocktail = () => {
    const { uid } = useParams();
    const { fetchCocktailById } = useCocktail();
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCocktail = await fetchCocktailById(uid);
            setCocktail(fetchedCocktail);
        };

        fetchData();
    }, [uid]);

    // Utilisation du hook usePalette
    const { data: paletteData, loading: paletteLoading } = usePalette(
        cocktail.strDrinkThumb || '',
        4,
        'hex',
        {
            crossOrigin: 'anonymous',
        }
    );

    console.log('Palette Data:', paletteData); // Ajout de cette ligne pour déboguer

    // Création du style pour le fond de dégradé
    const gradientStyle = {
        background: paletteData
            ? `linear-gradient(to bottom right, 
              rgba(${Color(paletteData[0]).array().join(', ')}, 0.4), 
              rgba(${Color(paletteData[1]).array().join(', ')}, 0.4), 
              rgba(${Color(paletteData[2]).array().join(', ')}, 0.4), 
              rgba(${Color(paletteData[3]).array().join(', ')}, 0.4))`
            : 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Couleur du texte pour une meilleure visibilité
    };


    return (
        <div style={gradientStyle}>
            <h1>{cocktail.strDrink}</h1>
            {cocktail.strDrinkThumb && <img style={{ width: 150, height: 150 }} src={cocktail.strDrinkThumb} alt='' />}

            {cocktail.strDrinkThumb && (
                <div>
                    {paletteLoading ? (
                        <Loading />
                    ) : (
                        <div>
                            {paletteData && paletteData.length > 0 && (
                                <div>
                                    <h2>Palette de couleurs:</h2>
                                    <ul>
                                        {paletteData.map((color, index) => (
                                            <li key={index} style={{ color: color }}>
                                                <strong>{color}</strong>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cocktail;