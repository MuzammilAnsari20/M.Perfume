import asideimg from '../../assets/img/women/womenaside.jpg'
import Arrival from '../../components/arrival';
import OfferSection from '../../components/OfferSection';
import Womenheader from './component/womenheader';
import Products from './component/products';
import Brands from '../../components/brand';
import Blog from '../../components/blog';

function Women() {
  return (
    <>
      <Womenheader />
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

export default Women;