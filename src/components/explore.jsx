import {motion} from "framer-motion"

function Explore(){
return(
<div className="third-container">

        <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.7 }} 
            transition={{ duration: 1 }}
            className="tc-women">
            <div className="tc-text">
                <h3>Women's <br /> Perfume</h3>
                <h5>Explore</h5>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.7 }} 
            transition={{ duration: 1 }}
            className="tc-men">
            <div className="tc-text">
                <h3>Men <br /> Perfume</h3>
                <h5>Explore</h5>
            </div>
        </motion.div>
    </div>
);
}
export default Explore;