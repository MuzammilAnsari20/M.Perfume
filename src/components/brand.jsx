import { motion } from 'framer-motion'
import smile from '../assets/img/smile.png'
import organic from '../assets/img/organic.png'
import white from '../assets/img/white.png'
import rose from '../assets/img/rose.png'
import iconic from '../assets/img/iconic.png'

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

function Brands() {

    const brandsImages = 
    [
        {src : smile},
        {src : organic},
        {src : white},
        {src : rose},
        {src : iconic},
    ]

return(
<motion.section className="w-full py-[60px]! monitor-md:py-[80px]! desktop-md:py-[50px]! flex items-center justify-center monitor-md:justify-evenly gap-5  desktop-md:gap-20" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:false, margin: "-5% -0px" }}>

    {brandsImages.map((i, index) => (
        <motion.div key={index} variants={childVariants}>
            <div className="w-[14vmin] desktop-md:w-[16vmin]"><img className='w-full' src={i.src} alt="" /></div>
        </motion.div>
    ))}

</motion.section>
);
}

export default Brands;
