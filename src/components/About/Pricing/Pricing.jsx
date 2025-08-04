import "./Pricing.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

import checkIcon from "../../../assets/icons/mech-check.svg";

export default function Pricing() {
    useScrollFadeIn();

    const plans = [
        {
            title: "Residential Painting",
            price: "Free Estimates",
            features: [
                "Interior walls, ceilings, and trim",
                "Exterior siding, doors, and accents",
                "Color matching and consultation",
                "Flexible scheduling",
                "Surface preparation included",
                "Licensed & insured professionals"
            ],
            disabled: [] // show all features
        },
        {
            title: "Commercial Projects",
            price: "Custom Quotes",
            features: [
                "Office buildings & retail spaces",
                "Evening & weekend availability",
                "Durable, long-lasting coatings",
                "Pressure washing & prep",
                "Licensed & insured crew",
                "Satisfaction guaranteed"
            ],
            disabled: [] // show all features
        }
    ];

    return (
        <section id="pricing-1103-1112">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-content">
                    <span className="cs-topper">Pricing</span>
                    <h2 className="cs-title">Estimates You Can Trust</h2>
                    <p className="cs-text">
                        Every project is unique, which is why Modesto Paint Pros offers free, no-obligation estimates tailored to your specific needs. Whether it's a fresh coat for your home or a full commercial job, we’ll work with your budget and timeline.
                    </p>
                    <a href="/contact" className="cs-button-solid">Request a Free Estimate</a>
                </div>
                <ul className="cs-card-group">
                    {plans.map((plan, idx) => (
                        <li className="cs-item" key={idx}>
                            <span className="cs-package">{plan.title}</span>
                            <span className="cs-price">{plan.price}</span>
                            <ul className="cs-ul">
                                {plan.features.map((feature, i) => (
                                    <li className="cs-li" key={i}>
                                        {feature}
                                        <img
                                            className="cs-icon"
                                            aria-hidden="true"
                                            loading="lazy"
                                            decoding="async"
                                            src={checkIcon}
                                            alt="checkmark"
                                            width="18"
                                            height="18"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
