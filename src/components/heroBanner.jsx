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
            <section
                className="h-[70vh] max-md:h-[45vh] w-full box-border flex max-md:flex-col-reverse relative items-center justify-between max-md:justify-center bg-center bg-cover max-md:py-5!"
                style={{ backgroundImage: `url(${header_bg})` }}
            >

                {/* Text */}
                <div className="w-1/2 max-md:w-full flex items-center justify-center">
                    <motion.div
                        className="max-w-[1050px] px-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        <motion.h1 variants={childVariants} className="text-white text-1xl max-md:text-[22px]! desktop-md:text-[34px] monitor-md:text-[60px] font-bold Poppins">M.Perfume</motion.h1>

                        <motion.h1 variants={childVariants} className="text-white text-6xl max-md:text-[32px]! desktop-md:text-[76px] monitor-md:text-[100px] font-bold Poppins"><span className="text-[#D361EB]">Collection</span> 2026</motion.h1>

                        <motion.h1 variants={childVariants} className="text-white text-lg max-md:text-[14px]! desktop-md:text-[34px] monitor-md:text-[60px] Poppins">Where Passion meet <span className="text-[#D361EB]">Elegance</span></motion.h1>

                        <motion.h6 variants={childVariants} className="text-white text-[12px] max-md:text-[12px]! desktop-md:text-[26px] monitor-md:text-[46px] Poppins">The Scent of Unforgettable <br /> Moments.</motion.h6>
                    </motion.div>
                </div>

                {/* Images */}
                <div className="w-1/2 max-md:w-full flex items-center justify-center relative h-[500px] max-md:h-[250px]">

                    <img
                        src={float_image1}
                        alt=""
                        className="
                                absolute
                                w-[clamp(80px,13vw,320px)]
                                monitor-md:w-[12vw]
                                monitor-md:top-[10%]
                                left-[35%] max-md:left-[38%]
                                top-[30%]
                                animate-[floatimg1_5s_ease-in-out_infinite]
                            "
                    />

                    <img
                        src={float_image2}
                        alt=""
                        className="
                            absolute
                            w-[clamp(150px,20vw,500px)]
                            monitor-md:w-[20vw]
                            z-10
                            animate-[floatimg2_5s_ease-in-out_infinite]
                        "
                    />

                    <img
                        src={float_image3}
                        alt=""
                        className="
                            absolute
                            w-[clamp(80px,13vw,320px)]
                            monitor-md:w-[12vw]
                            monitor-md:top-[10%]
                            right-[35%] max-md:right-[38%]
                            top-[30%]
                            animate-[floatimg3_5s_ease-in-out_infinite]
                        "
                    />
                </div>

            </section>
        </>
    );
}
export default HeroBanner