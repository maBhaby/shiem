import { getDatabase, ref, onValue } from 'firebase/database';

import style from './catalog.module.scss';
import Acardion from './components/Acardion';
import BreadCrumbs from '../../components/BreadСrumbs';
import Product from './components/Product';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const starCountRef = ref(database, 'catalog/poster/');
    onValue(starCountRef, (snapshot) => {
      setProduct(snapshot.val());
      console.log(product);
    });
  }, []);

  return (
    <>
      <div className="container">
        <BreadCrumbs />
        <div className={style.catalogContainer}>
          <Acardion />
          <div className={style.catalogRightWrap}>
            <h1 className={style.catalogTitle}>Женская одежда</h1>
            <Product item={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
