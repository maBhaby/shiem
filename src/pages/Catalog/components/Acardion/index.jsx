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
          <span className={style.acardionTitleArrow}>
            {activeItem === 0 ? (
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 6L6 1L1 6"
                  stroke="#222222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1L6 6L1 1"
                  stroke="#222222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
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
          <span className={style.acardionTitleArrow}>
            {activeItem === 1 ? (
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 6L6 1L1 6"
                  stroke="#222222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1L6 6L1 1"
                  stroke="#222222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
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
