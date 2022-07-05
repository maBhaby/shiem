import ButtonLink from '../../../../components/Button/ButtonLink';
import style from './SaleMobile.module.scss';

const SaleMobile = () => {
  return (
    <section className={style.SaleMobile}>
      <img
        height={200}
        width={1460}
        src={require('../../../../assets/img/SaleMobile/banner.png')}
        alt="asdasd"
      />
      <div className={style.SaleMobileWrap}>
        <h2 className={style.SaleMobileTitle}>Скидка 10% на первый заказ в приложении</h2>
        <ButtonLink title={'Подробнее'}></ButtonLink>
      </div>
    </section>
  );
};

export default SaleMobile;
