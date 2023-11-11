import './CardCocktail.css';

import React, { useEffect } from 'react';
import iconNoAlcohol from '../../assets/icons/no_alcohol.png';

const CardCocktail = ({ title, img, alcoholic }) => {
	
  useEffect(() => {
    function lazyLoad() {
      var cardImage = document.querySelector('.card-image');
      if (cardImage) {
        var image_url = cardImage.getAttribute('data-image-full');
        var contentImage = cardImage.querySelector('img');

        contentImage.src = image_url;

        contentImage.addEventListener('load', function () {
          cardImage.style.backgroundImage = 'url(' + image_url + ')';
          cardImage.classList.add('is-loaded');
        });
      }
    }

    window.addEventListener('load', function () {
      setTimeout(lazyLoad, 100);
    });
  }, []);

  return (
    <ul className="card-list">
      <li className={`card ${alcoholic === 'Non alcoholic' ? 'non-alcoholic' : ''}`}>
        
      {alcoholic === 'Alcoholic' ? (
            <span className="alcoholic-label"></span>
          ) : (
              <img className="alcoholic-label" src={iconNoAlcohol} style={{ width: 40, height: 'auto' }} />
          )}

        <a
          className="card-image"
          href={img}
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
          href={img}
          target="_blank"
        >
          <h5>{title}</h5>
        </a>
      </li>
    </ul>
  );
};

export default CardCocktail;
