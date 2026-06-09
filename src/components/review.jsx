import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mine from "../assets/img/mine.png";
import qoute from "../assets/img/float-img/qoute.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Title } from './sectionTitle';

const reviews = [
    {
        id: 1,
        text: "I'll be very short. Smells like a mix between French Avenue Grow and JPG Paradise Garden. Or imagine Paradise Garden, but add a lot of warm spiciness to this lactonic-lavender concoction. Or Gris Charnel, but made masculine and warmer.",
        name: "Madhuri Dexit"
    },
    {
        id: 2,
        text: "Absolutely mesmerizing! The longevity is incredible. I sprayed it in the morning and could still smell it clearly after 12 hours. The vanilla dry-down is exceptionally smooth and feels incredibly premium.",
        name: "Sarah Jenkins"
    },
    {
        id: 3,
        text: "A true masterpiece. Smells niche, not trendy, not mass-appealing. Unisex leaning masculine. Very very strong, superb performance. Highly recommended for special occasions and evening wear.",
        name: "James Anderson"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // 0.5s delay between children
            delayChildren: 0.2 // initial delay
        }
    }
};

const slideLeft = { // This is for the image
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1
        }
    }
};

const slideRight = { // This is for the text coming from behind
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 2 // slow duration
        }
    }
};

const quoteAnim = {
    y: ["-10px", "10px"],
    rotate: [-5, 5],
    transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    }
};

function Review() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full py-[10px]! box-border overflow-hidden">
            <div className="text desktop-md:leading-10! w-full mb-10 flex flex-col items-center">
                <Title title="Testimonials" />
            </div>

            <div className="w-full h-[80vh] monitor-md:h-[70vh] flex max-md:flex-col justify-center items-center gap-10 max-md:gap-3">

                {/* LEFT SIDE: IMAGE AND SLIDE BEHIND TEXT */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false }} className="w-[40%] max-md:w-[90%] h-[70%] monitor-md:h-full max-md:h-auto flex relative">
                    <motion.div
                        className="w-[40%] max-md:w-full flex items-center justify-center h-full max-md:h-[200px] relative z-20"
                        variants={slideLeft}
                    >
                        <img className="h-full object-contain drop-shadow-2xl" src={mine} alt="" />
                    </motion.div>

                    <motion.div
                        className="w-[60%] max-md:w-full h-full max-md:mt-5 flex flex-col justify-center text-white relative z-10 pl-5"
                        variants={slideRight}
                    >
                        <h6 className="font-bold text-[30px] monitor-md:text-[70px] max-md:text-[24px] desktop-md:text-[42px]">Voices of Elegance</h6>
                        <br />
                        <p className="font-light max-md:hidden text-[12px]! monitor-md:text-[30px]! max-md:text-[14px]! desktop-md:text-[22px]! text-gray-300">
                            Discover authentic stories from M.Perfume devotees who've experienced the transformative power of our fragrances. 
                            Each testimonial reflects a genuine connection—where quality, performance, and artistry meet to create unforgettable olfactory moments. 
                            These are the voices of those who understand that true fragrance isn't just about smelling good; it's about feeling exceptional.
                        </p>
                    </motion.div>
                </motion.div>

                {/* DIVIDER */}
                <div className="w-[0.1%] max-md:w-[80%] h-[70%] max-md:h-[1px] bg-gradient-to-b max-md:bg-gradient-to-r from-transparent via-[#b300ff] to-transparent"></div>

                {/* RIGHT SIDE: SLIDER AND QUOTE */}
                <div className="w-[50%] max-md:w-[90%] h-[70%] max-md:h-[300px] flex flex-col justify-center items-center relative text-white">

                    {/* Testimonial Slider div */}
                    <div className="w-[90%] py-[10px]! relative h-[250px] flex flex-col gap-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="w-full"
                            >
                                <h4 className='font-light italic max-md:text-center text-[16px] max-md:text-[14px] monitor-md:text-[40px] desktop-md:text-2xl text-gray-200 leading-relaxed'>
                                    "{reviews[current].text}"
                                </h4>
                                <br />
                                <p className="font-bold text-[#E670FB] max-md:text-center italic text-[18px] desktop-md:text-[26px]! monitor-md:text-[30px]!">
                                    - {reviews[current].name}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Animated Quote Image */}
                    <div className="w-[90%] max-md:w-[90%] flex justify-between mt-5 max-md:mt-0">
                        <div className='w-full flex items-center max-md:items-start gap-5 mt-4'>
                            <button onClick={prevSlide} className="w-10 h-10 max-md:w-6 max-md:h-6 max-md:text-[10px] desktop-md:w-15 desktop-md:h-15 monitor-md:w-25 monitor-md:h-25 monitor-md:text-[30px] rounded-full border border-white/30 flex items-center justify-center hover:bg-[#E670FB] hover:border-[#E670FB] transition-all cursor-pointer text-white">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button onClick={nextSlide} className="w-10 h-10 max-md:w-6 max-md:h-6 max-md:text-[10px] desktop-md:w-15 desktop-md:h-15 monitor-md:w-25 monitor-md:h-25 monitor-md:text-[30px] rounded-full border border-white/30 flex items-center justify-center hover:bg-[#E670FB] hover:border-[#E670FB] transition-all cursor-pointer text-white">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        <motion.img
                            className="w-[20%] max-md:w-[30%]  opacity-70"
                            src={qoute}
                            alt="Quote"
                            animate={{ y: ["-10px", "10px"], rotate: [-5, 5] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
