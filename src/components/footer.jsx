import { Link } from 'react-router-dom';
import aura from '../assets/img/footer_img/aura.png'
import hero from '../assets/img/footer_img/hero.png'
import flower from '../assets/img/footer_img/flower.png'
import aura1 from '../assets/img/footer_img/aura1.png'
import logo_white from '../assets/img/logo_white.png'

function Footer() {

    return (
        <section className="footer">

            <div className="floating-bg">
                <img src={aura} className="float p1" />
                <img src={hero} className="float p2" />
                <img src={flower} className="float p3" />
                <img src={flower} className="float p4" />
                <img src={aura1} className="float p5" />
                <img src={hero} className="float p6" />
            </div>

            <div className="footer_content">

                <div className="subscription">
                    <h2>Subscribe now and receive 10% off <br /> your first order!</h2>
                    <div className="input-group">
                        <input type="email" placeholder="Email" />
                        <button>Subscribe</button>
                    </div>
                </div>

                <div className="main-content">

                    <div className="logo">
                        <div className="logo-img">
                            <img src={logo_white} alt="" />
                        </div>
                        <p>M. Shopify is a dynamic and innovative online retail platform that offers a wide range of
                            products to customers worldwide.</p>
                    </div>

                    <div className="contacts">
                        <div className="iconpcon">
                            <i className="fas fa-phone"></i>
                            <p>031212 30283</p>
                        </div>
                        <div className="iconpcon">
                            <i className="fas fa-envelope"></i>
                            <p>MMuzammil2311F@aptechorangi.com</p>
                        </div>
                    </div>

                    <div className="quick_links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="">Men</Link></li>
                            <li><Link to="">Women</Link></li>
                            <li><Link to="">About</Link></li>
                            <li><Link to="">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="copy_right">

                    <p>Copyright © 2026 M. All rights reserved.</p>
                    <div className="social_icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>

                </div>

            </div>

        </section>
    );
}
export default Footer;
