import asideimg from '../../assets/img/Mens/m5.png'
import Arrival from '../../components/arrival';
import OfferSection from '../../components/OfferSection';
import Menheader from './component/menheader';
import Products from './component/products';
import Brands from '../../components/brand';
import Blog from '../../components/blog';

function Men() {
  return (
    <>
      <Menheader />
      <OfferSection />
      <Products />
      <Brands />
      <Arrival
        secname="Summer Collection"
        sectag="Discover Our Summer Fragrances"
        imgtitle="Summer Collection"
        asideimg={asideimg}
      />
      <Blog />
    </>
  );
}

export default Men;