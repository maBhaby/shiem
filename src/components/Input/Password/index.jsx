import React, { useState } from 'react';

import style from '../input.module.scss';
import eyeClose from '../../../assets/img/Input/eyeclose.svg';
import eyeOpen from '../../../assets/img/Input/eyeopen.svg';

const Password = ({ value, inputName, handelChange, labelName }) => {
  const [showPass, setShowPass] = useState(false);

  const clickPass = () => {
    setShowPass(!showPass);
  };
  return (
    <label>
      <span className={style.inputName}>{labelName}</span>
      <div className={style.inputWrap}>
        <input
          className={[style.input, style.inputPassword].join(' ')}
          type={showPass === false ? 'password' : 'text'}
          onChange={handelChange}
          name={inputName}
          value={value}
        />
        <button
          onClick={clickPass}
          type="button"
          className={['btn-reset', style.inputBtn].join(' ')}>
          <img src={showPass === false ? eyeClose : eyeOpen} alt="show" />
        </button>
      </div>
    </label>
  );
};

export default Password;
