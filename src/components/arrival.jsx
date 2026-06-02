import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import products from '../data/product';

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

function Arrival({ secname, sectag, imgtitle, imgtag, asideimg }) {

    const arrivalProducts = products
        .filter((p) => p.isArrival === true)
        .slice(0, 3);
    console.log(products.filter((p) => p.isArrival === true))
    return (
        <div className="new-arrival">
            <div className="text">
                <h6 className="gsp-text">{secname}</h6>
                <h5 className="gsp-text">{sectag}</h5>
            </div>
            <div className="arrival-container">
                <motion.aside
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0, margin: "-5% -0px" }}
                    transition={{ duration: .8 }}
                    style={{ backgroundImage: `url(${asideimg})`, backgroundPosition: 'center' }}>
                    <div className="aside-text">
                        <h2>{imgtitle}</h2>
                        <h6>{imgtag}</h6>
                    </div>
                </motion.aside>


                <motion.div className="arrival-item-container" variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-5% -0px" }}
                >

                    {arrivalProducts.map((product) => (
                        <Link to="/" key={product.id}>
                            <motion.div className="arrival-item" variants={childVariants}>
                                <img src={product.img} alt={product.name} />
                                <h6>{product.tag}</h6>
                                <h5>{product.name}</h5>
                                <h5>{product.price}</h5>
                            </motion.div>
                        </Link>
                    ))}
                    


                </motion.div>
            </div>
        </div>
    );
}
export default Arrival;