import ButtonLink from '../../../../components/Button/ButtonLink';
import style from './linkcatalog.module.scss';

const LinkCatalog = () => {
  return (
    <section className={style.linkCatalog}>
      <div className={style.linkCatalogWrap}>
        <img
          height={650}
          width={720}
          src={require('../../../../assets/img/LinkCatalog/woman.jpg')}
          alt="woman"
        />
        <div className={style.btnWrap}>
          <ButtonLink title={'Перейти в каталог'} />
        </div>
        <h3 className={style.linkCatalogTitle}>Женщины</h3>
      </div>
      <div className={style.linkCatalogWrap}>
        <img
          height={650}
          width={720}
          src={require('../../../../assets/img/LinkCatalog/man.jpg')}
          alt="man"
        />
        <div className={style.btnWrap}>
          <ButtonLink link={'catalog'} title={'Перейти в каталог'} />
        </div>
        <h3 className={style.linkCatalogTitle}>Мужчины</h3>
      </div>
    </section>
  );
};

export default LinkCatalog;
