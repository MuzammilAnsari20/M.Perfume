import { motion } from 'framer-motion'
import sh1 from '../assets/img/collect-item5.png'
import sh2 from '../assets/img/collect-item4.png'
import sh3 from '../assets/img/collect-item3.png'
import sh4 from '../assets/img/collect-item1.png'
import sh5 from '../assets/img/collect-item2.png'
import Marquee from 'react-fast-marquee';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2 // ek ke baad ek
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

function ShopCategory() {
    const ShopCategoryData = [
        { src: sh1, name: 'Unisex' },
        { src: sh2, name: 'Strong Perfume' },
        { src: sh3, name: 'Perfume Oil' },
        { src: sh4, name: 'Light Perfume' },
        { src: sh5, name: 'Fresh Perfume' }
    ]
    return (
        <div className="w-full flex justify-center items-center flex-col desktop-md:pb-[50px]!">

            <div className="text desktop-md:leading-10!">
                <h6 className="text-[14px]! desktop-md:text-[18px]! max-md:tracking-[3px]! max-md:text-[11px]! ">
                    Shop by Category
                </h6>
                <h5 className="text-[28px]! max-md:text-[18px]! desktop-md:text-[38px]!">Perfume Collection</h5>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                viewport={{ once: true, amount: 0.3}}
                className='w-full flex justify-center items-center flex-wrap'
            >
                <Marquee pauseOnHover loop={0} speed={40} className="w-[90%]! max-md:w-full! max-md:px-[15px]! mask-l-from-50% mask-r-from-50% pl-[10%]!">
                <div className="mt-[30px]! max-md:mt-0! w-full max-md:w-[60%] max-md:px-[15px]! flex justify-center items-center gap-[50px] desktop-md:gap-[100px] max-md:gap-[5px] pr-[50px]! desktop-md:pr-[100px]!">
                {ShopCategoryData.map((i) => (

                    <motion.div className="w-[190px] flex items-center justify-center flex-col gap-[10px] overflow-hidden desktop-md:w-[230px]" variants={childVariants}>
                        
                        <div className="w-full rounded-full aspect-square overflow-hidden ">

                            <img className="w-full h-full object-cover" src={i.src} alt="sh1" />

                        </div>

                        <h5 className="desktop-md:text-[24px]">{i.name}</h5>
                    </motion.div>

                ))}
                </div>
                </Marquee>
            </motion.div>
        </div>
    );
}
export default ShopCategory;