import { motion } from "framer-motion";
import float_image1 from '../assets/img/float-img/arrival2.png'
import float_image2 from '../assets/img/float-img/hero.png'
import float_image3 from '../assets/img/float-img/arrival3.png'
import header_bg from '../assets/img/header1.png'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2 // ek ke baad ek
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};


function HeroBanner() {
    return (
        <>
            <section className="h-[70vh] max-md:h-[30vh] w-full box-border flex max-md:flex-col-reverse relative items-center justify-between max-md:justify-center bg-center bg-cover " style={{ backgroundImage: `url(${header_bg})` }}>

                <motion.div
                    className="hero-text "
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}  // repeat animation, 60% visible trigger
                >
                    <motion.div className="ml-28! max-md:ml-0! z-10 max-md:text-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        <motion.h1 variants={childVariants} className="text-white text-1xl max-md:text-[22px]! font-bold Poppins">M.Perfume</motion.h1>
                        <motion.h1 variants={childVariants} className="text-white text-6xl max-md:text-[38px]! font-bold Poppins"><span className="text-[#D361EB]">Collection</span> 2026</motion.h1>
                        <motion.h1 variants={childVariants} className="text-white text-lg max-md:text-[14px]! Poppins">Where Passion meet <span className="text-[#D361EB]">Elegance</span></motion.h1>
                        <motion.h6 variants={childVariants} className="text-white text-[12px] max-md:text-[12px]! Poppins">The Scent of Unforgettable <br /> Moments.</motion.h6>
                    </motion.div>
                </motion.div>

                <div className="w-[40%] max-md:w-full  h-[70%] max-md:h-[50%] relative flex items-center justify-center flex-col max-md:hidden">
                    <img src={float_image1} alt="" className="absolute w-[130px] max-md:w-[110px] left-[35%] top-[15%] z-1 floatimg1 animate-[floatimg1_5s_ease-in-out_infinite]" />
                    <img src={float_image2} alt="" className="absolute w-[250px] max-md:w-[170px] top-[-15%] max-md:top-[0%] z-2 floatimg2 animate-[floatimg2_5s_ease-in-out_infinite]" />
                    <img src={float_image3} alt="" className="absolute w-[130px] max-md:w-[110px] right-[35%] top-[15%] z-1 floatimg3 animate-[floatimg3_5s_ease-in-out_infinite]" />
                </div>

            </section >
        </>
    );
}
export default HeroBanner