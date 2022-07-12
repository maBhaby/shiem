import React, { useState } from 'react';
import { useField, ErrorMessage } from 'formik';

import style from '../input.module.scss';
import eyeClose from '../../../assets/img/Input/eyeclose.svg';
import eyeOpen from '../../../assets/img/Input/eyeopen.svg';

const Password = ({ labelName, ...props }) => {
  const [field, meta] = useField(props);
  const [showPass, setShowPass] = useState(false);

  const clickPass = () => {
    setShowPass(!showPass);
  };
  return (
    <label>
      <p className={style.inputName}>
        {labelName}
        <span className={style.inputNameRequaer}>*</span>
      </p>
      <div className={style.inputWrap}>
        <input
          className={[
            style.input,
            style.inputPassword,
            meta.error && meta.touched && style.inputError,
          ].join(' ')}
          {...field}
          {...props}
          type={showPass ? 'text' : props.type}
        />
        <button
          onClick={clickPass}
          type="button"
          className={['btn-reset', style.inputBtn].join(' ')}>
          <img src={showPass === false ? eyeClose : eyeOpen} alt="show" />
        </button>
        <ErrorMessage
          component={'div'}
          name={field.name}
          className={style.inputErrorMessage}></ErrorMessage>
      </div>
    </label>
  );
};

export default Password;
