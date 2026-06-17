import asideimg from '@/assets/img/Mens/m5.png'
import Arrival from '@/components/arrival';
import OfferSection from '@/components/OfferSection';
import Menheader from '@/components/heroBanner';
import Products from '@/pages/Man/component/products';
import Brands from '@/components/brand';
import hero_image from '@/assets/img/Mens/header.png'


function Men() {
  return (
    <>
      <Menheader 
      hidden={true}
      header_bg={hero_image}
              subtitle="Men"
              highlight1="Collection"
              year="2026"
              title="Where Passion meet"
              highlight2="Elegance"
              justlint="The Scent of Unforgettable Moments."
      />
      <OfferSection />
      <Products />
      <Brands />
      <Arrival
        secname="Summer Collection"
        sectag="Discover Our Summer Fragrances"
        imgtitle="Summer Collection"
        asideimg={asideimg}
      />
    </>
  );
}

export default Men;