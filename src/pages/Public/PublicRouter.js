import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Accueil, ExemplePage, RandomCocktail } from './'
import Error from '@/_utils/Error'

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/exemple" element={<ExemplePage />} />
            <Route path="/cocktail/random" element={<RandomCocktail />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default PublicRouter;