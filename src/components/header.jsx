import main_logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <div className="bg-black text-[#bbb] flex justify-between  px-[100px]! max-md:px-[20px]! py-2! text-[13px] border-b border-[#222] ">
                <div className="flex gap-[10px] w-full justify-between">
                    <div className="pr-[10px]! border-r border-[#c300eb] max-md:text-[10px]">Phone: +92 3121230283</div>
                    <div className="max-md:text-[10px]">Email: MMuzammil2311F@aptechorangi.com</div>
                </div>
                <div className="flex gap-[10px] max-md:hidden">
                    <div className="pr-[10px]! border-r border-[#c300eb] max-md:text-[6px]">Gift Card</div>
                    <div className="pr-[10px]! border-r border-[#c300eb] max-md:text-[6px]">Track Order</div>
                    <div className="max-md:text-[4px]">Contact Us</div>
                </div>
            </div>

            <div className="bg-black flex items-center justify-between px-[100px]! max-md:px-[20px]! relative">
                <div className="w-[90px] max-md:w-[80px]">
                    <img className='w-full' src={main_logo} alt="" />
                </div>

                <ul className="nav-links flex list-none gap-[35px]" id="navLinks">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>Home</NavLink></li>
                    <li><NavLink to="/men" className={({isActive}) => isActive ? "active" : "" }>Men</NavLink></li>
                    <li><NavLink to="/women" className={({isActive}) => isActive ? "active" : "" }>Women</NavLink></li>
                    <li><NavLink to="/contact-me" className={({isActive}) => isActive ? "active" : "" }>Contact</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : "" }>About</NavLink></li>
                </ul>

                <div className="nav-icons max-md:hidden">
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer"><i className="fas fa-search"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer"><i className="fas fa-heart"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer"><i className="fas fa-shopping-cart"></i></span>
                    <span className="text-[#D361EB] ml-[15px]! cursor-pointer"><i className="fas fa-user"></i></span>
                </div>

                <div className="hidden flex cursor-pointer gap-[5px]" id="hamburger">
                    <span className='text-[18px]! text-[#ffffff]'><FontAwesomeIcon icon={faBars} /></span>
                    <span className='text-[18px]! text-[#ffffff]'><FontAwesomeIcon icon={faCartShopping} /></span>
                </div>
            </div>
            {/* <h1>Header</h1> */}
        </>
    );
}
export default Header