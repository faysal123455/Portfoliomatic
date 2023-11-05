import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-foot">
                <div className="width">
                    <div className="footer-col">
                        <h4 className="headline">Bookshare</h4>
                        <ul className="fu">
                            <li><a className="leg" href="#">about us</a></li>
                            <li><a className="leg" href="#">our services</a></li>
                            <li><a className="leg" href="#">privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="headline">get help</h4>
                        <ul className="fu">
                            <li><a className="leg" href="#">FAQ</a></li>
                            <li><a className="leg" href="#">shipping</a></li>
                            <li><a className="leg" href="#">returns</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="headline">Quick Links</h4>
                        <ul className="fu">
                            <li><a className="leg" href="#">Portfolio</a></li>
                            <li><a className="leg" href="#">About Us</a></li>
                            <li><a className="leg" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="headline">follow us</h4>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;