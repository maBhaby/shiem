import { Fragment } from 'react';
import style from './banner.module.scss';
//import logo from '../../../../assets/img/banner/1.jpg';
const Banner = () => {
  return (
    <section className={style.banner}>
      <ul className={style.bannerList}>
        <li className={[style.bannerItem, 'banneItemBoxA'].join(' ')}>
          <a href="#das">
            <img src={require('../../../../assets/img/banner/dama1.jpg')} alt="asdasd" />
            <h2 className={style.bannerTitle}>Индивидуальный пошив платьев</h2>
          </a>
        </li>
        <li className={[style.bannerItem, 'banneItemBoxB'].join(' ')}>
          <a href="#das">
            <img src={require('../../../../assets/img/banner/2.jpg')} alt="asdasd" />
            <h2 className={style.bannerTitle}>Удобная и креативная обувь</h2>
          </a>
        </li>
        <li className={[style.bannerItem, 'banneItemBoxC'].join(' ')}>
          <a href="#das">
            <img src={require('../../../../assets/img/banner/3.jpg')} alt="asdasd" />
            <h2 className={style.bannerTitle}>До -30% на одежду из льна</h2>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Banner;
