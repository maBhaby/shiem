import { useState } from 'react';

import style from './product.module.scss';
import ButtonLike from '../../../../components/Button/ButtonLike';

const Product = ({ item }) => {
  const [sale, setSale] = useState(false);

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
              <p className={sale && style.line}>
                от {el.price} руб.
                {el.salePrice ? (
                  <span className={style.productSale}>от {el.salePrice} руб.</span>
                ) : null}
              </p>
              <figcaption>{el.title}</figcaption>
            </figure>
            <ButtonLike />
          </li>
        );
      })}
    </ul>
  );
};

export default Product;
