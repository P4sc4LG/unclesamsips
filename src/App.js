import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Accueil, ExemplePage } from './pages/'
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/exemple" element={<ExemplePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
