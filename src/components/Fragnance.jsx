import arrival1 from '../assets/img/arrival1.png'
import arrival2 from '../assets/img/arrival2.png'
import arrival3 from '../assets/img/arrival3.png'
import { Link } from 'react-router-dom';
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
const childVariants2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};


function Fragnance() {
    return (
        <section className="fragrance">
            <div className="bg-left"></div>

            <div className="container">

                <motion.div className="left-content" variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-5% -0px" }}>
                    <motion.p className="subtitle" variants={childVariants}>Our Fragrance Journey</motion.p>

                    <motion.h2 className="title" variants={childVariants}>
                        Crafting Scents with <br />
                        Passion and Precision
                    </motion.h2>

                    <motion.p className="desc" variants={childVariants}>
                        At M, we believe that every fragrance tells a story. Our journey began
                        with a passion for creating unique and memorable scents that capture
                        the essence of life’s special moments.
                    </motion.p>

                    <motion.p className="desc" variants={childVariants}>
                        Quality is at the heart of everything we do at M. We are dedicated to
                        offering a curated selection of the world's finest perfumes sourced
                        from renowned.
                    </motion.p>

                    <motion.div variants={childVariants}>
                        <Link to="/men" className="btn" >
                        Discover Now
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div className="right-images" variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-5% -0px" }}>
                    <motion.div className="bg-box" variants={childVariants}></motion.div>
                    <motion.div className="small-image" variants={childVariants2}></motion.div>
                </motion.div>

            </div>
        </section>
    );
}
export default Fragnance;