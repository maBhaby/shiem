import { ref, onValue } from 'firebase/database';
import { realTimeDB } from '../../firebase';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';

import style from './catalog.module.scss';
import Acardion from './components/Acardion';
import BreadCrumbs from '../../components/BreadСrumbs';
import Product from './components/Product';
import Circle from '../../components/Loading/Circle';
import { Selector } from '../../components/Selector';

const Catalog = () => {
  const [authMessage, setAuthMessage] = useState('');
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [linkDB, setLinkDB] = useState('clothes/dressesAndSundresses/');

  const select = [
    { title: 'Сортировать', sort: ['убывание', 'не убывание'] },
    { title: 'Ткань', sort: ['Хорошая', 'Не очень'] },
    { title: 'Цвет', sort: ['Синий', 'Красный'] },
  ];

  const renderProductCard = (link) => {
    setLinkDB(link);
  };

  const renderAuthMessage = () => {
    if (!auth.currentUser) {
      setAuthMessage('Вы не сможете добавлять товары, авторизуйтесь ');
      setTimeout(() => {
        setAuthMessage('');
      }, 3000);
    }
  };

  useEffect(() => {
    setLoading(true);

    renderAuthMessage();

    const starCountRef = ref(realTimeDB, `catalog/${linkDB}`);
    onValue(starCountRef, (product) => {
      console.log(product.val());
      setProduct(product.val());
      setLoading(false);
    });
  }, [linkDB]);

  return loading ? (
    <Circle></Circle>
  ) : (
    <>
      <div className="container">
        <BreadCrumbs way={['Главная', 'Женщины ', 'Платья и сарафаны']} />
        <div className={style.catalogContainer}>
          <Acardion renderProductCard={renderProductCard} />
          <div className={style.catalogRightWrap}>
            <h2 className={style.catalogTitle}>
              {authMessage === '' ? 'Женская одежда' : authMessage}
            </h2>
            <div className={style.catalogWrapSelector}>
              {select.map((el, i) => (
                <Selector key={i} title={el.title} listMenu={el.sort}></Selector>
              ))}
            </div>
            <Product item={product}></Product>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
