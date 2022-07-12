import { useEffect, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import style from '../input.module.scss';

const Castom = ({ labelName, ...props }) => {
  const [activeLabelName, setActiveLabelName] = useState(false);
  const [field, meta] = useField(props);

  useEffect(() => {
    setActiveLabelName(true);
  }, [labelName]);

  return (
    <label>
      <p className={style.inputName}>
        {labelName}
        <span className={style.inputNameRequaer}>*</span>
      </p>
      <div className={style.inputWrap}>
        <input
          className={[style.input, meta.error && meta.touched && style.inputError].join(' ')}
          id={field.name}
          {...props}
          {...field}
        />
        <ErrorMessage
          component={'div'}
          name={field.name}
          className={style.inputErrorMessage}></ErrorMessage>
      </div>
    </label>
  );
};

export default Castom;
