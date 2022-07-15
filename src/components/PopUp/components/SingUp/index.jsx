import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import ButtonAdd from '../../../Button/ButtonAdd';
import Tabs from '../../../Tabs';
import Castom from '../../../Input/Castom';
import Password from '../../../Input/Password';
import style from './SingUp.module.scss';

const SingUp = ({ closePopUp, renderError, errorMessage }) => {
  const handelLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('успех');
        closePopUp();
      })
      .catch((error) => {
        renderError('Ошибка сервера');
      });
  };

  const validate = Yup.object({
    email: Yup.string().required('Обязательное поле').email('Не правильная почта'),
    password: Yup.string().required('Обязательное поле').min(6, 'Слишком короткий'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}>
      {(formik) => (
        <>
          {console.log(formik.values)}
          <h2 className="visually-hidden">Окно авторизации</h2>
          <h3 className={style.singUpTitle}>{errorMessage !== '' ? errorMessage : 'Войти'}</h3>
          <Tabs />
          <Form>
            <Castom required={true} labelName={'E-mail'} type={'text'} name={'email'} />
            <Password labelName={'Пароль'} type={'password'} name={'password'} />
            <div style={{ marginTop: '30px' }}>
              <ButtonAdd
                handelClick={() =>
                  formik.errors.email || formik.errors.password
                    ? renderError('Ошибка пользователя')
                    : handelLogin(formik.values.email, formik.values.password)
                }
                active={true}
                typeBtn={'submit'}
                title={'Войти'}
              />
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default SingUp;
