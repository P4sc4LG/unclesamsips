import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Accueil, ExemplePage } from './pages/'
import Layout from './pages/Layout';
import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthRouter from '@/pages/Admin/Auth/AuthRouter';
import AuthGuard from '@/_helpers/AuthGuard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/exemple" element={<ExemplePage />} />

            <Route path='/admin/*' element={
              <AuthGuard>
                <AdminRouter />
              </AuthGuard>
            } />
            <Route path='/auth/*' element={<AuthRouter />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
