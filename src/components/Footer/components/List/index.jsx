import style from './list.module.scss';

function List({ title, item }) {
  return (
    <section className={style.list}>
      <h2 className={style.listTitle}>{title}</h2>
      <ul>
        {item.map((el, i) => (
          <li key={i}>
            <a className={['link-reset', style.listLink].join(' ')} href="#asd">
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
