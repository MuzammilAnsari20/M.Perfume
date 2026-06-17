import { Link } from "react-router-dom"
import products from '../data/product';

export default function RelatedProducts() {
    const Products = products.filter((p) => !p.isArrival).sort(() => 0.5 - Math.random()).slice(0, 4);
    return (
        <div className="w-full px-[60px]! max-md:px-[20px]! pt-7! pb-7!">
            <div className="text">
                <h2 className="text-white font-bold text-center text-[22px] tracking-[3px] font-poppins">Related Products</h2>
            </div>

            <div className="w-full h-auto mt-[2rem]! p-4! md:p-10! grid justify-items-center grid-cols-2 md:grid-cols-4 gap-4 max-md:gap-10!">
                {Products.map((product) => (
                    <Link to="/singleproduct" className="no-underline" key={product.id}>
                       <div className="w-40 sm:w-48 md:w-60 h-[55vh] max-md:h-[45vh] rounded-[10px] overflow-hidden">
                            <div className="overflow-hidden">
                            <div
                                className="w-full h-48 md:h-70 bg-cover bg-center"
                                style={{ backgroundImage: `url(${product.img})` }}
                            ></div>
                            </div>
                            <div className="p-3! md:p-5!">
                                <h6 className="text-[11px] md:text-[12px] text-gray-500 text-center">{product.tag}</h6>
                                <h5 className="text-base md:text-lg font-bold text-center">{product.name}</h5>
                                <h5 className="text-[11px] md:text-[12px] font-bold text-center">{product.price}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}