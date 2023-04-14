import appleBtn from '../../../../assets/img/ForMobile/applebtn.svg';
import androidBtn from '../../../../assets/img/ForMobile/androidBtn.svg';
import style from './formobile.module.scss';

function ForMobile() {
  return (
    <section>
      <h2 className={style.formobileTitle}>Для мобильных устройств</h2>
      <ul className={style.formobileList}>
        <li className={style.formobileItem}>
          <img width={159} src={appleBtn} alt="btn" />
        </li>
        <li className={style.formobileItem}>
          <img width={159} src={androidBtn} alt="btn" />
        </li>
      </ul>
    </section>
  );
}

export default ForMobile;
