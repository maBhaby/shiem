import { useState } from 'react';

import HeaderBottom from './HeaderBottom';
import HederTop from './HeaderTop';
import style from './header.module.scss';
import Popup from '../PopUp';

const Header = () => {
  const [activePopUp, setActivePopUp] = useState(false);

  return (
    <header className={style.header}>
      {activePopUp && <Popup setActivePopUp={setActivePopUp} />}
      <HederTop />
      <HeaderBottom activePopUp={activePopUp} setActivePopUp={setActivePopUp} />
    </header>
  );
};

export default Header;
