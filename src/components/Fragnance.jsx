import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import m6Img from '../assets/img/Mens/m6.png';
import fragImg from '../assets/img/fragnance2.PNG';
import animate from '../assets/img/animated.jpg';

const bgVariants = {
    hidden: { width: "0%" },
    visible: { 
        width: "75%", 
        transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] } 
    }
};

const bgMobileVariants = {
    hidden: { height: "0%" },
    visible: { 
        height: "100%", 
        transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] } 
    }
};

const textContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.8
        }
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

const titleVariants = {
    hidden: { opacity: 0, x: -50, rotateX: 90 },
    visible: { 
        opacity: 1, 
        x: 0, 
        rotateX: 0, 
        transition: { duration: 1, type: "spring", bounce: 0.5 } 
    }
};

const imageReveal = {
    hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.2 },
    visible: { 
        clipPath: "inset(0% 0 0 0)", 
        scale: 1,
        transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 } 
    }
};

const flyingPerfume = {
    hidden: { opacity: 0, x: 300, y: 200, rotate: 180, scale: 0 },
    visible: { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        rotate: 0, 
        scale: 1,
        transition: { duration: 1.5, type: "spring", bounce: 0.6, delay: 1.2 } 
    }
};

const floatContinously = {
    y: ["-15px", "15px"],
    rotate: [-3, 3],
    transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    }
};

const pulseButton = {
    scale: [1, 1.05, 1],
    boxShadow: [
        "0px 0px 0px rgba(230,112,251,0.2)",
        "0px 0px 20px rgba(230,112,251,0.6)",
        "0px 0px 0px rgba(230,112,251,0.2)"
    ],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

function Fragnance() {
    return (
        <section className="relative box-border w-full py-[50px]! max-md:py-[10px]! desktop-md:py-[80px]! pb-[100px]! max-md:pb-[50px]! overflow-hidden my-[30px]! flex items-center justify-center min-h-[80vh]! max-md:h-auto!">
            {/* DYNAMIC BACKGROUND */}
            <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-br from-[#140016] to-[#2a0033] z-0 hidden max-md:block w-full"
                variants={bgMobileVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            ></motion.div>
            
            <motion.div 
                className="absolute top-0 left-0 h-[90vh] max-md:h-full desktop-md:h-[90vh] z-0 max-md:hidden"
                variants={bgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                style={{ backgroundImage: `url(${animate})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover' }}
            ></motion.div>

            <div className="w-[1180px] desktop-md:w-[85%] monitor-md:w-[90%] max-w-[95%] mx-auto flex max-md:flex-col-reverse items-center justify-between relative z-10 gap-10 max-md:gap-0">

                <motion.div className="w-[50%] max-md:w-full text-white max-md:text-center max-md:flex max-md:flex-col max-md:items-center" variants={textContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-10% 0px" }}>
                    
                    <motion.p className="text-[#D361EB] tracking-[8px] text-[13px]! desktop-md:text-[16px]! monitor-md:text-[50px]! mb-[20px]! uppercase font-bold" variants={itemUp}>
                        Our Fragrance Journey
                    </motion.p>

                    <motion.h2 className="text-[42px]! max-md:text-[28px]! desktop-md:text-[64px]! monitor-md:text-[130px]! font-extrabold leading-[1.1]! mb-[25px]! drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" variants={titleVariants} style={{ perspective: 1000 }}>
                        Crafting Scents with <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E670FB] to-[#d3b195]">Passion & Precision</span>
                    </motion.h2>

                    <motion.p className="text-[14px]! desktop-md:text-[18px]! monitor-md:text-[40px]! text-[#cfcfcf] leading-[1.8]! mb-[15px]! max-w-[50%]" variants={itemUp}>
                        At M, we believe that every fragrance tells a story. Our journey began
                        with a passion for creating unique and memorable scents that capture
                        the essence of life’s special moments.
                    </motion.p>

                    <motion.p className="text-[14px]! desktop-md:text-[18px]! monitor-md:text-[40px]! text-[#cfcfcf] leading-[1.8]! mb-[25px]! max-w-[5%px]" variants={itemUp}>
                        Quality is at the heart of everything we do at M. We are dedicated to
                        offering a curated selection of the world's finest perfumes sourced
                        from renowned creators.
                    </motion.p>

                    <motion.div variants={itemUp} whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.9 }} className="mt-[15px]!">
                        <motion.div animate={pulseButton} className="inline-block rounded-[30px]!">
                            <Link to="/men" className="inline-block px-[32px]! py-[14px]! desktop-md:px-[45px]! monitor-md:px-[60px]! desktop-md:py-[20px]! monitor-md:py-[20px]! desktop-md:text-[20px]! monitor-md:text-[50px]! bg-gradient-to-r from-[#E670FB] to-[#7c30b3] text-white rounded-[30px]! no-underline text-[16px]! font-bold border-2 border-[#E670FB]/50 transition-all hover:bg-gradient-to-l">
                                Discover Now
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className="w-[45%] max-md:w-full  max-md:mt-[40px]! max-md:mb-[60px]! relative h-[64vh]! desktop-md:h-[60vh]! max-md:flex max-md:flex-col max-md:items-center max-md:justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-10% 0px" }}
                >
                    {/* grey bg box with heavy clip-path reveal */}
                    <motion.div 
                        className="absolute max-md:relative right-0 top-0 w-[75%] max-md:w-[90%] h-[85%] max-md:h-[350px]! bg-cover rounded-[30px]! shadow-[0_30px_50px_rgba(0,0,0,0.8)] border-4 border-white/5 overflow-hidden" 
                        variants={imageReveal}
                    >
                        <motion.div 
                            className="w-full h-full bg-cover"
                            style={{ backgroundImage: `url(${m6Img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            whileHover={{ scale: 1.08, rotate: 2 }}
                            transition={{ duration: 0.5 }}
                        ></motion.div>
                    </motion.div>

                    {/* small perfume flying in like crazy */}
                    <motion.div 
                        className="absolute max-md:relative left-[-20px]! max-md:left-0! bottom-[40px]! max-md:mt-[-100px]! max-md:bottom-0! w-[50%] max-md:w-[60%] h-[55%] max-md:h-[250px]! z-20 drop-shadow-[0_30px_30px_rgba(0,0,0,0.8)]"
                        variants={flyingPerfume}
                    >
                        <motion.div
                            className="w-full h-full bg-center bg-cover rounded-3xl! border-2 border-[#E670FB]/30 shadow-[0_0_30px_rgba(230,112,251,0.2)]"
                            style={{ backgroundImage: `url(${fragImg})`, backgroundRepeat: 'no-repeat' }}
                            animate={floatContinously}
                            whileHover={{ scale: 1.15, rotate: -10, y: -20 }}
                        ></motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Fragnance;