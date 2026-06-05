import { motion } from 'framer-motion'
import box1 from '../assets/img/offer_section/box1.png'
import box2 from '../assets/img/offer_section/box2.png'
import box3 from '../assets/img/offer_section/box3.png'
import box4 from '../assets/img/offer_section/box4.png'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2 // ek ke baad ek
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

function OfferSection() {
    return (
        <motion.section className="flex justify-center items-center gap-[30px] max-md:gap-0! w-full px-[10px]! py-[50px]! max-md:py-[10px]!"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, margin: "-5% -0px" }}
        >
            <motion.div className=" max-md:flex-col max-md:text-center px-[10px]!  max-md:px-[2px]! py-[10px]! flex align-center desktop-md:w-[20%] desktop-md:gap-[14px]" variants={childVariants}>
                <div className="align-center flex justify-center desktop-md:w-[25%] desktop-md:aspect-square">
                    <img src={box1} alt="box1" />
                </div>
                <div className="flex align-center justify-center flex-col">
                    <h4 className="text-[16px] desktop-md:text-[26px] max-md:text-[10px] max-md:text-center">Up To 40% Offer</h4>
                    <p className="text-[12px] desktop-md:text-[18px]! text-[#bbb] max-md:text-[10px]! max-md:text-center">On all your perfume</p>
                </div>
            </motion.div>

            <motion.div className=" max-md:flex-col max-md:text-center px-[10px]!  max-md:px-[2px]! py-[10px]! flex align-center desktop-md:w-[20%] desktop-md:gap-[14px]" variants={childVariants}>
                <div className="align-center flex justify-center desktop-md:w-[25%] desktop-md:aspect-square">
                    <img src={box2} alt="box2" />
                </div>
                 <div className="flex align-center justify-center flex-col">
                    <h4 className="text-[16px] desktop-md:text-[26px] max-md:text-[10px] max-md:text-center">Perfume Variety</h4>
                    <p className="text-[12px] desktop-md:text-[18px]! text-[#bbb] max-md:text-[10px]! max-md:text-center">Making your gift box</p>
                </div>
            </motion.div>

            <motion.div className=" max-md:flex-col max-md:text-center px-[10px]!  max-md:px-[2px]! py-[10px]! flex align-center desktop-md:w-[20%] desktop-md:gap-[14px]" variants={childVariants}>
                <div className="align-center flex justify-center desktop-md:w-[25%] desktop-md:aspect-square">
                    <img src={box3} alt="box3" />
                </div>
                <div className="flex align-center justify-center flex-col">
                    <h4 className="text-[16px] desktop-md:text-[26px] max-md:text-[10px] max-md:text-center">Free Shipping</h4>
                    <p className="text-[12px] desktop-md:text-[18px]! text-[#bbb] max-md:text-[10px]! max-md:text-center">On order from $500+</p>
                </div>
            </motion.div>

            <motion.div className=" max-md:flex-col max-md:text-center px-[10px]!  max-md:px-[2px]! py-[10px]! flex align-center desktop-md:w-[20%] desktop-md:gap-[14px]" variants={childVariants}>
                <div className="align-center flex justify-center desktop-md:w-[25%] desktop-md:aspect-square">
                    <img src={box4} alt="box4" />
                </div>
                <div className="flex align-center justify-center flex-col">
                    <h4 className="text-[16px] desktop-md:text-[26px] max-md:text-[10px] max-md:text-center">Easy Return</h4>
                    <p className="text-[12px] desktop-md:text-[18px]! text-[#bbb] max-md:text-[10px]! max-md:text-center">Return within 15 days</p>
                </div>
            </motion.div>
        </motion.section>
    );
}
export default OfferSection;