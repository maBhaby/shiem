import React from 'react';
import style from './style.module.scss';

function ButtonAdd({ title, typeBtn, active = false, handelClick }) {
  return (
    <button
      onClick={handelClick}
      type={typeBtn}
      className={['btn-reset', style.btnAdd, active && style.btnAddActive].join(' ')}>
      {title}
    </button>
  );
}

export default ButtonAdd;
