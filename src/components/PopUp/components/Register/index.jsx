import { useFormik } from 'formik';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase';

import Castom from '../../../Input/Castom';
import Password from '../../../Input/Password';
import ButtonAdd from '../../../Button/ButtonAdd';
import style from '../../popup.module.scss';
import Radio from '../../../Input/Radio';

const Register = () => {
  const writeToStore = async (userId, email, lastName, city, userName) => {
    console.log(city, lastName, email, userId, userName);

    const docRef = await addDoc(collection(db, 'users'), {
      id: userId,
      email: email,
      lastName: lastName,
      city: city,
      userName: userName,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((e) => {
        console.error('Error adding document: ', e);
      });
  };

  const handelClickRegister = (email, password, city, lastName, userName) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        writeToStore(userCredential.user.uid, email, lastName, city, userName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      lastName: '',
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
          inputName={'lastName'}
          handelChange={formik.handleChange}
          value={formik.values.lastName}
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
          handelClick={() =>
            handelClickRegister(
              formik.values.email,
              formik.values.password,
              formik.values.city,
              formik.values.lastName,
              formik.values.userName,
            )
          }
          active={true}
          typeBtn={'submit'}
          title={'Зарегестрироваться'}
        />
      </form>
    </>
  );
};

export default Register;
