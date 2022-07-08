import style from './tabs.module.scss';

const Tabs = () => {
  return (
    <ul className={style.tabsList}>
      <li className={style.tabsItem}>
        <button className={['btn-reset', style.tabsBtn, style.tabsBtnActive].join(' ')}>
          E-mail
        </button>
      </li>
      <li className={style.tabsItem}>
        <button className={['btn-reset', style.tabsBtn].join(' ')}>Телефон</button>
      </li>
    </ul>
  );
};

export default Tabs;
