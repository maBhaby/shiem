import React, { useState } from 'react';
import style from '../input.module.scss';

const Castom = ({ value, inputName, type, handelChange, labelName, errorMessage }) => {
  return (
    <label className={style.inputWrap}>
      <span className={style.inputName}>{labelName}</span>
      <input
        className={[style.input, !!errorMessage && style.inputError].join(' ')}
        type={type}
        onChange={handelChange}
        name={inputName}
        value={value}
      />
    </label>
  );
};

export default Castom;
