import style from './style.module.scss';

const ButtonLink = ({ title }) => {
  return (
    <a href="#a" className={['link-reset', style.btnWhite].join(' ')}>
      {title}
    </a>
  );
};

export default ButtonLink;
