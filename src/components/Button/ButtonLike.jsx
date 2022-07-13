import { useState } from 'react';

import style from './style.module.scss';

const ButtonLike = ({ handelClick, favorite }) => {
  return (
    <button href="#a" onClick={handelClick} className={['btn-reset', style.btnLike].join(' ')}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.95 1C3.21619 1 1 3.58251 1 6.7682C1 12.5364 6.85 17.7802 10 19C13.15 17.7802 19 12.5364 19 6.7682C19 3.58251 16.7838 1 14.05 1C12.3759 1 10.8958 1.96848 10 3.45088C9.10417 1.96848 7.62414 1 5.95 1Z"
          fill={favorite ? '#ff0000' : 'white'}
          stroke={favorite ? '#ff0000' : '#222222'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ButtonLike;
