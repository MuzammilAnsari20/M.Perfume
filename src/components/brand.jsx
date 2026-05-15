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

return(
<motion.section className="brands" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:false, margin: "-5% -0px" }}>

        <motion.div variants={childVariants}>
            <div className="brandimage"><img src={smile} alt="" /></div>
        </motion.div>

        <motion.div variants={childVariants}>
            <div className="brandimage"><img src={organic} alt="" /></div>
        </motion.div>

        <motion.div variants={childVariants}>
            <div className="brandimage"><img src={white} alt="" /></div>
        </motion.div>

        <motion.div variants={childVariants}>
            <div className="brandimage"><img src={rose} alt="" /></div>
        </motion.div>

        <motion.div variants={childVariants}>
            <div className="brandimage"><img src={iconic} alt="" /></div>
        </motion.div>

</motion.section>
);
}

export default Brands;
