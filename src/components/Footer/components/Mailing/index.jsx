import style from './mailing.module.scss';

function Mailing() {
  return (
    <section className={style.mailing}>
      <h2 className="visually-hidden ">Рассылка</h2>
      <h3 className={style.mailingTitle}>Подпишитесь на рассылку, чтобы быть в курсе</h3>
      <form action="/asd/"></form>
    </section>
  );
}

export default Mailing;
