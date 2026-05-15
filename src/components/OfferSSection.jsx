import { motion } from 'framer-motion'

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

function OfferSSection() {
    return (
         <section className="offer-section">
            <motion.div className="sec-offer-container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:false, margin: "-5% -0px" }}>

                <motion.h6 variants={childVariants}>Summer Fragnance Fiesto</motion.h6>

                <motion.h2 variants={childVariants}>Get up to <span>25% Off</span><br />Summer Fragnance</motion.h2>

                <motion.p variants={childVariants}>Perfect for day or night, these scents will keep you feeling fresh and
                    invigorated all summer long.</motion.p>

                <motion.button variants={childVariants}>Discover Now</motion.button>

            </motion.div>
        </section>
    );
}
export default OfferSSection;