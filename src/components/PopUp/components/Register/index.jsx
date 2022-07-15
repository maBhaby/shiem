import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { auth } from '../../../../firebase';

import ButtonAdd from '../../../Button/ButtonAdd';
import Castom from '../../../Input/Castom';
import Password from '../../../Input/Password';
import style from './register.module.scss';

const Register = ({ closePopUp, renderError, errorMessage }) => {
  const writeToStore = async (userId, email, lastName, city, userName, favorite) => {
    console.log(city, lastName, email, userId, userName, favorite);

    const docRef = await addDoc(collection(db, 'users'), {
      id: userId,
      email: email,
      lastName: lastName,
      city: city,
      userName: userName,
      favorite: favorite,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        closePopUp();
      })
      .catch((e) => {
        console.error('Error adding document: ', e);
      });
  };

  const handelClickRegister = (email, password, city, lastName, userName, favorite) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        writeToStore(userCredential.user.uid, email, lastName, city, userName, favorite);
      })
      .catch(() => {
        renderError('Ошибка сервера');
      });
  };

  const validate = Yup.object({
    userName: Yup.string().required('Обязательное поле'),
    lastName: Yup.string().required('Обязательное поле'),
    city: Yup.string().required('Обязательное поле'),
    email: Yup.string().required('Обязательное поле').email('Не правильная почта'),
    password: Yup.string().required('Обязательное поле').min(6, 'Слишком короткий'),
    repeatPassword: Yup.string()
      .required('Обязательное поле')
      .oneOf([Yup.ref('password'), null], 'Не совпадает'),
  });

  return (
    <Formik
      initialValues={{
        userName: '',
        lastName: '',
        city: '',
        email: '',
        password: '',
        repeatPassword: '',
        favorite: [],
      }}
      validationSchema={validate}>
      {(formik) => (
        <>
          <h2 className="visually-hidden">Окно регистрации</h2>
          <h3 className={style.registerTitle}>
            {errorMessage !== '' ? errorMessage : 'Регистрация'}
          </h3>
          <Form>
            <Castom required={true} labelName={'Имя'} type={'text'} name={'userName'} />
            <Castom required={true} labelName={'Фамилия'} type={'text'} name={'lastName'} />
            <Castom required={true} labelName={'Город'} type={'text'} name={'city'} />
            <Castom required={true} labelName={'E-mail'} type={'text'} name={'email'} />
            <Password labelName={'Пароль'} type={'password'} name={'password'} />
            <Password labelName={'Потвердите пароль'} type={'password'} name={'repeatPassword'} />
            <div style={{ marginTop: '30px' }}>
              <ButtonAdd
                handelClick={() =>
                  formik.errors.email ||
                  formik.errors.password ||
                  formik.errors.city ||
                  formik.errors.lastName ||
                  formik.errors.userName ||
                  formik.errors.repeatPassword
                    ? renderError('Ошибка пользователя')
                    : handelClickRegister(
                        formik.values.email,
                        formik.values.password,
                        formik.values.city,
                        formik.values.lastName,
                        formik.values.userName,
                        formik.values.favorite,
                      )
                }
                active={true}
                typeBtn={'submit'}
                title={'Зарегестрироваться'}
              />
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default Register;
