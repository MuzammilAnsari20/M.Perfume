import { motion } from 'framer-motion'
import offiImg from '../assets/img/offi.jpeg'
import { Link } from 'react-router-dom';

const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.3 } 
    }
};

const childVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { type: "spring", stiffness: 100, damping: 10, bounce: 0.5 } 
    }
};

const bgZoom = {
    hidden: { scale: 1.2 },
    visible: {
        scale: 1,
        transition: { duration: 2, ease: "easeOut" }
    }
};

const itemUp = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { type: "spring", stiffness: 120, damping: 10, bounce: 0.6 } 
    }
};

const pulseButton = {
    scale: [1, 1.05, 1],
    boxShadow: [
        "0px 0px 0px rgba(211,97,235,0.2)",
        "0px 0px 20px rgba(211,97,235,0.6)",
        "0px 0px 0px rgba(211,97,235,0.2)"
    ],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

function OfferSSection() {
    return (
        <section className="relative w-full h-[80vh]! mt-[70px]! max-md:mt-[5px]! max-md:h-[60vh]! desktop-md:mt-[5px]! flex items-center justify-start max-md:justify-center desktop-md:justify-center px-[100px]! max-md:px-[0px]! desktop-md:px-[0px]! py-[50px]! max-md:py-[0px]! desktop-md:py-[0px]! box-border z-10 overflow-hidden">
            
            {/* BACKGROUND IMAGE WITH ZOOM EFFECT */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-20"
                style={{ backgroundImage: `url(${offiImg})` }}
                variants={bgZoom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            ></motion.div>

            {/* BLACK OVERLAY */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

            {/* CONTENT CONTAINER */}
            <motion.div 
                className="w-[50%] max-md:w-[90%] desktop-md:w-[90%] h-full max-md:h-[90%] desktop-md:h-[60%] bg-black/55 backdrop-blur-sm rounded-[50px]! max-md:rounded-[10px]! desktop-md:rounded-[10px]! box-border flex flex-col justify-center px-[100px]! max-md:px-[20px]! desktop-md:px-[20px]! gap-[10px]! text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-5% 0px" }}
                style={{ perspective: 1000 }}
            >
                <motion.h6 variants={childVariants} className="text-[#D361EB] tracking-[8px] text-[13px]! desktop-md:text-[16px]! mb-[20px]! uppercase font-bold">
                    Summer Fragrance Fiesta
                </motion.h6>

                <motion.h2 variants={childVariants} className="text-[42px]! max-md:text-[28px]! desktop-md:text-[64px]! font-extrabold leading-[1.1]! mb-[25px]! drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    Get up to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E670FB] to-[#d3b195]">25% Off</span><br />
                    Summer Fragrance
                </motion.h2>

                <motion.p variants={childVariants} className="text-[14px]! desktop-md:text-[18px]! text-[#cfcfcf] leading-[1.8]! mb-[15px]! max-w-[500px]">
                    Perfect for day or night, these scents will keep you feeling fresh and invigorated all summer long.
                </motion.p>

                <motion.div variants={childVariants} whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.9 }} className="mt-[15px]!">
                    <motion.div animate={pulseButton} className="inline-block rounded-[30px]!">
                        <Link to="/" className="inline-block px-[32px]! max-md:px-[12px]! py-[14px]! max-md:py-[7px]! desktop-md:px-[45px]! desktop-md:py-[20px]! desktop-md:text-[20px]! bg-gradient-to-r from-[#E670FB] to-[#7c30b3] text-white rounded-[30px]! no-underline text-[16px]! max-md:text-[12px]! font-bold border-2 border-[#E670FB]/50 transition-all hover:bg-gradient-to-l">
                            Discover Now
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default OfferSSection;