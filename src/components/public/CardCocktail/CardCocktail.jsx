import './CardCocktail.css';

import React, { useEffect } from 'react';
import iconNoAlcohol from '@/assets/icons/no_alcohol.png';
import { Link } from 'react-router-dom';

const CardCocktail = ({ uid, title, img, alcoholic }) => {

  useEffect(() => {
    setTimeout(() => {
      var cardImages = document.querySelectorAll('.card-image');

      cardImages.forEach(cardImage => {
        var image_url = cardImage.getAttribute('data-image-full');
        var contentImage = cardImage.querySelector('img');

        contentImage.src = image_url;

        contentImage.addEventListener('load', function () {
          cardImage.style.backgroundImage = 'url(' + image_url + ')';
          cardImage.classList.add('is-loaded');
        });
      });
    }, 100);
  }, []);

  return (
    <Link to={`/cocktail/show/${uid}`}>

      <div className="col">

        <li className={`card ${alcoholic === 'Non alcoholic' ? 'non-alcoholic' : ''}`}>

          {alcoholic === 'Alcoholic' ? (
            <span className="alcoholic-label"></span>
          ) : (
            <img className="alcoholic-label" src={iconNoAlcohol} style={{ width: 40, height: 'auto' }} />
          )}

          <a
            className="card-image"
            target="_blank"
            style={{
              backgroundImage: `url(${img})`,
            }}
            data-image-full={img}
          >
            <img src={img} alt={title} />
          </a>
          <a
            className="card-description"
            target="_blank"
          >
            <h5>{title}</h5>
          </a>
        </li>
      </div>
    </Link>
  );
};

export default CardCocktail;
