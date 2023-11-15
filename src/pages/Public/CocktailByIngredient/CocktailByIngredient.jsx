import React, { useState, useEffect } from 'react';
import { usePalette } from 'color-thief-react';
import Color from 'color';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Instruction, Label, ShowCocktail } from '../../../components/index';
import useCocktail from '../../../hooks/useCocktail';
import { useParams } from 'react-router-dom';

const CocktailByIngredient = () => {
  const { name } = useParams(); // Récupérez le nom de l'ingrédient depuis l'URL
  const { fetchCocktailsByIngredient } = useCocktail();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchCocktails() {
      const data = await fetchCocktailsByIngredient(name);
      setCocktails(data);
    }

    fetchCocktails();
  }, [name]);

  return (
    <div>
      {cocktails.map(cocktail => (
        <ShowCocktail key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};
export default CocktailByIngredient;
