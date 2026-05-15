import asideimg from './assets/img/arrival.png'
import { HashRouter , Routes, Route } from 'react-router-dom'
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

            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<Dashboard />} />
              
              <Route path="/admin/products" element={<h1>Product Page</h1>} />
              <Route path="/admin/settings" element={<h1>Settings Page</h1>} />
          </Route>
        </Routes>

        


      </HashRouter>
    </>
  )
}

export default App
