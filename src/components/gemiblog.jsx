import { motion } from 'framer-motion';
import blog1 from '../assets/img/blog1.jpg';
import blog2 from '../assets/img/blog2.webp';
import { Title } from './sectionTitle';

// Parent container ke liye variants (Stagger effect)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Ek card ke baad doosra smooth load hoga
            delayChildren: 0.1,
        }
    }
};

// Card ke liye cinematic design aur entrance animation
const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 } 
    }
};

// Image hover effect variants
const imageVariants = {
    hover: { scale: 1.1, rotate: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// Text overlay overlay slide-up effect on hover
const overlayVariants = {
    rest: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    hover: { backgroundColor: "rgba(0, 0, 0, 0.75)", transition: { duration: 0.3 } }
};

function Blog() {
    return (
        <section className="px-[20px]! md:px-[80px]! py-[80px]! bg-[#0b0c10] text-white overflow-hidden">
            
            {/* Section Title Heading */}
            <div className="mb-[50px]! text-center">
                <Title subtitle="Our Blog" title="Latest News & Updates" />
            </div>

            {/* Main Animated Container */}
            <motion.div 
                className="flex flex-col! md:flex-row! items-center justify-center gap-[40px]! max-w-[1200px]! mx-auto!"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
            >
                {/* --- BLOG CARD 1 --- */}
                <motion.div 
                    className="w-full! sm:w-[480px]! h-[380px]! relative rounded-2xl! overflow-hidden shadow-2xl cursor-pointer group"
                    variants={cardVariants}
                    whileHover="hover"
                    initial="rest"
                >
                    {/* Background Image with Hover Zoom */}
                    <motion.img 
                        className='w-full h-full object-cover' 
                        src={blog1} 
                        alt="Fragrance Guide" 
                        variants={imageVariants}
                    />
                    
                    {/* Custom Animated Overlay */}
                    <motion.div 
                        className="absolute inset-0! flex flex-col! justify-end p-[30px]! bg-gradient-to-t! from-black! via-[#0000009c]! to-transparent!"
                        variants={overlayVariants}
                    >
                        {/* Meta Tags (Date & Comments) */}
                        <div className="flex items-center gap-[15px]! mb-[12px]! text-sm! text-gray-400 font-medium tracking-wide">
                            <span className="flex items-center gap-[6px]! bg-[#ffffff1a]! px-[10px]! py-[4px]! rounded-full!">
                                <i className="far fa-calendar-alt text-[#c5a880]"></i> June 20, 2024
                            </span>
                            <span className="flex items-center gap-[6px]! hover:text-[#c5a880] transition-colors">
                                <i className="fas fa-comment text-[#c5a880]"></i> 4 Comments
                            </span>
                        </div>

                        {/* Heading Title */}
                        <h3 className='text-xl! md:text-2xl! font-bold! leading-snug! text-white group-hover:text-[#c5a880] transition-colors duration-300'>
                            Discover the Art of Fragrance: A Guide to Perfume Types and Notes
                        </h3>
                        
                        {/* Interactive Read More Border Slide */}
                        <div className="w-[40px]! h-[2px]! bg-[#c5a880] mt-[15px]! group-hover:w-full! transition-all duration-500 ease-in-out" />
                    </motion.div>
                </motion.div>

                {/* --- BLOG CARD 2 --- */}
                <motion.div 
                    className="w-full! sm:w-[480px]! h-[380px]! relative rounded-2xl! overflow-hidden shadow-2xl cursor-pointer group"
                    variants={cardVariants}
                    whileHover="hover"
                    initial="rest"
                >
                    {/* Background Image with Hover Zoom */}
                    <motion.img 
                        className='w-full h-full object-cover' 
                        src={blog2} 
                        alt="Perfume Notes" 
                        variants={imageVariants}
                    />
                    
                    {/* Custom Animated Overlay */}
                    <motion.div 
                        className="absolute inset-0! flex flex-col! justify-end p-[30px]! bg-gradient-to-t! from-black! via-[#0000009c]! to-transparent!"
                        variants={overlayVariants}
                    >
                        {/* Meta Tags (Date & Comments) */}
                        <div className="flex items-center gap-[15px]! mb-[12px]! text-sm! text-gray-400 font-medium tracking-wide">
                            <span className="flex items-center gap-[6px]! bg-[#ffffff1a]! px-[10px]! py-[4px]! rounded-full!">
                                <i className="far fa-calendar-alt text-[#c5a880]"></i> June 18, 2024
                            </span>
                            <span className="flex items-center gap-[6px]! hover:text-[#c5a880] transition-colors">
                                <i className="fas fa-comment text-[#c5a880]"></i> 12 Comments
                            </span>
                        </div>

                        {/* Heading Title */}
                        <h3 className='text-xl! md:text-2xl! font-bold! leading-snug! text-white group-hover:text-[#c5a880] transition-colors duration-300'>
                            The Chemistry of Scents: How to Make Your Perfume Last Longer
                        </h3>
                        
                        {/* Interactive Read More Border Slide */}
                        <div className="w-[40px]! h-[2px]! bg-[#c5a880] mt-[15px]! group-hover:w-full! transition-all duration-500 ease-in-out" />
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}

export default Blog;