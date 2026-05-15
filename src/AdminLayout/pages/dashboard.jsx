import user_icon from '../../assets/img/admin/users.png'

function Dashboard() {
    return (
        <>

            <div className="relative overflow-x-auto px-10! py-10! w-full h-[80vh]">

                <div className="grid grid-cols-3 gap-2">
                    
                    <div className="shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)] px-5! py-10! flex justify-around items-center gap-[20px] rounded-[6px] bg-[#03030364]">
                        <div>
                            <h1 className="text-white font-bold font-[Poppins] text-[16px]">Total Users</h1>
                            <h6 className='text-[13px] font-[Poppins] text-white font-medium'>1,2345</h6>
                        </div>
                        <div>
                            <img src={user_icon} alt="" />
                        </div>
                    </div>
                    

                </div>
            </div>

        </>
    )
}

export default Dashboard;