import style from './personaldata.module.scss';

const PersonalData = ({ userDate }) => {
  const { city, email, gender, lastName, userName } = userDate;

  console.log(userDate);
  return (
    <div>
      <h2>Персональные данные</h2>
      <span>Учётные данные</span>
      <ul>
        <li>
          <h3>Имя</h3>
          <p>{userName}</p>
        </li>
        <li>
          <h3>Фамилия</h3>
          <p>{lastName}</p>
        </li>
        <li>
          <h3>E-mail</h3>
          <p>{email}</p>
        </li>
        <li>
          <h3>Город</h3>
          <p>{city}</p>
        </li>
        <li>
          <h3>Гендер</h3>
          <p>{gender}</p>
        </li>
      </ul>
    </div>
  );
};

export default PersonalData;
