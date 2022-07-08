import React, { useEffect, useCallback } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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

  return <button onClick={handelClick}>выйти из профиля</button>;
};

export default Profile;
