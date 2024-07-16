import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-foot">
                <div className="width">
                    <div className="footer-col">
                        <h4 className="headline">Portfoliomatic</h4>
                        <ul className="fu">
                            <li><a className="leg" href="#">about us</a></li>
                            <li><a className="leg" href="#">our services</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="headline">get help</h4>
                        <ul className="fu">
                            <li><a className="leg" href="#">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="headline">Quick Links</h4>
                        <ul className="fu">
                            <li><a className="leg" href="#">Portfolio</a></li>
                            <li><a className="leg" href="#">About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="headline">follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                            <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;