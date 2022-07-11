import React from 'react';

const ProfileMenu = ({ clickOnExit }) => {
  return (
    <ul>
      <li>Персональные данные</li>
      <li>
        <button onClick={clickOnExit}>выйти из профиля</button>
      </li>
    </ul>
  );
};

export default ProfileMenu;
