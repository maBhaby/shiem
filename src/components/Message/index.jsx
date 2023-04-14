import { useState, useEffect } from 'react';
import style from './message.module.scss';

const Message = ({ title }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
    setTimeout(() => {
      setRender(false);
    }, 3000);
  });
  return (
    <div className={[style.message, render ? style.messageActive : ''].join(' ')}>
      <h3 className={style.messageTitle}>{title}</h3>
    </div>
  );
};

export default Message;
