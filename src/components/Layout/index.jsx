import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import Main from '../../pages/Main';
import Favorite from '../../pages/Favorite/Favorite';
import NotFoundPage from '../../pages/NotFoundPage';
import Footer from '../Footer';
import Profile from '../../pages/Profile';
import Catalog from '../../pages/Catalog';

const Layout = () => {
  return (
    <>
      <Header />
      <h1 className="visually-hidden">магазин одежды</h1>
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="catalog" element={<Catalog />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
