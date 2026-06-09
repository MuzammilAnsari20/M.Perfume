import { motion } from 'framer-motion'
import box1 from '../assets/img/offer_section/box1.png'
import box2 from '../assets/img/offer_section/box2.png'
import box3 from '../assets/img/offer_section/box3.png'
import box4 from '../assets/img/offer_section/box4.png'

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

function OfferSection() {

    const items = [
        {src: box1, title: "Up To 40% Offer", desc: "On all your perfume"},
        {src: box2, title: "Perfume Variety", desc: "Making your gift box"},
        {src: box3, title: "Free Shipping", desc: "On order from $500+"},
        {src: box4, title: "Easy Return", desc: "Return within 15 days"}
    ]
    return (
        <motion.section className="flex justify-center items-center gap-[30px] max-md:gap-0! w-full px-[10px]! py-[50px]! max-md:py-[10px]!"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, margin: "-5% -0px" }}
        >

        {items.map((i, idx) => (
            <motion.div key={idx} className=" max-md:flex-col max-md:text-center px-[10px]!  max-md:px-[2px]! py-[10px]! flex align-center desktop-md:w-[20%] monitor-md:w-[20%] desktop-md:gap-[14px]" variants={childVariants}>
                <div className="align-center flex justify-center desktop-md:w-[25%] monitor-md:w-[20%] desktop-md:aspect-square">
                    <img src={i.src} className='w-full' alt={i.src} />
                </div>
                <div className="flex align-center justify-center flex-col">
                    <h4 className="text-[16px] desktop-md:text-[26px] max-md:text-[10px] monitor-md:text-[40px] max-md:text-center">{i.title}</h4>
                    <p className="text-[12px] desktop-md:text-[18px]! text-[#bbb] monitor-md:text-[30px]! max-md:text-[10px]! max-md:text-center">{i.desc}</p>
                </div>
            </motion.div>
        ))}
        </motion.section>
    );
}
export default OfferSection;