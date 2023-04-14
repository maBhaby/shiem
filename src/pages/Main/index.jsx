import Banner from './components/Banner';
import SliderLoop from '../../components/Slider/SliderLoop';
import SaleOnHlopk from './components/SaleOnHlopk';
import SaleLoyalty from './components/SaleLoyalty';
import SliderClothes from '../../components/Slider/SliderСlothes';
import LinkCatalog from './components/LinkCatalog';
import SaleMobile from './components/SaleMobile';
import Advantages from './components/Advantages/Index';

const Main = () => {
  const actual = [
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Мужчины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
    { title: 'Пиджаки', subtitle: 'Женщины' },
  ];

  const brand = [
    { subtitle: 'The North Face' },
    { subtitle: 'Reebok' },
    { subtitle: 'Tommy Jeans' },
    { subtitle: 'Puma' },
    { subtitle: 'Adidas' },
    { subtitle: 'Jordan' },
    { subtitle: 'Nike' },
    { subtitle: 'Hurley' },
    { subtitle: 'Buff' },
    { subtitle: 'Levis' },
  ];

  return (
    <div className="container">
      <Banner></Banner>
      <SliderLoop title={'Актуальное'} slide={[...actual]}></SliderLoop>
      <SaleOnHlopk></SaleOnHlopk>
      <SaleLoyalty></SaleLoyalty>
      <SliderClothes></SliderClothes>
      <LinkCatalog></LinkCatalog>
      <SliderLoop title={'Бренды'} slide={[...brand]}></SliderLoop>
      <SaleMobile />
      <Advantages></Advantages>
    </div>
  );
};
export default Main;
