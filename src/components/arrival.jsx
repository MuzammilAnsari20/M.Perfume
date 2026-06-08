import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import products from '../data/product';
import arrivalbg from '../assets/img/arrivalbg.png'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { 
            type: "spring", 
            damping: 12, 
            stiffness: 100 
        } 
    }
};

function Arrival({ secname, sectag, imgtitle, imgtag, asideimg }) {

    const arrivalProducts = products
        .filter((p) => p.isArrival === true)
        .slice(0, 3);

    return (
        <div className="box-border w-full py-10! overflow-hidden relative flex items-center justify-center" style={{ background: `url(${arrivalbg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            {/* Add a subtle overlay to the background for better contrast */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

            <div className="arrival-container box-border flex max-md:flex-col items-center justify-center gap-10 max-md:gap-5 w-[80%] desktop-md:w-[95%] h-full! relative z-10 px-[5%]">
                <motion.div 
                        className="text desktop-md:leading-10! hidden! max-md:flex! w-full flex-col items-center justify-center mb-10"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h6 className="text-[#E670FB] text-[14px]! desktop-md:text-[18px]! tracking-[5px]! max-md:text-[11px]! uppercase font-medium">
                            {secname}
                        </h6>
                        <h5 className="text-[32px]! max-md:text-[24px]! desktop-md:text-[42px]! font-bold text-white mt-2 text-center">{sectag}</h5>
                </motion.div>
                <motion.aside
                    initial={{ opacity: 0, x: -100, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    style={{ backgroundImage: `url(${asideimg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    className='w-[30%] max-md:w-full h-[80vh] desktop-md:h-[70vh] max-md:h-[30vh] rounded-[20px] border border-white/20 relative flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(211,97,235,0.15)] group cursor-pointer'
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-700"></div>
                    <motion.div 
                        className="aside-text relative z-10 text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h2 className="text-[40px] max-md:text-[20px]! font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">{imgtitle}</h2>
                        <h6 className="text-[#d3b195] max-md:text-[10px]! tracking-[6px] mt-2 text-sm uppercase font-semibold drop-shadow-md">{imgtag}</h6>
                    </motion.div>
                </motion.aside>

                <motion.div className="w-[70%] max-md:w-full h-full flex flex-col justify-center items-center" variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-10% 0px" }}
                >
                    <motion.div 
                        className="text desktop-md:leading-10! max-md:hidden! w-full flex flex-col items-center justify-center mb-10"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h6 className="text-[#E670FB] text-[14px]! desktop-md:text-[18px]! tracking-[5px]! max-md:text-[11px]! uppercase font-medium">
                            {secname}
                        </h6>
                        <h5 className="text-[32px]! max-md:text-[24px]! desktop-md:text-[42px]! font-bold text-white mt-2 text-center">{sectag}</h5>
                    </motion.div>

                    <div className='flex gap-10 desktop-md:gap-14 w-full'>
                        {arrivalProducts.map((product) => (
                        <Link to="/" key={product.id} className='w-1/3 max-md:w-full flex flex-col items-center justify-center relative group'>
                            <motion.div 
                                className="arrival-item p-6 rounded-[25px] shadow-lg w-full flex flex-col items-center justify-center transition-colors" 
                                variants={childVariants}
                            >
                                <motion.img 
                                    className='w-[80%] max-md:w-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] mb-6' 
                                    src={product.img} 
                                    alt={product.name} 
                                    whileHover={{ rotate: 8, scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                />
                                <h6 className='font-light text-center text-[#d3b195] desktop-md:text-[24px] text-xs tracking-[3px] uppercase mb-1'>{product.tag}</h6>
                                <h5 className='text-center text-white text-xl desktop-md:text-[34px] font-medium mb-1'>{product.name}</h5>
                                <h5 className='text-center text-[#E670FB] text-lg desktop-md:text-[34px] font-bold'>{product.price}</h5>
                            </motion.div>
                        </Link>
                    ))}
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
export default Arrival;