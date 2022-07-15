import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import style from './mailing.module.scss';
import Castom from '../../../Input/Castom';

function Mailing() {
  const [message, setMessage] = useState('Подпишитесь на рассылку, чтобы быть в курсе');

  const validate = Yup.object({
    email: Yup.string().email('Не правильная почта'),
  });

  const checkError = (formik) => {
    if (Object.keys(formik.errors).length === 0 && formik.values.email !== '') {
      setMessage('Успешно, ждите новостей');
      setTimeout(() => {
        setMessage('Подпишитесь на рассылку, чтобы быть в курсе');
      }, 3000);
    }
  };
  return (
    <section className={style.mailing}>
      <h2 className="visually-hidden ">Рассылка</h2>
      <h3 className={style.mailingTitle}>{message}</h3>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={validate}>
        {(formik) => (
          <Form>
            <div className={style.mailingWrap}>
              <Castom type={'text'} name={'email'} placeholder={'E-mail'} />
              <button
                onClick={() => checkError(formik)}
                className={['btn-reset', style.mailingBtn].join(' ')}
                type="button">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 13L20 7M20 7L14 1M20 7H1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p className={style.mailingText}>
        Нажимая кнопку «Подписаться», вы соглашаетесь с Политикой конфиденциальности и получением
        информации о товарах на электронную почту.
      </p>
    </section>
  );
}

export default Mailing;
