import { useState } from 'react';

import style from './header.module.scss';

const HeaderTop = () => {
  const [activePopUp, setActivePopUp] = useState(false);
  const city = ['Воронеж', 'Иваново', 'Москва'];

  return (
    <div className={style.headerTop}>
      <div className="header__select-city">
        <span>Воронеж</span>
      </div>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navListItem}>
            <a className={[style.navListlink, 'link-reset'].join(' ')} href="#Доставка">
              Доставка и оплата
            </a>
          </li>
          <li>
            <a className={[style.navListlink, 'link-reset'].join(' ')} href="#Магазины">
              Магазины
            </a>
          </li>
          <li>
            <a className={[style.navListlink, 'link-reset'].join(' ')} href="#Помощь">
              Помощь
            </a>
          </li>
          <li>
            <a
              style={{ border: 'none', paddingRight: 0 }}
              className={[style.navListlink, 'link-reset'].join(' ')}
              href="tel:88005113851">
              8 (800) 511-38-51
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HeaderTop;
