import style from './radio.module.scss';

const Radio = ({ title, radioName, id }) => {
  return (
    <label htmlFor={id} className={style.radio}>
      <input className="visually-hidden" type="radio" id={id} name={radioName} />
      <div className={style.radioCircle}></div>
      {title}
    </label>
  );
};

export default Radio;
