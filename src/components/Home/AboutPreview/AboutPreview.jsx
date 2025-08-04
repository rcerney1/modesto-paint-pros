import "./AboutPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";


import diamondIcon from "../../../assets/home/diamond.svg";
import buildingIcon from "../../../assets/home/building-white.svg";
import trophyIcon from "../../../assets/home/trophy-white.svg";
import painterMobile from "../../../assets/home/painter-m.webp";
import painterDesktop from "../../../assets/home/painter-d.webp";
import paintBrush from "../../../assets/home/paint-brush.webp";

export default function AboutPreview() {
    useScrollFadeIn();

    return (
        <section id="sbs-2277">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-content">
                    <div className="cs-header scroll-fade delay-4">
                        <span className="cs-topper">Why Choose Us</span>
                        <h2 className="cs-title">Why Homeowners Trust Modesto Paint Pros</h2>
                    </div>
                    <div className="cs-wrapper">
                        <div className="cs-flex">
                            <p className="cs-text">
                                At Modesto Paint Pros, we combine expert craftsmanship with friendly, personalized service. We’re proud to be a trusted name for homeowners and businesses across Modesto and the Central Valley.
                            </p>
                            <ul className="cs-ul">
                                <li className="cs-li">
                                    <img className="cs-icon" src={diamondIcon} alt="Experience icon" />
                                    <p className="cs-item-text">
                                        <strong>Skilled Craftsmanship:</strong> Our painters are trained to deliver smooth, clean, professional finishes every time.
                                    </p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src={diamondIcon} alt="Reliable Service icon" />
                                    <p className="cs-item-text">
                                        <strong>On-Time & On-Budget:</strong> We show up when we say we will, and we don’t surprise you with extra charges.
                                    </p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src={diamondIcon} alt="Local Trust icon" />
                                    <p className="cs-item-text">
                                        <strong>Locally Trusted:</strong> Our team has painted hundreds of homes and businesses right here in Modesto.
                                    </p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src={diamondIcon} alt="Transparent pricing icon" />
                                    <p className="cs-item-text">
                                        <strong>Transparent Pricing:</strong> No surprises, no gimmicks — just clear, upfront quotes with everything included.
                                    </p>
                                </li>
                                <li className="cs-li">
                                    <img className="cs-icon" src={diamondIcon} alt="Clean painting crew icon" />
                                    <p className="cs-item-text">
                                        <strong>Clean, Respectful Crews:</strong> We treat your home like it’s our own and clean up thoroughly after every job.
                                    </p>
                                </li>


                            </ul>

                            <a href="/about" className="cs-button-solid">Learn More About Us</a>
                        </div>
                        <div className="cs-image-group">
                            <ul className="cs-card-group">
                                <li className="cs-item scroll-fade delay-4">
                                    <img className="cs-item-icon" src={buildingIcon} alt="building icon" />
                                    <span className="cs-number">
                                        50+<span className="cs-desc">Communities Served</span>
                                    </span>
                                </li>
                                <li className="cs-item black-variant scroll-fade delay-4">
                                    <img className="cs-item-icon" src={trophyIcon} alt="trophy icon" />
                                    <span className="cs-number">
                                        98%<span className="cs-desc">Customer Satisfaction Rate</span>
                                    </span>
                                </li>
                            </ul>
                            <picture className="cs-picture">
                                <source media="(max-width: 600px)" srcSet={painterMobile} />
                                <source media="(min-width: 601px)" srcSet={painterDesktop} />
                                <img src={painterDesktop} alt="Professional house painter working on roof in Modesto, CA" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <img className="cs-floater scroll-fade delay-2" src={paintBrush} alt="paint brush" />
        </section>
    );
}
