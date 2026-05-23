import { Link } from 'react-router-dom';
import products from '../../../data/product';
import usePagination from '../../../hooks/usePagination';

function Products(){
    const womenProducts = products.filter((p) => p.gender === 'women');

    const { currentItems, currentPage, totalPages, goToPage, goNext, goPrev } = usePagination(womenProducts, 4);
    return(
        <>
        <div className="w-full px-[60px]! ">
            <div className="text">
                <h6 className="gsp-text">Women</h6>
                <h5 className="gsp-text">Premium Perfume  Collection</h5>
            </div>

             {/* Cards Grid */}
        <div className="w-full h-auto mt-8! p-10! grid justify-items-center grid-cols-4 gap-10">
          {currentItems.map((product) => (
            <Link to="/" className="no-underline" key={product.id}>
              <div className="w-60 h-[65vh] rounded-[10px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-400">
                <div
                  className="w-full h-70 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.img})` }}
                ></div>
                <div className="p-5!">
                  <h6 className="text-[12px] text-gray-500 text-center">{product.tag}</h6>
                  <h5 className="text-lg font-bold text-center">{product.name}</h5>
                  <h5 className="text-[12px] font-bold text-center">{product.price}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-6 mb-10">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded border text-sm font-medium"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={`w-9 h-9 rounded border text-sm font-medium transition-colors
                ${currentPage === num
                  ? 'text-white border-white'
                  : 'border-gray-100 bg-white text-black hover:bg-gray-100'
                }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className="w-9 h-9 rounded border text-sm font-medium"
          >
            ›
          </button>
        </div>

        </div>
        </>
    );
}
export default Products;