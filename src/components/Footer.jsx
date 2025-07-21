import logo from "../assets/images/alireza1.png";
import sprite from "../assets/SVGs/sprite.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logos">
                <div className="footer__logos-container">
                    <img
                        className="footer__logos-name"
                        src={logo}
                        alt="logo name"
                    />
                </div>
                <div className="footer__logos-social">
                    <svg className="icon__footer icon__footer-whatsapp">
                        <use xlinkHref={`${sprite}#icon-whatsapp`}></use>
                    </svg>
                    <svg className="icon__footer icon__footer-telegram">
                        <use xlinkHref={`${sprite}#icon-telegram`}></use>
                    </svg>
                    <svg className="icon__footer icon__footer-instagram">
                        <use xlinkHref={`${sprite}#icon-instagram`}></use>
                    </svg>
                    <svg className="icon__footer icon__footer-github">
                        <use xlinkHref={`${sprite}#icon-github`}></use>
                    </svg>
                    <svg className="icon__footer icon__footer-linkedin">
                        <use xlinkHref={`${sprite}#icon-linkedin`}></use>
                    </svg>
                </div>
            </div>
            <hr className="line" />
            <div className="footer__nav">
                <div className="footer__nav-1">
                    <p className="footer__nav-main">Company</p>
                    <hr className="footer__nav-line" />
                    <p>Home</p>
                    <p>Contact us</p>
                    <p>About us</p>
                    <p>Get started</p>
                </div>
                <div className="footer__nav-2">
                    <p className="footer__nav-main">Services</p>
                    <hr className="footer__nav-line" />
                    <p>App design</p>
                    <p>Logo design</p>
                    <p>Web design</p>
                </div>
                <div className="footer__nav-3">
                    <p className="footer__nav-main">Account</p>
                    <hr className="footer__nav-line" />
                    <p>Profile</p>
                    <p>My account</p>
                    <p>Preferences</p>
                    <p>Purchase</p>
                </div>
                <div className="footer__nav-4">
                    <p className="footer__nav-main">Courses</p>
                    <hr className="footer__nav-line" />
                    <p>HTML & CSS</p>
                    <p>JavaScript</p>
                    <p>Photography</p>
                    <p>Photoshop</p>
                </div>
                <div className="footer__nav-5 footer__input">
                    <p className="footer__nav-main">Subscribe</p>
                    <hr className="footer__nav-line" />
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="footer__nav-input"
                    />
                    <button className="footer__nav-button">Subscribe</button>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="footer__copyright-left">
                    Copyright &copy; 2025 . Based on a project by Jonas
                    Schmedtmann. Modified and extended by me for educational
                    purposes .
                </div>
                <div className="footer__copyright-right">
                    <p>Privacy policy</p>
                    <p>Terms & conditions</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
