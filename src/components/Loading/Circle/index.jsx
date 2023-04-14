import ContentLoader from 'react-content-loader';
import style from './animate.module.scss';

const Circle = (props) => {
  return (
    <div className={style.circleWrap}>
      <ContentLoader
        className={style.animate}
        speed={2}
        width={100}
        height={100}
        viewBox="0 0 100 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        animate={true}
        {...props}>
        <circle cx="30" cy="67" r="13" />
        <circle cx="51" cy="30" r="13" />
        <circle cx="74" cy="67" r="13" />
      </ContentLoader>
    </div>
  );
};

export default Circle;
