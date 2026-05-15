import { Link } from "react-router-dom"
import products from '../data/product';

export default function RelatedProducts() {
    const Products = products.filter((p) => !p.isArrival).sort(() => 0.5 - Math.random()).slice(0, 4);
    return (
        <div className="w-full px-[60px]! pt-7! pb-7!">
            <div className="text">
                <h2 className="text-white font-bold text-center text-[22px] tracking-[3px] font-poppins">Related Products</h2>
            </div>

            <div className="w-full h-auto mt-[2rem]! p-10! grid justify-items-center grid-cols-4 gap-10">
                {Products.map((product) => (
                    <Link to="/singleproduct" className="no-underline" key={product.id}>
                        <div className="hello w-60 h-[65vh] rounded-[10px] overflow-hidden">
                            <div className="overflow-hidden">
                            <div
                                className="w-full h-70 bg-cover bg-center hover:scale-[1.1] transition-all duration-400" 
                                style={{ backgroundImage: `url(${product.img})` }}
                            ></div>
                            </div>
                            <div className="p-5!">
                                <h6 className="text-[12px] text-gray-500 text-center">{product.tag}</h6>
                                <h5 className="text-lg font-bold text-center">{product.name}</h5>
                                <h5 className="text-[12px] font-bold text-center">{product.price}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}