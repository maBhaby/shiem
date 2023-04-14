import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

import logo from '../../assets/img/Header/Logo.svg';
import cart from '../../assets/img/Header/Cart.svg';
import favorite from '../../assets/img/Header/favorite.svg';
import search from '../../assets/img/Header/search.svg';
import userLogo from '../../assets/img/Header/user.svg';
import style from './header.module.scss';
import { useState, useEffect } from 'react';

const HeaderBottom = ({ setActivePopUp, activePopUp }) => {
  const [activeFavorite, setActiveFavorite] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  useEffect(() => {
    setActiveUser(!!auth.currentUser);
  }, [auth.currentUser]);

  const renderPopUp = () => {
    setActivePopUp(true);
  };

  const checkAuth = () => {
    activeUser ? setActiveFavorite(true) : setActivePopUp(true);
  };

  return (
    <div className={style.headerBottom}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className={style.headerBottomNavClother}>
        <ul className={[style.navList, style.navListBottom].join(' ')}>
          <li>
            <Link
              to="catalog"
              className={['link-reset', style.navListBottomItem].join(' ')}
              href="#sd">
              Женщины
            </Link>
          </li>
          <li>
            <Link
              to="catalog"
              className={['link-reset', style.navListBottomItem].join(' ')}
              href="#sd">
              Мужчины
            </Link>
          </li>
          <li>
            <a className={['link-reset', style.navListBottomItem].join(' ')} href="#sd">
              Бренды
            </a>
          </li>
          <li>
            <a className={['link-reset', style.navListBottomItem].join(' ')} href="#sd">
              Новинки
            </a>
          </li>
          <li>
            <a className={['link-reset', style.navListBottomSpec].join(' ')} href="#sd">
              SALE
            </a>
          </li>
        </ul>
      </nav>
      <nav className={style.headerBottomNavTools}>
        <ul className={[style.navList, style.navListBottom].join(' ')}>
          <li>
            <a className={['link-reset', style.navListBottomlink].join(' ')} href="#sd">
              <img width={20} height={20} src={search} alt="icon" />
              Поиск
            </a>
          </li>
          <li>
            {activeUser ? (
              <Link
                to={'/profile'}
                className={['link-reset', style.navListBottomlink].join(' ')}
                href="#sd">
                <img width={20} height={20} src={userLogo} alt="icon" />
                Профиль
              </Link>
            ) : (
              <a
                onClick={renderPopUp}
                className={['link-reset', style.navListBottomlink].join(' ')}
                href="#sd">
                <img width={20} height={20} src={userLogo} alt="icon" />
                Войти
              </a>
            )}
          </li>
          <li>
            <Link
              onClick={checkAuth}
              className={['link-reset', style.navListBottomlink].join(' ')}
              to={activeFavorite && '/favorite'}>
              <img width={18} height={18} src={favorite} alt="icon" />
              Избранное
            </Link>
          </li>
          <li>
            <a className={['link-reset', style.navListBottomlink].join(' ')} href="#sd">
              <img width={20} height={20} src={cart} alt="icon" />
              Корзина
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HeaderBottom;
