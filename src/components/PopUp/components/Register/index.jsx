import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase';

import ButtonAdd from '../../../Button/ButtonAdd';
import Castom from '../../../Input/Castom';
import Password from '../../../Input/Password';
import style from './register.module.scss';

const Register = ({ closePopUp, renderError, errorMessage }) => {
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
        closePopUp();
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
      }}
      validationSchema={validate}>
      {(formik) => (
        <>
          {console.log(formik.values)}
          <h2 className="visually-hidden">Окно регистрации</h2>
          <h3 className={style.registerTitle}>
            {errorMessage !== '' ? errorMessage : 'Регистрация'}
          </h3>
          <Form>
            <Castom labelName={'Имя'} type={'text'} name={'userName'} />
            <Castom labelName={'Фамилия'} type={'text'} name={'lastName'} />
            <Castom labelName={'Город'} type={'text'} name={'city'} />
            <Castom labelName={'E-mail'} type={'text'} name={'email'} />
            <Password labelName={'Пароль'} type={'password'} name={'password'} />
            <Password labelName={'Потвердите пароль'} type={'password'} name={'repeatPassword'} />
            <div style={{ marginTop: '30px' }}>
              <ButtonAdd
                handelClick={() =>
                  formik.errors
                    ? renderError('Ошибка пользователя')
                    : handelClickRegister(
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
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default Register;
