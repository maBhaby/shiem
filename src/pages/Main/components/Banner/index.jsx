import style from './banner.module.scss';
import ButtonLink from '../../../../components/Button/ButtonLink';

const Banner = () => {
  return (
    <section className={style.banner}>
      <ul className={style.bannerList}>
        <li className={[style.bannerItem, 'banneItemBoxA'].join(' ')}>
          <a className={['link-reset']} href="#das">
            <img src={require('../../../../assets/img/banner/dama1.jpg')} alt="asdasd" />
            <div className={style.bannerWrapBtn}>
              <ButtonLink title={'Выбрать и купить'}></ButtonLink>
            </div>
            <h2 className={style.bannerTitle}>Индивидуальный пошив платьев</h2>
          </a>
        </li>
        <li className={[style.bannerItem, 'banneItemBoxB'].join(' ')}>
          <a className={['link-reset']} href="#das">
            <img src={require('../../../../assets/img/banner/2.jpg')} alt="asdasd" />
            <div className={style.bannerWrapBtn}>
              <ButtonLink title={'Выбрать и купить'}></ButtonLink>
            </div>
            <h2 className={style.bannerTitle}>Удобная и креативная обувь</h2>
          </a>
        </li>
        <li className={[style.bannerItem, 'banneItemBoxC'].join(' ')}>
          <a className={['link-reset']} href="#das">
            <img src={require('../../../../assets/img/banner/3.jpg')} alt="asdasd" />
            <div className={style.bannerWrapBtn}>
              <ButtonLink title={'Выбрать и купить'}></ButtonLink>
            </div>
            <h2 className={style.bannerTitle}>До -30% на одежду из льна</h2>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Banner;
