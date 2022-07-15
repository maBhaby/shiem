import style from './breadcrumbs.module.scss';

const BreadCrumbs = ({ way }) => {
  return (
    <ul className={style.breadcrumbs}>
      {way.map((el, i, arr) => (
        <li
          className={`${style.breadcrumbsItem} ${
            arr.length - 1 === i ? style['breadcrumbsItemActive'] : ''
          }`}
          key={i}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
