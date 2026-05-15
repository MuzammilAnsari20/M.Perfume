import { motion } from 'framer-motion'
import blog1 from '../assets/img/blog1.jpg'
import blog2 from '../assets/img/blog2.webp'

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


function Blog() {

return(
<section className="blog">
        <div className="text">
            <h6 className="gsp-text">Blog</h6>
            <h5 className="gsp-text">New Blog & Updates</h5>
        </div>
        <br />
        <br />
        <motion.div className="blog-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:false, margin: "-5% -0px" }}>

            <motion.div className="blog_slide " variants={childVariants}> 
                <img src={blog1} alt="" />
                <div className="blog_subtext">
                    <div className="date">
                        <h6>June 20, 2024</h6>
                        <h6><i className="fas fa-comment"></i> Comment</h6>
                    </div>
                    <h2>Discover the Art of Fragrance: A Guide to Perfume Types and Notes....</h2>
                </div>
            </motion.div>

            <motion.div className="blog_slide " variants={childVariants}>
                <img src={blog2} alt="" />
                <div className="blog_subtext">
                    <div className="date">
                        <h6>June 20, 2024</h6>
                        <h6><i className="fas fa-comment"></i>Comment</h6>
                    </div>
                    <h2>Discover the Art of Fragrance: A Guide to Perfume Types and Notes....</h2>
                </div>
            </motion.div>

        </motion.div>
    </section>
);
}
export default Blog;
