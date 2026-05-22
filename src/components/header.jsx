import main_logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="top-bar">
                <div className="right-bar">
                    <div className="phon">Phone: +92 3121230283</div>
                    <div className="email">Email: MMuzammil2311F@aptechorangi.com</div>
                </div>
                <div className="left-bar">
                    <div>Gift Card</div>
                    <div>Track Order</div>
                    <div>Contact Us</div>
                </div>
            </div>

            <div className="navbar">
                <div className="logo">
                    <img src={main_logo} alt="" />
                </div>

                <ul className="nav-links" id="navLinks">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>Home</NavLink></li>
                    <li><NavLink to="/men" className={({isActive}) => isActive ? "active" : "" }>Men</NavLink></li>
                    <li><NavLink to="/women" className={({isActive}) => isActive ? "active" : "" }>Women</NavLink></li>
                    <li><NavLink to="/contact-me" className={({isActive}) => isActive ? "active" : "" }>Contact</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : "" }>About</NavLink></li>
                </ul>

                <div className="nav-icons">
                    <span className="text-[#D361EB]"><i className="fas fa-search"></i></span>
                    <span className="text-[#D361EB]"><i className="fas fa-heart"></i></span>
                    <span className="text-[#D361EB]"><i className="fas fa-shopping-cart"></i></span>
                    <span className="text-[#D361EB]"><i className="fas fa-user"></i></span>
                </div>

                <div className="hamburger" id="hamburger">
                    <span className="text-[#D361EB]"></span>
                    <span className="text-[#D361EB]"></span>
                    <span className="text-[#D361EB]"></span>
                </div>
            </div>
            {/* <h1>Header</h1> */}
        </>
    );
}
export default Header