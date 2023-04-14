import style from './style.module.scss';
import { Link } from 'react-router-dom';

const ButtonLink = ({ title, ...props }) => {
  return (
    <Link to={'catalog'} href="#a" className={['link-reset', style.btnWhite].join(' ')}>
      {title}
    </Link>
  );
};

export default ButtonLink;
