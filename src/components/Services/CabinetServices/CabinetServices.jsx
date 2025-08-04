import "./CabinetServices.css";
import cabinet1 from "/src/assets/services/exterior1.webp"
import cabinet2 from "/src/assets/services/exterior1.webp"
import prepIcon from "/src/assets/home/paint-roller.svg";
import sprayIcon from "/src/assets/home/paint-roller.svg";
import sandIcon from "/src/assets/home/paint-roller.svg";
import handleIcon from "/src/assets/home/paint-roller.svg";
import finishIcon from "/src/assets/home/paint-roller.svg";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function CabinetRefinishing() {
    useScrollFadeIn();

    const services = [
        {
            icon: prepIcon,
            title: "Surface Prep & Cleaning",
            desc: "Degreasing and sanding for a smooth, durable base."
        },
        {
            icon: sandIcon,
            title: "Sanding & Stripping",
            desc: "We remove old paint, lacquer, or stain to prepare for refinishing."
        },
        {
            icon: sprayIcon,
            title: "Spray Finishing",
            desc: "Professional-grade HVLP spraying for a factory-quality look."
        },
        {
            icon: handleIcon,
            title: "Hardware Replacement",
            desc: "Swap out old handles or knobs for a new, modern touch."
        },
        {
            icon: finishIcon,
            title: "Protective Topcoats",
            desc: "Durable finishes that resist moisture, grease, and wear."
        }
    ];

    return (
        <>
            <section id="content-page-1399">
                <div className="cs-container">
                    <div className="cs-image-group scroll-fade delay-2">
                        <picture className="cs-image stagger-1">
                            <img src={cabinet1} alt="Cabinet Refinishing Process" loading="lazy" decoding="async" />
                        </picture>
                        <picture className="cs-image stagger-2">
                            <img src={cabinet2} alt="Finished Kitchen Cabinets" loading="lazy" decoding="async" />
                        </picture>
                    </div>

                    <div className="cs-content scroll-fade delay-2">
                        <h1 className="cs-title scroll-fade delay-3">
                            Cabinet <span className="cs-color">Refinishing</span>
                        </h1>
                        <div className="scroll-fade delay-4">
                            <h2>Transform Your Cabinets Without the Cost of Replacement</h2>
                            <h3>Revive Your Kitchen or Bathroom with a Professional Touch</h3>
                            <p>
                                Our cabinet refinishing services give your space a high-end upgrade at a fraction of the cost of full replacements. We specialize in repainting and restaining cabinets to match modern design trends or classic finishes.
                            </p>
                            <p>
                                From detailed prep and sanding to flawless spray applications, we ensure a long-lasting, smooth finish that resists chips, moisture, and wear.
                            </p>

                            <h3>What’s Included in Our Refinishing Process</h3>
                            <p>
                                We handle everything—from removing hardware to cleaning, priming, and applying multiple coats of durable finish. Choose from a variety of colors and sheens to suit your home’s style.
                            </p>
                            <p>
                                We work cleanly and efficiently, often completing projects in just a few days with minimal disruption to your space.
                            </p>

                            <h3>Serving Modesto and Surrounding Areas</h3>
                            <p>
                                We proudly offer cabinet refinishing services across Modesto, Turlock, Ceres, Ripon, and the greater Stanislaus County area. Book your free estimate today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="interior-services-grid">
                <div className="cs-grid-container scroll-fade delay-2">
                    <h2 className="cs-grid-title">Our Cabinet Services Include</h2>
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
