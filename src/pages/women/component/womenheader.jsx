import headerImage from '../../../assets/img/women/women_header.png'
import { motion } from "framer-motion"

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

function Womenheader() {
    return (
        <>
            <div
                className="h-[70vh] w-full bg-cover  flex items-center relative"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})` }}
            >
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
            </div>
        </>
    );
}

export default Womenheader;