import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Castom from '../../Input/Castom';
import Password from '../../Input/Password';
import ButtonAdd from '../../Button/ButtonAdd';
import style from '../popup.module.scss';
import Radio from '../../Input/Radio';

const Register = () => {
  const dispatch = useDispatch();

  const handelRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      userLastName: '',
      city: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h2 className="visually-hidden">Окно регистрации</h2>
      <h3 className={style.poupUpTitle}>Регистрация</h3>
      <form onSubmit={formik.handleSubmit}>
        <Castom
          labelName={'Имя'}
          type={'text'}
          inputName={'userName'}
          handelChange={formik.handleChange}
          value={formik.values.userName}
        />
        <Castom
          labelName={'Фамилия'}
          type={'text'}
          inputName={'userLastName'}
          handelChange={formik.handleChange}
          value={formik.values.userLastName}
        />
        <Castom
          labelName={'Город'}
          type={'text'}
          inputName={'city'}
          handelChange={formik.handleChange}
          value={formik.values.city}
        />
        <Castom
          labelName={'E-mail'}
          type={'email'}
          inputName={'email'}
          handelChange={formik.handleChange}
          value={formik.values.email}
        />
        <Radio title={'Мужской'} id="radioMan" radioName={'gender'}></Radio>
        <Radio title={'Женский'} id="radioWoman" radioName={'gender'}></Radio>
        <Password
          labelName={'Пароль'}
          inputName={'password'}
          handelChange={formik.handleChange}
          value={formik.values.password}
        />
        <ButtonAdd
          handelClick={() => handelRegister(formik.values.email, formik.values.password)}
          active={true}
          typeBtn={'submit'}
          title={'Зарегестрироваться'}
        />
      </form>
    </>
  );
};

export default Register;
