import React, { useEffect } from 'react';
import cocktailIcon from '../../../assets/icons/cocktail.png'; // Ajoutez le chemin correct

import './loading.css';

const Loading = () => {
    return (
            <div className="spinner-container">
               <img id="cocktailImage" src={cocktailIcon} alt="Cocktail Loading" />
            </div>
    );
}

export default Loading;