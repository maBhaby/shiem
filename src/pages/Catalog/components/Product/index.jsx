import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { auth } from '../../../../firebase';

import style from './product.module.scss';
import ButtonLike from '../../../../components/Button/ButtonLike';

const Product = ({ item }) => {
  const [sale, setSale] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const addToFavorite = (el) => {
    setFavorite(!favorite);
    console.log(el);
    const userAuthId = auth.currentUser.uid;
    console.log(userAuthId);
  };
  return (
    <ul className={style.productList}>
      {item.map((el) => {
        return (
          <li key={el.id} className={style.productItem}>
            <figure>
              <img
                height={560}
                src={require('../../../../assets/img/Product/baba.jpg')}
                alt="clother"
              />
              <p className={style.line}>
                от {el.price} руб.
                {el.salePrice ? (
                  <span className={style.productSale}>от {el.salePrice} руб.</span>
                ) : null}
              </p>
              <figcaption>{el.title}</figcaption>
            </figure>
            <ButtonLike favorite={favorite} handelClick={() => addToFavorite(el)} />
          </li>
        );
      })}
    </ul>
  );
};

export default Product;
