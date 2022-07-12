import style from './profilemenu.module.scss';

const ProfileMenu = ({ clickOnExit }) => {
  return (
    <ul className={style.profilemenuList}>
      <li className={style.profilemenuItem}>
        <button className={['btn-reset', style.profilemenuBtnActive].join(' ')}>
          Персональные данные
        </button>
      </li>
      <li className={style.profilemenuItem}>
        <button className={['btn-reset', style.profilemenuBtnExit].join(' ')} onClick={clickOnExit}>
          Выйти
        </button>
      </li>
    </ul>
  );
};

export default ProfileMenu;
