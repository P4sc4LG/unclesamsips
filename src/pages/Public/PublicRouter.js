import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Accueil, ExemplePage, Cocktail } from './'
import Error from '@/_utils/Error'

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/exemple" element={<ExemplePage />} />
            <Route path="cocktail">
                <Route path="show/:uid" element={<Cocktail />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default PublicRouter;