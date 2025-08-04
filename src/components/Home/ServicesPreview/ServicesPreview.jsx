import "./ServicesPreview.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Import icons
import paintRollerIcon from "../../../assets/home/paint-roller.svg";
import houseIcon from "../../../assets/home/house.svg";
import cabinetIcon from "../../../assets/home/cabinet.svg";
import wallIcon from "../../../assets/home/wall.svg";

export default function ServicesPreview() {
    useScrollFadeIn();

    return (
        <section id="services-1623">
            <div className="cs-container">
                <ul className="cs-card-group">
                    <li className="cs-item scroll-fade delay-2">
                        <a href="/services/interior" className="cs-link">
                            <img
                                className="cs-icon"
                                src={paintRollerIcon}
                                loading="lazy"
                                decoding="async"
                                alt="Modesto interior painting icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Interior Painting</h2>
                            <p className="cs-item-text">
                                Transform your Modesto home's living spaces with clean lines, bold colors, and a flawless finish customized to your style.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="/services/exterior" className="cs-link">
                            <img
                                className="cs-icon"
                                src={houseIcon}
                                loading="lazy"
                                decoding="async"
                                alt="Modesto exterior house painting icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Exterior Painting</h2>
                            <p className="cs-item-text">
                                Boost curb appeal and protect your property with weather-resistant exterior painting built for Modesto’s climate.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="/services/cabinet-refinishing" className="cs-link">
                            <img
                                className="cs-icon"
                                src={cabinetIcon}
                                loading="lazy"
                                decoding="async"
                                alt="Cabinet painting and refinishing icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Cabinet Refinishing</h2>
                            <p className="cs-item-text">
                                Refinish your kitchen or bathroom cabinets with a sleek coat of paint or stain that adds lasting value and beauty.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item scroll-fade delay-2">
                        <a href="/services/drywall-repair" className="cs-link">
                            <img
                                className="cs-icon"
                                src={wallIcon}
                                loading="lazy"
                                decoding="async"
                                alt="Drywall repair services in Modesto icon"
                                width="48"
                                height="48"
                                aria-hidden="true"
                            />
                            <h2 className="cs-h3 scroll-fade delay-4">Drywall Repair & Prep</h2>
                            <p className="cs-item-text">
                                We patch, smooth, and prep damaged drywall so every paint job starts with a flawless foundation.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
