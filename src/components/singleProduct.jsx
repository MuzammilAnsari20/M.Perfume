import { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/img/Mens/card1.jpg';
import img2 from '../assets/img/Mens/card2.jpg';
import img3 from '../assets/img/Mens/card3.jpg';
import img4 from '../assets/img/Mens/card4.webp';
import ProductTabs from './producttabs';
import RelatedProducts from './relatedproduct';

const images = [img1, img2, img3, img4];

function SingleProduct() {
  const [mainImg, setMainImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [zoom, setZoom] = useState({ show: false, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoom({ show: true, x, y });
  };

  const addToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
    <div className="w-full px-[60px]! py-12!">
      <div className="grid grid-cols-2 gap-16 items-start">

        {/* ========== LEFT — Gallery ========== */}
        <div className="flex flex-col gap-4">

          {/* Main Image + Zoom */}
          <div
            className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-100 cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoom({ ...zoom, show: false })}
          >
            <img
              src={images[mainImg]}
              alt="product"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Zoom Box */}
            {zoom.show && (
              <div className="absolute top-0 right-[-260px] w-[240px] h-[240px] rounded-lg overflow-hidden border border-gray-200 bg-white z-10">
                <img
                  src={images[mainImg]}
                  alt="zoom"
                  className="absolute w-[300%] h-[300%] object-cover pointer-events-none"
                  style={{
                    left: `${-zoom.x * 2 + 100}px`,
                    top: `${-zoom.y * 2 + 100}px`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImg(i)}
                className={`w-16 h-16 rounded-lg overflow-hidden border transition-all duration-200
                  ${mainImg === i ? 'border-black opacity-100' : 'border-gray-200 opacity-50 hover:opacity-80'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* ========== RIGHT — Details ========== */}
        <div className="flex flex-col gap-5 pt-2">


          {/* Name */}
          <h1 className="text-[22px] font-medium text-white leading-snug">
            Spiced Oud Perfume
          </h1>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <span className="text-white! text-sm">★★★★★</span>
            <span className="text-[13px] text-gray-400! ">4.8 (124 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-medium text-white!">$20.89</span>
            <span className="text-sm text-gray-400! line-through">$29.99</span>
            <span className="text-[12px] px-2! py-0.5! bg-red-50 text-red-500! rounded-full">30% off</span>
          </div>

          <hr className="border-gray-100" />

          {/* Description */}
          <p className="text-[14px] text-whiteleading-relaxed">
            A bold and exotic fragrance crafted from rare oud wood, warming spices, and a hint
            of smoky amber. Opens with spicy cardamom and cinnamon, evolving into a rich heart
            of oud and sandalwood, leaving a sensual trail of musk and vanilla.
          </p>

          <hr className="border-gray-100" />

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-[13px] text-gray-400!">Quantity</span>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-9 h-9 text-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <span className="w-9 text-center text-[14px] text-white! font-medium">{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="w-9 h-9 text-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
            <span className="text-[12px] text-green-500!">✓ In stock</span>
          </div>

          <div className='w-full flex flex-row justify-between align-middle'>
            {/* Add to Cart */}
            <button
              onClick={addToCart}
              className="w-fit px-16! py-3! rounded-lg text-[15px] font-medium transition-all duration-300 bg-purple-600! hover:bg-purple-800! cursor-pointer!"
          >
            Add to cart
          </button>

          <button
            onClick={addToCart}
            className="w-fit px-12.5! py-3! rounded-lg text-[15px] font-medium transition-all duration-300 border-2 border-white cursor-pointer!"
          >
            Add to Wishlist
          </button>
          </div>

            

          <hr className="border-gray-100" />

          {/* Meta Info */}
          <div className="flex flex-col gap-2">
            {[
              { key: 'Brand',  val: 'M.Perfume' },
              { key: 'Size',   val: '100ml / 3.4 fl oz' },
              { key: 'Gender', val: 'Men' },
              { key: 'SKU',    val: 'MP-OUD-002' },
            ].map(({ key, val }) => (
              <div key={key} className="flex gap-4 text-[13px]">
                <span className="text-gray-400! w-20">{key}</span>
                <span className="text-gray-600! font-bold ">{val}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    <ProductTabs />
    <RelatedProducts />
    </>
  );
}

export default SingleProduct;