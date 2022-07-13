import { ref, onValue } from 'firebase/database';
import { realTimeDB } from '../../firebase';
import { useEffect, useState } from 'react';

import style from './catalog.module.scss';
import Acardion from './components/Acardion';
import BreadCrumbs from '../../components/BreadСrumbs';
import Product from './components/Product';
import Circle from '../../components/Loading/Circle';

const Catalog = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [linkDB, setLinkDB] = useState('clothes/dressesAndSundresses/');

  useEffect(() => {
    setLoading(true);
    const starCountRef = ref(realTimeDB, `catalog/${linkDB}`);
    onValue(starCountRef, (product) => {
      console.log(product.val());
      setProduct(product.val());
      setLoading(false);
    });
  }, [linkDB]);

  const renderProductCard = (link) => {
    setLinkDB(link);
  };

  return loading ? (
    <Circle></Circle>
  ) : (
    <div className="container">
      <BreadCrumbs />
      <div className={style.catalogContainer}>
        <Acardion renderProductCard={renderProductCard} />
        <div className={style.catalogRightWrap}>
          <h2>Женская одежда</h2>
          <Product item={product}></Product>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
