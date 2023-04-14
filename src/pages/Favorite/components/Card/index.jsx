import style from './cart.module.scss';

const Cart = ({ cart }) => {
  return (
    <ul className={style.cart}>
      {cart.map((el, i) => {
        return (
          <li key={i}>
            <a className={['link-reset'].join(' ')} href="#droduct">
              <figure>
                <img
                  className={style.cartImg}
                  width={390}
                  height={560}
                  src={el.imageUrl}
                  alt="clother"
                />
                <p className={style.cartPrice}>от {el.salePrice ? el.salePrice : el.price} Руб.</p>
                <figcaption>{el.title}</figcaption>
              </figure>
            </a>
            <button className={['btn-reset', style.cartBtn].join(' ')}>Добавить в корзину</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
