import { motion } from 'framer-motion'
import sh1 from '../assets/img/collect-item5.png'
import sh2 from '../assets/img/collect-item4.png'
import sh3 from '../assets/img/collect-item3.png'
import sh4 from '../assets/img/collect-item1.png'
import sh5 from '../assets/img/collect-item2.png'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2 // ek ke baad ek
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

function ShopCategory() {
    return (
        <div className="second-container">
            <div className="text">
                <motion.h6 initial={{ opacity: 0,}} whileInView={{ opacity: 1 }} viewport={{ once:false, margin:"0px 0px -100% 0px" }} transition={{ duration: 1 }}
                    className="gsp-text" 
                >
                    Shop by Category
                </motion.h6>
                <h5 className="gsp-text">Perfume Collection</h5>
            </div>
            <motion.div
                className="collection"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.7 }}
            >

                <motion.div className="collected-item" variants={childVariants}>
                    <div className="collected-item-img">
                        <img src={sh1} alt="sh1" />
                    </div>
                    <h5 className="h5">Unisex</h5>
                </motion.div>

                <motion.div className="collected-item" variants={childVariants}>
                    <div className="collected-item-img">
                        <img src={sh2} alt="sh2" />
                    </div>
                    <h5 className="h5">Strong Perfume</h5>
                </motion.div>

                <motion.div className="collected-item" variants={childVariants}>
                    <div className="collected-item-img">
                        <img src={sh3} alt="sh3" />
                    </div>
                    <h5 className="h5">Perfume Oil</h5>
                </motion.div>

                <motion.div className="collected-item" variants={childVariants}>
                    <div className="collected-item-img">
                        <img src={sh4} alt="sh4" />
                    </div>
                    <h5 className="h5">Light Perfume</h5>
                </motion.div>

                <motion.div className="collected-item" variants={childVariants}>
                    <div className="collected-item-img">
                        <img src={sh5} alt="sh5" />
                    </div>
                    <h5 className="h5">Fresh Perfume</h5>
                </motion.div>

            </motion.div>
        </div>
    );
}
export default ShopCategory;