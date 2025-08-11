import { Link } from "react-router-dom";
import "./Footer.css";

// ✅ Import logo
import logo from "../../assets/logos/modestoPaintProsDark2.svg";

export default function Footer() {
    return (
        <footer id="footer-2345">
            <div className="cs-container">
                <div className="cs-wrapper">
                    <div className="cs-content">
                        <Link to="/" className="cs-logo">
                            <img
                                className="cs-logo-img"
                                src={logo}
                                alt="Modesto Paint Pros company logo"
                                width="174"
                                height="28"
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>

                        <p className="cs-text">
                            Modesto Paint Pros is your trusted local team for interior and exterior painting. Proudly serving homeowners and businesses throughout Stanislaus County.
                        </p>

                        <ul className="cs-nav">
                            <li className="cs-nav-li">
                                <Link to="/" className="cs-nav-link">Home</Link>
                            </li>
                            <li className="cs-nav-li">
                                <Link to="/about" className="cs-nav-link">About</Link>
                            </li>
                            <li className="cs-nav-li">
                                <Link to="/projects" className="cs-nav-link">Projects</Link>
                            </li>
                            <li className="cs-nav-li">
                                <Link to="/contact" className="cs-nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="cs-ul">
                        <li className="cs-li">
                            <span className="cs-header">Phone Number</span>
                            <a href="tel:+19256832180" className="cs-contact">+1 (209) 555-1234</a>
                        </li>
                        <li className="cs-li">
                            <span className="cs-header">Email Address</span>
                            <a href="mailto:info@modestopaintpros.com" className="cs-contact">info@modestopaintpros.com</a>
                        </li>
                        <li className="cs-li">
                            <span className="cs-header">Office Hours</span>
                            <span className="cs-contact">Mon - Sat <br />9:00 am - 6:00 pm</span>
                        </li>
                        <li className="cs-li">
                            <span className="cs-header">Office Address</span>
                            <span className="cs-contact">
                                1436 Sutter Ave, <br />
                                Modesto, CA, 95354
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="cs-bottom">
                    <span className="cs-copyright">
                        © Copyright {new Date().getFullYear()} - <Link className="cs-copyright-link" to="/">Modesto Paint Pros</Link>
                    </span>
                    {/* <div className="cs-terms">
                        <Link to="/terms" className="cs-copyright-link">Terms & Conditions</Link>
                        <span className="cs-divider">|</span>
                        <Link to="/privacy" className="cs-copyright-link">Privacy Policy</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
