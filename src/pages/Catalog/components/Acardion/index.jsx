import { useState } from 'react';
import style from './acardion.module.scss';

const Acardion = ({ renderProductCard }) => {
  const [activeItem, setActiveItem] = useState(0);

  const openAcardion = (e) => {
    setActiveItem(Number(e.target.getAttribute('data-index')));
  };

  return (
    <ul className={style.acardion}>
      <li className={style.acardionItem}>
        <h3 data-index="0" onClick={openAcardion} className={style.acardionTitle}>
          Одежда
        </h3>
        {activeItem === 0 ? (
          <ul className={style.acardionList}>
            <li className={style.acardionListItem}>
              <button
                onClick={() => renderProductCard('clothes/dressesAndSundresses')}
                className={['btn-reset', style.acardionBtnSort].join(' ')}>
                Платья и сарафаны
              </button>
            </li>
            <li className={style.acardionListItem}>
              <button
                onClick={() => renderProductCard('clothes/jeans')}
                className={['btn-reset', style.acardionBtnSort].join(' ')}>
                Джинсы
              </button>
            </li>
            <li className={style.acardionListItem}>
              <button
                onClick={() => renderProductCard('clothes/shirts')}
                className={['btn-reset', style.acardionBtnSort].join(' ')}>
                Рубахи
              </button>
            </li>
          </ul>
        ) : null}
      </li>
      <li className={style.acardionItem}>
        <h3 onClick={openAcardion} data-index="1" className={style.acardionTitle}>
          Аксессуары
        </h3>
        {activeItem === 1 ? (
          <ul className={style.acardionList}>
            <li className={style.acardionListItem}>
              <button className={['btn-reset', style.acardionBtnSort].join(' ')}>Очки</button>
            </li>
            <li className={style.acardionListItem}>
              <button className={['btn-reset', style.acardionBtnSort].join(' ')}>Браслеты</button>
            </li>
            <li className={style.acardionListItem}>
              <button className={['btn-reset', style.acardionBtnSort].join(' ')}>Колготки</button>
            </li>
          </ul>
        ) : null}
      </li>
    </ul>
  );
};

export default Acardion;
