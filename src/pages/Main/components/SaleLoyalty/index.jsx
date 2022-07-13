import ButtonLink from '../../../../components/Button/ButtonLink';
import style from './SaleLoyalty.module.scss';

const SaleLoyalty = () => {
  return (
    <section className={style.SaleLoyalty}>
      <img
        height={200}
        width={1460}
        src={require('../../../../assets/img/SaleLoyalty/banner.jpg')}
        alt="asdasd"
      />
      <div className={style.SaleLoyaltyWrap}>
        <h2 className={style.SaleLoyaltyTitle}>
          Cкидка 20% для новых участников программы лояльности
        </h2>
        <ButtonLink link={'catalog'} title={'Подробнее'}></ButtonLink>
      </div>
    </section>
  );
};

export default SaleLoyalty;
