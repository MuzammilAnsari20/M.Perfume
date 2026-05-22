import user_icon from '../../assets/img/Admin/users.png'
import views_icon from '../../assets/img/Admin/views.png'
import profit_icon from '../../assets/img/Admin/profit.png'
import Table from '../components/table';
import { motion } from "framer-motion";

function Dashboard() {

    return (
        <>

            <div className="relative overflow-x-auto px-10! py-10! w-full h-screen">

                <div className="grid grid-cols-2 gap-2">

                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        className="shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)] px-5! py-10! flex justify-around items-center gap-[20px] rounded-[6px] bg-[#03030364]">
                        <div>
                            <h1 className="text-white font-bold font-[Poppins] text-[16px]">Total Product</h1>
                            <h6 className='text-[13px] font-[Poppins] text-white font-medium'>1,2345</h6>
                        </div>
                        <div>
                            <img src={user_icon} alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        className="shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)] px-5! py-10! flex justify-around items-center gap-[20px] rounded-[6px] bg-[#03030364]">
                        <div>
                            <h1 className="text-white font-bold font-[Poppins] text-[16px]">Total Views</h1>
                            <h6 className='text-[13px] font-[Poppins] text-white font-medium'>1,2345</h6>
                        </div>
                        <div>
                            <img src={views_icon} alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        className="col-span-2 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)] px-22! py-10! flex justify-between items-center gap-[20px] rounded-[6px] bg-[#03030364]">
                        <div>
                            <h1 className="text-white font-bold font-[Poppins] text-[16px]">Orders</h1>
                            <h6 className='text-[13px] font-[Poppins] text-white font-medium'>1,2345</h6>
                        </div>
                        <div>
                            <img src={profit_icon} alt="" />
                        </div>
                    </motion.div>
                </div>
                <br />
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                    >
                        <h1 className="text-center text-white font-bold font-[Poppins] text-[12px]">**************  Orders Table Here **************</h1>
                        {/* <Table /> */}
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;

