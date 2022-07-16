import { useState } from 'react';

import Cart from './components/Card';
import BreadCrumbs from '../../components/BreadСrumbs';
import Empty from './components/Empty';
import style from './favorite.module.scss';

function Favorite() {
  const [favotiteProduct, setFavoriteProduct] = useState([
    {
      title: 'Топ на бретелях с драпировкой',
      price: 1199,
      imageUrl: 'http://risovach.ru/upload/2020/11/generator/gachi_256028357_orig_.jpg',
    },
    {
      title: 'Топ на бретелях с драпировкой',
      price: 1199,
      salePrice: 200,
      imageUrl: 'http://risovach.ru/upload/2020/11/generator/gachi_256028357_orig_.jpg',
    },
    {
      title: 'Топ на бретелях с драпировкой',
      price: 1199,
      imageUrl: 'http://risovach.ru/upload/2020/11/generator/gachi_256028357_orig_.jpg',
    },
  ]);

  return (
    <div className="container">
      <BreadCrumbs way={['Главная', 'Избранное']}></BreadCrumbs>
      {favotiteProduct.length !== 0 ? (
        <div style={{ maxWidth: '1205px' }} className="container">
          <h2 className={style.favoriteTitle}>Избранное</h2>
          <Cart cart={favotiteProduct}></Cart>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Favorite;
