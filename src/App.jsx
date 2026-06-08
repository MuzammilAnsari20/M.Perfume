import asideimg from './assets/img/arrival.png'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HeroBanner from './components/heroBanner';
import Offersection from './components/OfferSection';
import ShopCategory from './components/shopCategory';
import Explore from './components/explore';
import Arrival from './components/arrival';
import Men from './pages/Man/men'
import Fragnance from './components/Fragnance';
import OfferSSection from './components/OfferSSection';
import Brands from './components/brand';
import Review from './components/review';
import Blog from './components/blog';
import SingleProduct from './components/singleProduct';
import Women from './pages/women/women';
import Contact from './pages/Contact/contact';
import MainLayout from './mainlayout';

import Dashboard from './AdminLayout/pages/dashboard';
import AdminLayout from './AdminLayout/admlayout';
import Message from './AdminLayout/pages/messages';



function App() {
  return (
    <>
      <HashRouter>

        <Routes>
          <Route path="/" element={
            <MainLayout>

              <HeroBanner />
              <Offersection />
              <ShopCategory />
              <Explore />
              <Arrival
                secname="Summer Collection"
                sectag="Discover Our Summer Fragrances"
                imgtitle="Summer Collection"
                asideimg={asideimg} />
              <Fragnance />
              <OfferSSection />
              <Brands />
              <Review />
              <Blog />

            </MainLayout>}
          />

          <Route path="/men" element={<MainLayout><Men /></MainLayout>} />
          <Route path="/women" element={<MainLayout><Women /></MainLayout>} />
          <Route path="/singleproduct" element={<MainLayout><SingleProduct /></MainLayout>} />
          <Route path="/contact-me" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/about" element={<MainLayout><h1>About</h1></MainLayout>} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="/admin/Message" element={<Message />} />
            <Route path="/admin/settings" element={<h1>Settings Page</h1>} />
          </Route>
        </Routes>




      </HashRouter>
    </>
  )
}

export default App
{/* <Marquee pauseOnHover loop={0} speed={40} className="w-[90%]! max-md:w-full! max-md:px-[15px]! mask-l-from-50% mask-r-from-50% pl-[10%]!">
                <div className="mt-[30px]! max-md:mt-0! w-full max-md:w-[360px] max-md:px-[15px]! flex justify-center items-center gap-[50px] max-md:gap-[10px] desktop-md:gap-[100px] pr-[50px]! desktop-md:pr-[100px]!">
                {ShopCategoryData.map((i) => (

                    <motion.div className="w-[190px] flex items-center justify-center flex-col gap-[10px] overflow-hidden desktop-md:w-[230px]" variants={childVariants}>
                        
                        <div className="w-full max-md:w-[60px] rounded-full aspect-square overflow-hidden ">

                            <img className="w-full h-full object-cover" src={i.src} alt="sh1" />

                        </div>

                        <h5 className="desktop-md:text-[24px]">{i.name}</h5>
                    </motion.div>

                ))}
                </div>

                </Marquee> */}