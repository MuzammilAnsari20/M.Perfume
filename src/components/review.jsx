import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 1// ek ke baad ek
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

function Review() {
    return (
        <section className="review">
            <div className="text">
                <h6 className="gsp-text">Testimonials</h6>
                <h5 className="gsp-text">Customer Reviews</h5>
            </div>
            <br />
            <br />
            <motion.div className="review-content" variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:false, margin: "-5% -0px" }}>

                <motion.div className="review_slide" variants={childVariants}>

                    <div className="perfume-type">
                        <div className="icons">
                            <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <h2>Impressive Collection</h2>
                        <p>
                            I recently purchased a perfume from M, and I am absolutely
                            thrilled with my experience. The fragrance I chose is exquisite,
                            and it has quickly become my signature scent. The quality of the
                            perfume
                        </p>
                        <br />
                    </div>

                    <div className="reviewer_name">
                        <h4>Emily R.</h4>
                    </div>

                </motion.div>

                <motion.div className="review_slide" variants={childVariants}>

                    <div className="perfume-type">
                        <div className="icons">
                            <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <h2>Impressive Collection</h2>
                        <p>
                            I recently purchased a perfume from M, and I am absolutely
                            thrilled with my experience. The fragrance I chose is exquisite,
                            and it has quickly become my signature scent. The quality of the
                            perfume
                        </p>
                        <br />
                    </div>

                    <div className="reviewer_name">
                        <h4>Emily R.</h4>
                    </div>

                </motion.div>

                <motion.div className="review_slide" variants={childVariants}>

                    <div className="perfume-type">
                        <div className="icons">
                            <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <h2>Impressive Collection</h2>
                        <p>
                            I recently purchased a perfume from M, and I am absolutely
                            thrilled with my experience. The fragrance I chose is exquisite,
                            and it has quickly become my signature scent. The quality of the
                            perfume
                            I recently purchased a perfume from M, and I am absolutely
                            thrilled with my experience. The fragrance I chose is exquisite,
                            and it has quickly become my signature scent. The quality of the
                            perfume
                        </p>
                        <br />
                    </div>

                    <div className="reviewer_name">
                        <h4>Emily R.</h4>
                    </div>

                </motion.div>

            </motion.div>
        </section>
    );
}

export default Review;
