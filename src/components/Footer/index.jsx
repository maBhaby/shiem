import style from './footer.module.scss';
import List from './components/List';
import Mailing from './components/Mailing';
import ForMobile from './components/ForMobile';
import logo from '../../assets/img/Header/Logo.svg';

const Footer = () => {
  const catalog = [
    { title: 'Женщины' },
    { title: 'Мужчины' },
    { title: ' Бренды' },
    { title: 'Новинки' },
    { title: 'SALE' },
  ];
  const company = [{ title: 'Доставка и оплата' }, { title: 'Магазины' }, { title: 'Помощь' }];
  const sviaz = [{ title: '8 (800) 511-38-51' }, { title: 'sew@mail.ru' }];
  const social = [
    { title: 'Вконтакте' },
    { title: 'Instagram' },
    { title: 'Facebook' },
    { title: 'Youtube' },
  ];
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerWrapTop}>
          <img width={141} height={48} src={logo} alt="logo" />
          <List title={'Каталог'} item={catalog}></List>
          <List title={'Компании'} item={company}></List>
          <List title={'Связаться с нами'} item={sviaz}></List>
          <List title={'Соц. Сети'} item={social}></List>
          <Mailing></Mailing>
          <ForMobile></ForMobile>
        </div>
        <ul className={style.footerWrapBottom}>
          <li>© Магазин одежды ШЬЁМ! 2021 </li>
          <li className={style.footerWrapBottomLine}>Политикой конфиденциальности</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
