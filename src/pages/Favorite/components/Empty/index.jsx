import style from './empty.module.scss';
import { useNavigate } from 'react-router-dom';

const Empty = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={style.emptyWrap}>
      <h2 className={style.emptyTitle}>
        Пусто! <span className={style.emptySmile}>😔</span>
      </h2>
      <p className={style.emptyTitleText}>Скорее добавте желаемый товар!</p>
      <button onClick={handelClick} className={['btn-reset', style.emptyBtn].join(' ')}>
        К Каталогу
      </button>
    </div>
  );
};

export default Empty;
