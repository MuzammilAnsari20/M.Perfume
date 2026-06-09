import { motion } from "framer-motion";
import { Title } from "./sectionTitle";

import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.webp";

const blogData = [
    {
        id: 1,
        image: blog1,
        date: "20 June 2026",
        category: "Perfume Education",
        title: "Discover The Art Of Fragrance & Find Your Signature Scent",
        description:
            "Explore perfume families, notes and concentration levels to choose a fragrance that truly reflects your personality."
    },
    {
        id: 2,
        image: blog2,
        date: "25 June 2026",
        category: "Luxury Lifestyle",
        title: "M.Perfume — Because Perfume Is Not Fragrance, It's Memories",
        description:
            "Every scent tells a story. Learn how fragrances become connected with emotions, places and unforgettable moments."
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

function Blog() {
    return (
        <section
            className="
            w-full
            px-[60px]!
            max-lg:px-[30px]!
            max-md:px-[20px]!
            py-[120px]!
            relative
            overflow-hidden
        "
        >
            {/* Background Glow */}

            <div
                className="
                absolute
                top-[-200px]
                left-[-200px]
                w-[500px]
                h-[500px]
                rounded-full
                bg-[#D361EB20]
                blur-[150px]
                pointer-events-none
            "
            />

            <div
                className="
                absolute
                bottom-[-250px]
                right-[-200px]
                w-[500px]
                h-[500px]
                rounded-full
                bg-[#D361EB15]
                blur-[150px]
                pointer-events-none
            "
            />

            {/* Heading */}

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Title
                    subtitle="M.Perfume Blog"
                    title="Luxury Stories & Updates"
                />
            </motion.div>

            <div className="h-[70px]!" />

            {/* Cards */}

            <motion.div
                className="
                grid
                grid-cols-2
                max-lg:grid-cols-1
                gap-[35px]!
            "
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {blogData.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={cardVariants}
                        whileHover={{
                            y: -12
                        }}
                        transition={{
                            duration: 0.35
                        }}
                        className="
                        relative
                        h-[520px]!
                        max-md:h-[430px]!
                        rounded-[30px]!
                        overflow-hidden
                        cursor-pointer
                        group
                        border
                        border-[#ffffff15]
                        bg-[#111]
                    "
                    >
                        {/* Image */}

                        <motion.img
                            src={item.image}
                            alt={item.title}
                            className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                        "
                            whileHover={{
                                scale: 1.1
                            }}
                            transition={{
                                duration: 0.7
                            }}
                        />

                        {/* Overlay */}

                        <div
                            className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black
                            via-black/60
                            to-black/10
                        "
                        />

                        {/* Date */}

                        <div
                            className="
                            absolute
                            top-[25px]!
                            left-[25px]!
                            bg-[#D361EB]
                            text-white
                            px-[16px]!
                            py-[8px]!
                            rounded-full
                            text-[13px]
                            font-medium
                        "
                        >
                            {item.date}
                        </div>

                        {/* Content */}

                        <div
                            className="
                            absolute
                            bottom-[35px]!
                            left-[35px]!
                            right-[35px]!
                        "
                        >
                            <p
                                className="
                                text-[#D361EB]
                                text-[14px]
                                tracking-[2px]
                                uppercase
                                mb-[12px]!
                            "
                            >
                                {item.category}
                            </p>

                            <h2
                                className="
                                text-white
                                text-[34px]
                                max-md:text-[24px]
                                font-bold
                                leading-tight
                                mb-[15px]!
                            "
                            >
                                {item.title}
                            </h2>

                            <p
                                className="
                                text-[#d1d1d1]
                                leading-[1.8]
                                mb-[25px]!
                                max-md:text-[14px]
                            "
                            >
                                {item.description}
                            </p>

                            <motion.button
                                whileHover={{
                                    x: 10
                                }}
                                className="
                                flex
                                items-center
                                gap-[12px]!
                                text-white
                                font-semibold
                            "
                            >
                                Read More
                                <i className="fas fa-arrow-right"></i>
                            </motion.button>
                        </div>

                        {/* Border Glow */}

                        <div
                            className="
                            absolute
                            inset-0
                            border
                            border-transparent
                            group-hover:border-[#D361EB50]
                            transition-all
                            duration-500
                            rounded-[30px]
                        "
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Blog;
