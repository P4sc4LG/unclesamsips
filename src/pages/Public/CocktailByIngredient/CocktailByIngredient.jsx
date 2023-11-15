import React, { useState, useEffect } from 'react';
import { usePalette } from 'color-thief-react';
import Color from 'color';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Instruction, Label } from '../../../components/index';
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

const ShowCocktail = ({ cocktail }) => {

  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientName = cocktail[`strIngredient${i}`];
      const ingredientMeasure = cocktail[`strMeasure${i}`];

      if (!ingredientName || ingredientName.trim() === '') {
        continue;
      }

      ingredients.push(`${ingredientMeasure} ${ingredientName}`);
    }

    return ingredients.map((ingredient, index) => (
      <div key={index}>{ingredient}</div>
    ));
  };

  return (
    
    <div >
      <Row className="align-items-center pt-5">
        <Col>
          {cocktail.strDrinkThumb && (
            <img
              className="shadow bg-body-tertiary rounded"
              style={{ width: 350, height: 350 }}
              src={cocktail.strDrinkThumb}
              alt=""
            />
          )}
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{cocktail.strDrink}</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Text>
                {cocktail.strInstructions && (
                  <Instruction strInstructions={cocktail.strInstructions} />
                )}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Text>
                <Label content="Les ingrédients"></Label>
                {renderIngredients()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CocktailByIngredient;
