import { motion } from 'framer-motion'
import sh1 from '../assets/img/collect-item5.png'
import sh2 from '../assets/img/collect-item4.png'
import sh3 from '../assets/img/collect-item3.png'
import sh4 from '../assets/img/collect-item1.png'
import sh5 from '../assets/img/collect-item2.png'

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
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="text">
                <h6 className="text-[10px]! max-md:tracking-[3px]! max-md:text-[7px]!">
                    Shop by Category
                </h6>
                <h5 className="gsp-text">Perfume Collection</h5>
            </div>
            <motion.div
                className="mt-[30px]! max-md:mt-0! w-[80%] flex justify-center items-center gap-[30px] max-md:gap-[5px]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.7 }}
            >

                <motion.div className="w-[190px] flex items-center justify-center flex-col gap-[10px] overflow-hidden" variants={childVariants}>
                    <div className="w-full rounded-full aspect-square overflow-hidden ">
                        <img className="w-full h-full object-cover" src={sh1} alt="sh1" />
                    </div>
                    <h5 className="h5">Unisex</h5>
                </motion.div>

                 <motion.div className="w-[190px] flex items-center justify-center flex-col gap-[10px] overflow-hidden" variants={childVariants}>
                    <div className="w-full rounded-full aspect-square overflow-hidden ">
                        <img className="w-full h-full object-cover" src={sh2} alt="sh2" />
                    </div>
                    <h5 className="h5">Strong Perfume</h5>
                </motion.div>

                 <motion.div className="w-[190px] flex items-center justify-center flex-col gap-[10px] overflow-hidden" variants={childVariants}>
                    <div className="w-full rounded-full aspect-square overflow-hidden ">
                        <img className="w-full h-full object-cover" src={sh3} alt="sh3" />
                    </div>
                    <h5 className="h5">Perfume Oil</h5>
                </motion.div>

                 <motion.div className="w-[190px] flex items-center justify-center flex-col gap-[10px] overflow-hidden" variants={childVariants}>
                    <div className="w-full rounded-full aspect-square overflow-hidden ">
                        <img className="w-full h-full object-cover" src={sh4} alt="sh4" />
                    </div>
                    <h5 className="h5">Light Perfume</h5>
                </motion.div>

                 <motion.div className="w-[190px] flex items-center justify-center flex-col gap-[10px] overflow-hidden" variants={childVariants}>
                    <div className="w-full rounded-full aspect-square overflow-hidden ">
                        <img className="w-full h-full object-cover" src={sh5} alt="sh5" />
                    </div>
                    <h5 className="h5">Fresh Perfume</h5>
                </motion.div>

            </motion.div>
        </div>
    );
}
export default ShopCategory;