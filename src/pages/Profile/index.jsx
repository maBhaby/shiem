import React, { useEffect, useCallback } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import style from './profile.module.scss';

const Profile = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('first');
        navigate('/');
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="container">
      <h1 className="visually-hidden">Личный кабинет</h1>
      <div className={style.profileWrap}></div>
      <button onClick={handelClick}>выйти из профиля</button>
    </div>
  );
};

export default Profile;
