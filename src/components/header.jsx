import { useState } from 'react';
import main_logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className="bg-black text-[#bbb] flex justify-between  px-[100px]! max-md:px-[10px]! monitor-md:py-[40px]! py-2! text-[13px] border-b border-[#222] max-md:hidden">
                <div className="flex gap-[10px]">
                    <div className="pr-[10px]! border-r border-[#c300eb] max-md:text-[6px] desktop-md:text-[16px] monitor-md:text-[34px]">Phone: +92 3121230283</div>
                    <div className="max-md:text-[6px] desktop-md:text-[16px] monitor-md:text-[34px]">Email: MMuzammil2311F@aptechorangi.com</div>
                </div>
                <div className="flex gap-[10px]">
                    <div className="pr-[10px]! border-r border-[#c300eb] max-md:text-[6px] desktop-md:text-[16px] monitor-md:text-[34px]">Gift Card</div>
                    <div className="pr-[10px]! border-r border-[#c300eb] max-md:text-[6px] desktop-md:text-[16px] monitor-md:text-[34px]">Track Order</div>
                    <div className="max-md:text-[4px] desktop-md:text-[16px] monitor-md:text-[34px]">Contact Us</div>
                </div>
            </div>

            <div className="bg-black flex items-center justify-between px-[100px]! max-md:px-[20px]! relative">
                <div className="w-[7vw] max-md:w-[20%]">
                    <img className='w-full' src={main_logo} alt="" />
                </div>

                <ul className="nav-links flex list-none gap-[35px] max-md:hidden" id="navLinks">
                    <li className='text-[1.2vw]'><NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>Home</NavLink></li>
                    <li className='text-[1.2vw]'><NavLink to="/men" className={({isActive}) => isActive ? "active" : "" }>Men</NavLink></li>
                    <li className='text-[1.2vw]'><NavLink to="/women" className={({isActive}) => isActive ? "active" : "" }>Women</NavLink></li>
                    <li className='text-[1.2vw]'><NavLink to="/contact-me" className={({isActive}) => isActive ? "active" : "" }>Contact</NavLink></li>
                    <li className='text-[1.2vw]'><NavLink to="/about" className={({isActive}) => isActive ? "active" : "" }>About</NavLink></li>
                </ul>

                <div className="nav-icons max-md:hidden">
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer desktop-md:text-[24px] monitor-md:text-[44px]"><i className="fas fa-search"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer desktop-md:text-[24px] monitor-md:text-[44px]"><i className="fas fa-heart"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer desktop-md:text-[24px] monitor-md:text-[44px]"><i className="fas fa-shopping-cart"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer desktop-md:text-[24px] monitor-md:text-[44px]"><i className="fas fa-user"></i></span>
                </div>

                <div className="hidden  max-md:flex cursor-pointer gap-[5px]" id="hamburger" onClick={toggleMenu}>
                    <span className='text-[18px]! text-[#ffffff]'><FontAwesomeIcon icon={faBars} /></span>
                    <span className='text-[18px]! text-[#ffffff]'><FontAwesomeIcon icon={faCartShopping} /></span>
                </div>
            </div>
            <div id="hellos" className={isActive ? "active" : ""}>
               <div className="w-full bg-[#11001f] hidden max-md:flex flex-col gap-[20px] h-full justify-center items-center py-[20px]! text-[#bbb]">
                <ul className="nav-links flex flex-col text-center list-none gap-[5px]" id="navLinks">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>Home</NavLink></li>
                    <li><NavLink to="/men" className={({isActive}) => isActive ? "active" : "" }>Men</NavLink></li>
                    <li><NavLink to="/women" className={({isActive}) => isActive ? "active" : "" }>Women</NavLink></li>
                    <li><NavLink to="/contact-me" className={({isActive}) => isActive ? "active" : "" }>Contact</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : "" }>About</NavLink></li>
                </ul>
                <div className="nav-icons">
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer"><i className="fas fa-search"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer"><i className="fas fa-heart"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer"><i className="fas fa-user"></i></span>
                </div>
               </div>
            </div>
        </>
    );
}
export default Header