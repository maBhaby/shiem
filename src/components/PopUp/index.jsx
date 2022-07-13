import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';

import SingUp from './components/SingUp';
import Register from './components/Register';
import ButtonAdd from '../Button/ButtonAdd';
import style from './popup.module.scss';
import { SocialReg } from '../SocialRegButton';

const Popup = ({ setActivePopUp }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const googleReg = () => {
    const provider = new GoogleAuthProvider();
    console.log(provider);
    console.log(auth);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const renderError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const clickRegist = () => {
    setShowRegister(!showRegister);
  };
  const closePopUp = () => {
    setActivePopUp(false);
  };

  return (
    <div className={style.poupUp}>
      <div className={style.poupUpWrap}>
        <button onClick={closePopUp} className={['btn-reset', style.poupUpBtnClose].join(' ')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L20 20" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20L20 4" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {showRegister ? (
          <Register errorMessage={errorMessage} renderError={renderError} closePopUp={closePopUp} />
        ) : (
          <SingUp renderError={renderError} errorMessage={errorMessage} closePopUp={closePopUp} />
        )}
        <div style={{ marginTop: '20px' }}>
          <ButtonAdd
            handelClick={clickRegist}
            typeBtn={'button'}
            title={showRegister ? 'Войти' : 'Зарегестрироваться '}
          />
        </div>
        {showRegister ? null : (
          <>
            <p className={style.poupUpDescription}>Войти через соц.сети</p>
            <div className={style.poupUpSocialWrap}>
              <SocialReg handelClick={googleReg} title={'Google'} />
              <SocialReg title={'Facebook'} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
