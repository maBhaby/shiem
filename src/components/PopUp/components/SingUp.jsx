import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../store/slice/userSlice';

import Tabs from '../../Tabs';
import Text from '../../Input/Castom';
import Password from '../../Input/Password';
import ButtonAdd from '../../Button/ButtonAdd';
import style from '../popup.module.scss';

const SingUp = ({ closePopUp }) => {
  const dispatch = useDispatch();
  console.log('sss');

  const handelLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(user);
        // console.log(
        //   dispatch(
        //     setUser({
        //       email: user.email,
        //       id: user.uid,
        //       token: user.accessToken,
        //     }),
        //   ),
        // );
        console.log('успех');
        closePopUp();
      })
      .catch((error) => {});
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {},
  });

  return (
    <>
      <h2 className="visually-hidden">Окно авторизации</h2>
      <h3 className={style.poupUpTitle}>Войти</h3>
      <Tabs />
      <form onSubmit={formik.handleSubmit}>
        <Text
          labelName={'E-mail'}
          type={'email'}
          inputName={'email'}
          handelChange={formik.handleChange}
          value={formik.values.email}
        />
        <Password
          labelName={'Пароль'}
          inputName={'password'}
          handelChange={formik.handleChange}
          value={formik.values.password}
        />
        <p className={style.title}>Забыли пароль?</p>
        <ButtonAdd
          handelClick={() => handelLogin(formik.values.email, formik.values.password)}
          active={true}
          typeBtn={'submit'}
          title={'Войти'}
        />
      </form>
    </>
  );
};

export default SingUp;
