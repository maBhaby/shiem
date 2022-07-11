import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Tabs from '../../../Tabs';
import Сastom from '../../../Input/Castom';
import Password from '../../../Input/Password';
import ButtonAdd from '../../../Button/ButtonAdd';
import style from './SingUp.module.scss';

const SingUp = ({ closePopUp }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 5) {
      errors.password = 'мало';
    }

    return errors;
  };

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
    validate,
  });

  return (
    <>
      <h2 className="visually-hidden">Окно авторизации</h2>
      <h3 className={style.singUpTitle}>Войти</h3>
      <Tabs />
      <form onSubmit={formik.handleSubmit}>
        <Сastom
          labelName={'E-mail'}
          type={'email'}
          inputName={'email'}
          handelChange={formik.handleChange}
          value={formik.values.email}
          errorMessage={formik.errors.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <Password
          labelName={'Пароль'}
          inputName={'password'}
          handelChange={formik.handleChange}
          value={formik.values.password}
          errorMessage={formik.errors.password ? formik.errors.password : null}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button className={['btn-reset', style.singUpBtn].join(' ')}>Забыли пароль?</button>
        <div className={style.singUpBtnWrap}>
          <ButtonAdd
            handelClick={() => handelLogin(formik.values.email, formik.values.password)}
            active={true}
            typeBtn={'submit'}
            title={'Войти'}
          />
        </div>
      </form>
    </>
  );
};

export default SingUp;
