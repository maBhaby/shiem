import { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';

import style from './profile.module.scss';
import Circle from '../../components/Loading/Circle';
import PersonalData from './components/PersonalData';
import ProfileMenu from './components/ProfileMenu';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userDate, setUserData] = useState({});
  const navigate = useNavigate();

  const checkUserData = async () => {
    const firebaseUserData = await getDocs(collection(db, 'users'));
    const auth = getAuth();
    const userAuthId = auth.currentUser;

    firebaseUserData.forEach((doc) => {
      const docUserData = doc.data();
      if (docUserData.id === userAuthId.uid) {
        console.log(docUserData, userAuthId.uid);
        setUserData((prev) => (prev = docUserData));
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    checkUserData();
  }, []);

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
    <>
      {loading ? (
        <Circle />
      ) : (
        <div className="container">
          <h1 className="visually-hidden">Личный кабинет</h1>
          <div className={style.profileWrap}>
            <ProfileMenu clickOnExit={handelClick} />
            <PersonalData userDate={userDate} />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
