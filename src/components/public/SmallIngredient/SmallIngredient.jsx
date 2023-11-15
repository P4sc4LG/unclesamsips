import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePalette } from 'color-thief-react';
import Color from 'color';
import './CardIngredient.css';

const CardIngredient = ({ ingredientId, ingredientName }) => {
  const { data: paletteData } = usePalette(
    `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`,
    4,
    'hex',
    {
      crossOrigin: 'anonymous',
    }
  );

  const gradientStyle = {
    background: paletteData
      ? `linear-gradient(to bottom right, 
          rgba(${Color(paletteData[0]).array().join(', ')}, 0.5), 
          rgba(${Color(paletteData[1]).array().join(', ')}, 0.5), 
          rgba(${Color(paletteData[2]).array().join(', ')}, 0.5), 
          rgba(${Color(paletteData[3]).array().join(', ')}, 0.5))`
      : 'white',
  };

  useEffect(() => {
    setTimeout(() => {
      var cardImages = document.querySelectorAll('.card-image');
      cardImages.forEach(cardImage => {
        var image_url = cardImage.getAttribute('data-image-full');
        var contentImage = cardImage.querySelector('img');

        contentImage.src = image_url;

        contentImage.addEventListener('load', function () {
          cardImage.style.backgroundImage = 'url(' + contentImage.src + ')';
          cardImage.classList.add('is-loaded');
        });
      });
    }, 100);
  }, []);

  return (
    <Link to={`/ingredient/show/${ingredientId}`}>
      <div className="col">
        <li className="card" style={gradientStyle}>
          <a
            className="card-image"
            href={`https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`}
            target="_blank"
            style={{
              backgroundImage: `url(https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png)`,
            }}
            data-image-full={`https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`}
          >
            <img
              src={`https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`}
              alt={ingredientName}
            />
          </a>
          <a
            className="card-description"
            href={`https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`}
            target="_blank"
          >
            <h5>{ingredientName}</h5>
          </a>
        </li>
      </div>
    </Link>
  );
};

export default CardIngredient;
