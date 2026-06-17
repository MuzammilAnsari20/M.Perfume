
import footerlogo from "@/assets/img/mainLogo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faPinterest, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {

    return (
        <section className="h-[60vh] monitor-md:h-[40vh] max-md:h-full max-md:py-[30px]! desktop-md:h-[40vh] bg-[#3b004a] bg-[radial-gradient(circle,rgba(59,0,74,1)_0%,rgba(13,0,16,1)_100%)] flex justify-center items-center">
           <div className="px-[50px]! monitor-md:px-[100px]! w-full h-fit grid grid-cols-[repeat(4,_1fr)] max-md:grid-cols-[repeat(1,_1fr)] gap-10">
               
               <div className="flex flex-col max-md:items-center max-md:text-center gap-15 max-md:gap-5 h-fit">
                  <img className="w-[13vw] max-md:w-[50%] monitor-md:w-[16vw]" src={footerlogo} alt="footerlogo" />
                  <p className="text-[12px]! monitor-md:text-[34px]! font-light">If you wish to be remembered, choose a fragrance that leaves its mark on the heart. A scent so unforgettable that years later, whenever it is worn by someone else, your memory returns with every breath.</p>
                  <div className="flex w-full max-md:justify-center gap-2 text-[#ef8aff] monitor-md:text-[44px]!">
                      <FontAwesomeIcon icon={faInstagram} />
                      <FontAwesomeIcon icon={faTiktok} />
                      <FontAwesomeIcon icon={faYoutube} />
                      <FontAwesomeIcon icon={faPinterest} />
                  </div>
               </div>
               
               <div className="flex flex-col gap-5 h-fit">
                  <h1 className="text-[1.4vw] max-md:text-[24px] max-md:text-center monitor-md:text-[2vw]! Poppins">Contact</h1>
                  <form action="" className="w-full">
                     <input type="text" placeholder="Name" className="w-full border-b-2 py-2! font-light text-[12px] monitor-md:text-[34px]"/>
                     <input type="email" placeholder="Email" className="w-full border-b-2 py-2! font-light text-[12px] monitor-md:text-[34px]"/>
                     <textarea type="text" placeholder="Message" className="w-full border-b-2 py-2! font-light text-[12px] monitor-md:text-[34px]"/>
                     <button className="py-[10px]! mt-3! text-center w-full bg-[#b548fe] text-black Poppins rounded text-[12px] monitor-md:text-[34px]">Submit</button>
                  </form>
               </div>
               
               <div className="flex flex-col gap-5 text-center h-fit">
                  <h1 className="text-[1.4vw] max-md:text-[24px] max-md:text-center Poppins monitor-md:text-[2vw]!">Quick Links</h1>
                  <ul className="gap-2 flex flex-col text-center text-[13px] monitor-md:text-[34px] font-light">
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Men</Link>
                    </li>
                    <li>
                        <Link>Women</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                  </ul>
               </div>

               <div className="flex flex-col max-md:text-center gap-5 h-fit">
                  <h1 className="text-[1.4vw] max-md:text-[24px] max-md:text-center  Poppins monitor-md:text-[2vw]!">Address</h1>
                  <p className="text-[13px]! font-light monitor-md:text-[34px]!">House 401, Street 54th,Block 1 Liaquatabad Karachi, Sindh Pakistan </p>
                  <div className="flex gap-1 max-md:justify-center"><FontAwesomeIcon className="monitor-md:text-[48px]" icon={faWhatsapp}/><p className="text-[13px]! font-light monitor-md:text-[34px]!">+92 3121230283</p></div>
                  <div className="flex gap-1 max-md:justify-center"><FontAwesomeIcon className="monitor-md:text-[48px]" icon={faCopyright}/><p className="text-[13px]! font-light monitor-md:text-[34px]!">Copy right 2026 launched By Muzammil Ansari</p></div>
               </div>

           </div>
        </section>
    )
}