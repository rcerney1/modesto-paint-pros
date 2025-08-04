import "./ExteriorServices.css";
import interiorImg from "/src/assets/home/house-painter-d.webp";
import exterior1 from "/src/assets/services/exterior1.webp"
import exterior2 from "/src/assets/services/exterior2.webp"
import paintIcon from "/src/assets/home/paint-roller.svg";
import hoseIcon from "/src/assets/icons/hose.svg";
import wallIcon from "/src/assets/home/wall.svg";
import fenceIcon from "/src/assets/icons/fence.svg";
import windowIcon from "/src/assets/icons/window.svg";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function ExteriorServices() {
    useScrollFadeIn();

    const services = [
        {
            icon: paintIcon,
            title: "Exterior Painting",
            desc: "Refresh your home’s exterior with durable, weather-resistant paint that enhances curb appeal and protects from sun, wind, and rain."
        },
        {
            icon: hoseIcon,
            title: "Power Washing",
            desc: "Remove dirt, grime, and mildew with high-pressure washing that prepares surfaces for paint or simply revives their original look."
        },
        {
            icon: wallIcon,
            title: "Stucco & Siding Repair",
            desc: "Fix cracks, holes, and surface damage in stucco or siding to restore your home’s structure and create a smooth finish for paint."
        },
        {
            icon: fenceIcon,
            title: "Deck & Fence Painting",
            desc: "Protect and beautify wood surfaces with paint or stain that resists moisture, sun damage, and everyday wear."
        },
        {
            icon: windowIcon,
            title: "Exterior Trim & Fascia",
            desc: "Revive trim, fascia boards, and accents with crisp paint lines and weatherproof coatings that tie your whole exterior together."
        }
    ];



    return (
        <>
            <section id="content-page-1399">
                <div className="cs-container">
                    <div className="cs-image-group scroll-fade delay-2">
                        <picture className="cs-image stagger-1">
                            <img src={exterior2} alt="Interior Work 1" loading="lazy" decoding="async" />
                        </picture>
                        <picture className="cs-image stagger-2">
                            <img src={exterior1} alt="Interior Work 2" loading="lazy" decoding="async" />
                        </picture>
                    </div>


                    <div className="cs-content scroll-fade delay-2">
                        <h1 className="cs-title scroll-fade delay-3">
                            Exterior <span className="cs-color">Painting Services</span>
                        </h1>
                        <div className="scroll-fade delay-4">
                            <h2>Trusted Exterior Painters in Modesto</h2>
                            <h3>Boost Your Curb Appeal with a Flawless Finish</h3>
                            <p>
                                At Modesto Paint Pros, we specialize in exterior painting services that protect your property and enhance its visual appeal. Whether you're refreshing a faded paint job or preparing a home for sale, our skilled painters deliver durable results that stand up to California weather.
                            </p>
                            <p>
                                We start with thorough prep work—from scraping and sanding to priming and caulking—to ensure smooth application and long-lasting adhesion. Our team uses premium paints and proven techniques to resist sun damage, moisture, and peeling.
                            </p>

                            <h3>Complete Exterior Solutions, Start to Finish</h3>
                            <p>
                                We go beyond walls. Our exterior painting services include touch-ups for stucco and siding, pressure washing, deck and fence painting, and more. Everything is handled by trained professionals who show up on time and keep your property clean.
                            </p>
                            <p>
                                Let us help you protect and revitalize your home or business with a finish that lasts.
                            </p>

                            <h3>Serving Modesto and Surrounding Areas</h3>
                            <p>
                                We proudly serve property owners in Modesto, Ceres, Riverbank, Oakdale, and the greater Stanislaus County area. If you're looking for reliable exterior painters near you, we’re here to help.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section id="interior-services-grid">
                <div className="cs-grid-container scroll-fade delay-2">
                    <h2 className="cs-grid-title">Our Interior Services Include</h2>
                    <ul className="cs-service-card-grid">
                        {services.map((service, index) => (
                            <li key={index} className="cs-card">
                                <img src={service.icon} alt="" className="cs-card-icon" />
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
