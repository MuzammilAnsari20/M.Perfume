import { motion } from "framer-motion"

export const Title = ({subtitle, title}) => {
    return(
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ type: "spring", damping: 12, stiffness: 100 }} className="text desktop-md:leading-10! monitor-md:leading-20! flex w-full flex-col items-center justify-center mb-10">
            <h6 className="text-[#E670FB] text-[14px]! desktop-md:text-[18px]! monitor-md:text-[42px]! tracking-[5px]! monitor-md:tracking-[12px]! max-md:text-[11px]! uppercase font-medium">
                {subtitle}
            </h6>
            <h5 className="text-[32px]! max-md:text-[24px]! desktop-md:text-[42px]! monitor-md:text-[2.5vw]! font-bold text-white mt-2 text-center">{title}</h5>
        </motion.div>
    )
}