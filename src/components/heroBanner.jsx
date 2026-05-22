import { motion } from "framer-motion";
import float_image1 from '../assets/img/float-img/arrival2.png'
import float_image2 from '../assets/img/float-img/hero.png'
import float_image3 from '../assets/img/float-img/arrival3.png'
import float_image4 from '../assets/img/float-img/flower-bg.png'

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
            <section className="hero">

                <motion.div
                    className="hero-text"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}  // repeat animation, 60% visible trigger
                >
                    {/* <motion.h2 className="gsp-t" variants={childVariants}>M.</motion.h2>
                    <motion.h1 className="gsp-t text-bold" variants={childVariants}>
                        Collection <br /> 2026
                    </motion.h1>
                    <motion.h2 className="gsp-t" variants={childVariants}>
                        Where Passion meet Elegance
                    </motion.h2>
                    <motion.h5 className="gsp-t" variants={childVariants}>
                        The Scent of Unforgettable Moments.
                    </motion.h5>
                    <motion.button className="gsp-t" variants={childVariants}>
                        Shop Now
                    </motion.button> */}
                    <motion.div className="ml-28! z-10"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.6 }} 
                                    >
                                        <motion.h1 variants={childVariants} className="text-white text-1xl font-bold Poppins">M. Men</motion.h1>
                                        <motion.h1 variants={childVariants} className="text-white text-6xl font-bold Poppins"><span className="text-[#D361EB]">Collection</span> 2026</motion.h1>
                                        <motion.h1 variants={childVariants} className="text-white text-lg Poppins">Where Passion meet <span className="text-[#D361EB]">Elegance</span></motion.h1>
                                        <motion.h6 variants={childVariants} className="text-white text-[12px] Poppins">The Scent of Unforgettable <br /> Moments.</motion.h6>
                    </motion.div>
                </motion.div>

                <div className="float-images">
                    <img src={float_image1} alt="" className="float-img float-img1" />
                    <img src={float_image2} alt="" className="float-img float-img2" />
                    <img src={float_image3} alt="" className="float-img float-img3" />
                </div>

            </section >
        </>
    );
}
export default HeroBanner