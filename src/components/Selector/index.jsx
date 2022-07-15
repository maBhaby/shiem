import { useState } from 'react';

import style from './selector.module.scss';

export const Selector = ({ listMenu, title }) => {
  const [activeSelector, setActiveSelector] = useState(false);
  const [value, setValue] = useState('');

  const onClickSelector = (e) => {
    setActiveSelector(!activeSelector);
  };

  const onClickValue = (e) => {
    setValue(e.target.innerText);
  };

  return (
    <div onClick={onClickSelector} className={style.selector}>
      <div className={style.selectorLabel}>
        <span>{value === '' ? title : value}</span>
        {activeSelector ? (
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      {activeSelector && (
        <ul className={style.selectorList}>
          {listMenu.map((el, index) => (
            <li
              onClick={onClickValue}
              className={style.selectorItem}
              key={index}
              data-index={index}>
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
