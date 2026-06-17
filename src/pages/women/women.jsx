import asideimg from '@/assets/img/women/womenaside.jpg'
import Arrival from '@/components/arrival';
import OfferSection from '@/components/OfferSection';
import Womenheader from '@/components/heroBanner';
import Products from '@/components/products';
import Brands from '@/components/brand';
import hero_image from '@/assets/img/women/women_header.png'

function Women() {
  return (
    <>
      <Womenheader 
      hidden={true}
      header_bg={hero_image}
              subtitle="Women"
              highlight1="Collection"
              year="2026"
              title="Where Passion meet"
              highlight2="Elegance"
              justlint="The Scent of Unforgettable Moments."
      />
      <OfferSection />
      <Products 
      gender="women"
      />
      <Brands />
      <Arrival
        secname="Summer Collections"
        sectag="Discover Our Summer Fragrances"
        imgtitle="Summer Collections"
        asideimg={asideimg}
      />
    </>
  );
}

export default Women;