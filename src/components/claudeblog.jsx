import { motion } from 'framer-motion'
import blog1 from '../assets/img/blog1.jpg'
import blog2 from '../assets/img/blog2.webp'
import { Title } from './sectionTitle'

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
}

function BlogCard({ src, tag, title, date, readTime, large = false, delay = 0 }) {
    return (
        <motion.div
            variants={scaleIn}
            className={`relative overflow-hidden rounded-[4px]! cursor-pointer group ${large ? 'h-[420px]!' : 'flex-1!'}`}
            style={{ background: '#111' }}
        >
            <img
                src={src}
                alt={title}
                className="w-full! h-full! object-cover! transition-all! duration-700! ease-in-out! group-hover:scale-105! group-hover:brightness-50! group-hover:saturate-50! brightness-75! saturate-75!"
            />

            {/* Gold bottom line on hover */}
            <motion.div
                className="absolute! bottom-0! left-0! h-[2px]! bg-[#c9a96e]!"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
            />

            {/* Overlay */}
            <div
                className="absolute! bottom-0! left-0! right-0! p-[24px]!"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)' }}
            >
                <span
                    className="inline-block! text-[9px]! tracking-[2px]! uppercase! font-semibold! px-[10px]! py-[4px]! rounded-[2px]! mb-[10px]!"
                    style={{ background: '#c9a96e', color: '#0a0a0a' }}
                >
                    {tag}
                </span>

                <h3
                    className={`font-bold! text-[#f0e6d3]! leading-[1.35]! mb-[14px]! ${large ? 'text-[24px]!' : 'text-[18px]!'}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {title}
                </h3>

                <div className="flex! items-center! gap-[16px]!">
                    <span className="text-[11px]! tracking-[1px]! text-[#8a7a65]!">{date}</span>
                    <span className="text-[11px]! tracking-[1px]! text-[#c9a96e]!">
                        <i className="fas fa-book mr-[5px]!"></i>{readTime}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

function Blog() {
    return (
        <section
            className="px-[60px]! py-[80px]!"
            style={{ background: '#0a0a0a' }}
        >
            {/* Section label */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex! items-center! gap-[10px]! mb-[12px]!"
            >
                <div className="w-[30px]! h-[1px]! bg-[#c9a96e]!"></div>
                <span className="text-[11px]! tracking-[4px]! uppercase! font-medium! text-[#c9a96e]!">
                    Journal
                </span>
            </motion.div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[42px]! font-semibold! leading-[1.1]! mb-[48px]! text-[#f0e6d3]!"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Scent Stories &<br />Fragrance Notes
            </motion.h2>

            {/* Cards Grid */}
            <motion.div
                className="grid! gap-[20px]!"
                style={{ gridTemplateColumns: '1.4fr 1fr' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
            >
                {/* Main large card */}
                <BlogCard
                    src={blog1}
                    tag="Featured"
                    title="Discover the Art of Fragrance: A Guide to Perfume Types and Notes"
                    date="June 20, 2024"
                    readTime="5 min read"
                    large={true}
                />

                {/* Side — 2 smaller cards stacked */}
                <motion.div
                    className="flex! flex-col! gap-[20px]! h-[420px]!"
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
                        src={blog1}
                        tag="Florals"
                        title="How to Layer Florals for a Signature Scent"
                        date="Apr 8, 2024"
                        readTime="4 min read"
                    />
                </motion.div>
            </motion.div>

            {/* View All link */}
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex! items-center! gap-[8px]! mt-[32px]! text-[12px]! tracking-[2px]! uppercase! text-[#c9a96e]! cursor-pointer! group!"
                style={{ borderBottom: '1px solid rgba(201,169,110,0.2)', paddingBottom: '4px' }}
            >
                View all articles
                <i className="fas fa-arrow-right transition-transform! duration-300! group-hover:translate-x-2!"></i>
            </motion.a>
        </section>
    )
}

export default Blog