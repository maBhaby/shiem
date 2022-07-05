import HeaderBottom from './HeaderBottom';
import HederTop from './HeaderTop';
import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <HederTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
