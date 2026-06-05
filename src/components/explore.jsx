import { motion } from "framer-motion"
import women from "../assets/img/women.png";
import men from "../assets/img/men.png";

function Explore() {
    return (
        <div className="
        box-border w-full h-[80vh] flex items-center justify-center my-[30px]! overflow-hidden
        max-md:h-[35vh]">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                // 1. group class lagayi taaki child components iske hover par react karein
                // 2. overflow-hidden lagaya taaki picture cut se bahar na nikle
                className="doo-hi group relative overflow-hidden w-[45%] h-[90%] flex items-end justify-end cursor-pointer max-md:w-[55%] max-md:h-full"
            >
                {/* Background Image Div (Sirf ye scale hoga) */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${women})` }}
                />

                {/* Content Box */}
                <div className="relative z-10 bg-[#ff93fd59] w-[40%] max-md:w-full transition-all duration-300 ease-in-out group-hover:w-full p-[20px]! max-md:p-[5px]!">
                    <h3 className="font-bold text-white max-md:text-[14px]">Women's Perfume</h3>
                    <h5 className="font-light text-[12px] text-white">Explore</h5>
                </div>
            </motion.div>

            {/* ================= Men Card ================= */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                // Same concept: group, relative aur overflow-hidden
                className="group relative overflow-hidden w-[45%] h-[90%] flex items-start cursor-pointer max-md:w-[55%] max-md:h-full"
                style={{
                    clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    zIndex: 2,
                }}
            >
                {/* Background Image Div (Sirf ye scale hoga) */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${men})` }}
                />

                {/* Content Box */}
                <div className="relative z-10 bg-[#ff93fd59] w-[40%] max-md:w-full transition-all duration-300 ease-in-out group-hover:w-full p-[20px]! max-md:p-[5px]! flex flex-col items-end ">
                    <h3 className="font-bold text-white max-md:text-[14px]">Men's Perfume</h3>
                    <h5 className="font-light text-[12px] text-white">Explore</h5>
                </div>
            </motion.div>

        </div>
    );
}
export default Explore;