import style from './personaldata.module.scss';

const PersonalData = ({ userDate }) => {
  const { city, email, gender, lastName, userName } = userDate;

  console.log(userDate);
  return (
    <div className={style.personalData}>
      <h2 className={style.personalDataTitle}>Персональные данные</h2>
      <div className={style.personalDataWrap}>
        <span className={style.personalDataSubtitle}>Учётные данные</span>
        <ul className={style.personalDataList}>
          <li className={style.personalDataItem}>
            <h3 className={style.personalDataItemLogo}>Имя</h3>
            <p className={style.personalDataItemText}>{userName}</p>
          </li>
          <li className={style.personalDataItem}>
            <h3 className={style.personalDataItemLogo}>Фамилия</h3>
            <p className={style.personalDataItemText}>{lastName}</p>
          </li>
          <li className={style.personalDataItem}>
            <h3 className={style.personalDataItemLogo}>E-mail</h3>
            <p className={style.personalDataItemText}>{email}</p>
          </li>
          <li className={style.personalDataItem}>
            <h3 className={style.personalDataItemLogo}>Город</h3>
            <p className={style.personalDataItemText}>{city}</p>
          </li>
          <li className={style.personalDataItem}>
            <h3 className={style.personalDataItemLogo}>Гендер</h3>
            <p className={style.personalDataItemText}>{gender}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalData;
