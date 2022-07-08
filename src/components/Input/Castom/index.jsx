import React from 'react';
import style from '../input.module.scss';

const Castom = ({ value, inputName, type, handelChange, labelName }) => {
  return (
    <label>
      <span className={style.inputName}>{labelName}</span>
      <input
        className={[style.input]}
        type={type}
        onChange={handelChange}
        name={inputName}
        value={value}
      />
    </label>
  );
};

export default Castom;
