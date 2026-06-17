import { Link } from 'react-router-dom';
import products from '../data/product';
import usePagination from '../hooks/usePagination';
import Title from '@/components/sectionTitle';

function Products({ gender }) {
  const filteredProducts = products.filter(
    (p) => p.gender === gender
  );

  const { currentItems, currentPage, totalPages, goToPage, goNext, goPrev } =
    usePagination(filteredProducts, 4);

  const genderLabel = gender.charAt(0).toUpperCase() + gender.slice(1);

  return (
    <>
      <div className="w-full px-4! md:px-[60px]!">
        <Title
          subtitle={genderLabel}
          title="Premium Perfume Collection"
        />

        {/* Cards Grid */}
        <div className="w-full h-auto mt-[2rem]! p-4! md:p-10! grid justify-items-center grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
          {currentItems.map((product) => (
            <Link
              to="/singleproduct"
              className="no-underline"
              key={product.id}
            >
              <div className="w-40 sm:w-48 md:w-60 h-[55vh] max-md:h-[45vh] rounded-[10px] overflow-hidden">
                <div
                  className="w-full h-48 md:h-70 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.img})` }}
                ></div>
                <div className="p-3! md:p-5!">
                  <h6 className="text-[11px] md:text-[12px] text-gray-500 text-center">
                    {product.tag}
                  </h6>
                  <h5 className="text-base md:text-lg font-bold text-center">
                    {product.name}
                  </h5>
                  <h5 className="text-[11px] md:text-[12px] font-bold text-center">
                    {product.price}
                  </h5>
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
            className="w-8 h-8 md:w-9 md:h-9 rounded border text-sm font-medium disabled:opacity-40"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={`w-8 h-8 md:w-9 md:h-9 rounded border text-sm font-medium transition-colors
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
            className="w-8 h-8 md:w-9 md:h-9 rounded border text-sm font-medium disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;