import ButtonLink from '../../../../components/Button/ButtonLink';
import style from './SaleOnHlopk.module.scss';

const SaleOnHlopk = () => {
  return (
    <section className={style.SaleOnHlopk}>
      <img
        height={650}
        width={1460}
        src={require('../../../../assets/img/SaleOnH/banner.jpg')}
        alt="asdasd"
      />
      <div className={style.SaleOnHlopkWrap}>
        <h2 className={style.SaleOnHlopkTitle}>Скидки на пошив из хлопка</h2>
        <ButtonLink title={'Выбрать и купить'}></ButtonLink>
      </div>
    </section>
  );
};

export default SaleOnHlopk;
