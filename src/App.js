import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Public/Layout';
import AdminRouter from '@/pages/Admin/AdminRouter';
import PublicRouter from '@/pages/Public/PublicRouter';

import AuthRouter from '@/pages/Admin/Auth/AuthRouter';
import AuthGuard from '@/_helpers/AuthGuard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/*' element={<PublicRouter />} />
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
