import { motion } from 'framer-motion'
import box1 from '../assets/img/offer_section/box1.png'
import box2 from '../assets/img/offer_section/box2.png'
import box3 from '../assets/img/offer_section/box3.png'
import box4 from '../assets/img/offer_section/box4.png'

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

function OfferSection() {
    return (
        <motion.section className="features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, margin: "-5% -0px" }}
        >
            <motion.div className="feature-box" variants={childVariants}>
                <div className="feature-img">
                    <img src={box1} alt="box1" />
                </div>
                <div className="feature-t">
                    <h4>Up To 40% Offer</h4>
                    <p>On all your perfume</p>
                </div>
            </motion.div>

            <motion.div className="feature-box" variants={childVariants}>
                <div className="feature-img">
                    <img src={box2} alt="box2" />
                </div>
                <div className="feature-t">
                    <h4>Perfume Variety</h4>
                    <p>Making your gift box</p>
                </div>
            </motion.div>

            <motion.div className="feature-box" variants={childVariants}>
                <div className="feature-img">
                    <img src={box3} alt="box3" />
                </div>
                <div className="feature-t">
                    <h4>Free Shipping</h4>
                    <p>On order from $500+</p>
                </div>
            </motion.div>

            <motion.div className="feature-box" variants={childVariants}>
                <div className="feature-img">
                    <img src={box4} alt="box4" />
                </div>
                <div className="feature-t">
                    <h4>Easy Return</h4>
                    <p>Return within 15 days</p>
                </div>
            </motion.div>
        </motion.section>
    );
}
export default OfferSection;