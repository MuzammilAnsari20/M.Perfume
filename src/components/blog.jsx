import { motion } from 'framer-motion'
import blog1 from '../assets/img/blog/blog1.png'
import blog2 from '../assets/img/blog/blog2.png'
import blog3 from '../assets/img/blog/blog3.png'
import Title from './sectionTitle';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

function BlogCard({ src, tag, title, date, readTime, large = false }) {
    return (
        <motion.div
            variants={scaleIn}
            className={`relative! monitor-md:h-[50vh]! overflow-hidden! rounded-[4px]! cursor-pointer! group!
                ${large
                    ? 'h-[420px]! md:h-[420px]!'
                    : 'flex-1! md:flex-1! h-[200px]! md:h-auto!'
                }`}
        >
            <img
                src={src}
                alt={title}
                className="w-full! h-full! object-cover! transition-all! duration-700! brightness-75! saturate-75! group-hover:scale-105! group-hover:brightness-50! group-hover:saturate-50!"
            />

            <motion.div
                className="absolute! bottom-0! left-0! h-[2px]! bg-[#c9a96e]!"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
            />

            <div
                className="absolute! bottom-0! left-0! right-0! p-[24px]! md:p-[24px]!"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)' }}
            >
                <span
                    className="inline-block! text-[9px]! monitor-md:text-5xl! max-md:text-1xl! tracking-[2px]! uppercase! font-semibold! px-[10px]! monitor-md:px-[40px]! py-[4px]! monitor-md:py-[14px]! rounded-[2px]! mb-[10px]!"
                    style={{ background: '#c9a96e', color: '#0a0a0a' }}
                >
                    {tag}
                </span>

                <h3
                    className={`font-bold! monitor-md:text-8xl! max-md:text-[16px]! text-[#f0e6d3]! leading-[1.35]! mb-[14px]!
                        ${large
                            ? 'text-[26px]! md:text-[26px]!'
                            : 'text-[20px]! md:text-[20px]!'
                        }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {title}
                </h3>

                <div className="flex! items-center! gap-[16px]!">
                    <span className="text-[11px]! monitor-md:text-5xl! tracking-[1px]! text-[#8a7a65]!">{date}</span>
                    <span className="text-[11px]! monitor-md:text-5xl! tracking-[1px]! text-[#c9a96e]!">{readTime}</span>
                </div>
            </div>
        </motion.div>
    )
}

function Blog() {
    return (
        <section
            className="px-[60px]! max-md:px-[20px]! md:px-[60px]!"
        >
            <Title
                subtitle="Blog"
                title="Scent Stories Fragrance Notes"
            />

            {/* Grid — 2 col desktop, 1 col mobile */}
            <motion.div
                className="py-[30px]! grid! md:gap-[20px]! gap-[16px]!
                           grid-cols-1! md:grid-cols-[1.4fr_1fr]!"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
            >
                <BlogCard
                    src={blog1}
                    tag="Featured"
                    title="Discover the Art of Fragrance: A Guide to Perfume Types and Notes"
                    date="June 20, 2024"
                    readTime="5 min read"
                    large={true}
                />

                {/* Side cards — row on mobile, column on desktop */}
                <motion.div
                    className="flex! monitor-md:h-[50vh]! flex-col! gap-[16px]! md:gap-[20px]!
                               md:h-[420px]! h-auto!"
                    variants={containerVariants}
                >
                    <BlogCard
                        src={blog2}
                        tag="Oud & Amber"
                        title="The Secrets Behind Middle Eastern Oud Perfumery"
                        date="May 14, 2024"
                        readTime="3 min read"
                    />
                    <BlogCard
                        src={blog3}
                        tag="Florals"
                        title="How to Layer Florals for a Signature Scent"
                        date="Apr 8, 2024"
                        readTime="4 min read"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Blog

