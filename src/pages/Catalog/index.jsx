import { ref, onValue } from 'firebase/database';
import { realTimeDB } from '../../firebase';
import { useEffect, useState } from 'react';

import style from './catalog.module.scss';
import Acardion from './components/Acardion';
import BreadCrumbs from '../../components/BreadСrumbs';
import Product from './components/Product';
import Circle from '../../components/Loading/Circle';
import { Selector } from '../../components/Selector';

const Catalog = () => {
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

  useEffect(() => {
    setLoading(true);
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
    <div className="container">
      <BreadCrumbs way={['Главная', 'Женщины ', 'Платья и сарафаны']} />
      <div className={style.catalogContainer}>
        <Acardion renderProductCard={renderProductCard} />
        <div className={style.catalogRightWrap}>
          <h2 className={style.catalogTitle}>Женская одежда</h2>
          <div className={style.catalogWrapSelector}>
            {select.map((el, i) => (
              <Selector key={i} title={el.title} listMenu={el.sort}></Selector>
            ))}
          </div>
          <Product item={product}></Product>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
