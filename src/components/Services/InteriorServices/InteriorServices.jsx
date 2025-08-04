import "./InteriorServices.css";
import interior1 from "/src/assets/services/interior1.webp"
import interior2 from "/src/assets/services/interior2.webp"
import paintIcon from "/src/assets/home/paint-roller.svg";
import wallIcon from "/src/assets/home/wall.svg";
import trimIcon from "/src/assets/icons/caulk.svg";
import cabinetIcon from "/src/assets/home/cabinet.svg";
import wallpaperIcon from "/src/assets/icons/wallpaper.svg";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function InteriorServices() {
    useScrollFadeIn();
    const services = [
        {
            icon: paintIcon,
            title: "Interior Painting",
            desc: "High-quality wall, ceiling, and trim painting for any room."
        },
        {
            icon: wallIcon,
            title: "Drywall Repair",
            desc: "Smooth out cracks, dents, or full panel replacements."
        },
        {
            icon: trimIcon,
            title: "Crown Molding & Trim",
            desc: "Professional trim installation and detailing."
        },
        {
            icon: cabinetIcon,
            title: "Cabinet Refinishing",
            desc: "Breathe new life into your existing kitchen cabinets."
        },
        {
            icon: wallpaperIcon,
            title: "Wallpaper Removal",
            desc: "Safe, clean removal of old wallpaper with surface prep."
        }
    ];

    return (
        <>
            <section id="content-page-1399">
                <div className="cs-container">
                    <div className="cs-image-group scroll-fade delay-2">
                        <picture className="cs-image stagger-1">
                            <img src={interior2} alt="Interior Work 1" loading="lazy" decoding="async" />
                        </picture>
                        <picture className="cs-image stagger-2">
                            <img src={interior1} alt="Interior Work 2" loading="lazy" decoding="async" />
                        </picture>
                    </div>


                    <div className="cs-content scroll-fade delay-2">
                        <h1 className="cs-title scroll-fade delay-3">
                            Interior <span className="cs-color">Painting Services</span>
                        </h1>
                        <div className="scroll-fade delay-4">
                            <h2>Top-Rated Interior Painters in Modesto</h2>
                            <h3>Clean, Precise, and Professional</h3>
                            <p>
                                At Modesto Paint Pros, we offer high-quality interior painting services for homes, offices, and commercial properties throughout Stanislaus County. Whether you're updating a single room or refreshing your entire interior, our team delivers smooth finishes, clean lines, and a stress-free experience.
                            </p>
                            <p>
                                We take care of everything—from prepping walls and repairing drywall to applying durable, low-VOC paints that are safe for your home or workspace. Our painters work efficiently and treat your space with respect, keeping things tidy from start to finish.
                            </p>

                            <h3>Why Choose Us for Interior Painting?</h3>
                            <p>
                                Our painters are trained professionals who bring years of experience to every job. We focus on proper prep work and use high-end materials to ensure lasting results. Whether it's textured walls, high ceilings, or delicate trim work, we’ve got it covered.
                            </p>
                            <p>
                                We also provide flexible scheduling, detailed walkthroughs, and upfront pricing—so there are no surprises along the way. We treat your project like it’s our own.
                            </p>

                            <h3>Serving All of Stanislaus County</h3>
                            <p>
                                Based in Modesto, we proudly serve residential and commercial clients across Turlock, Ceres, Riverbank, Oakdale, and surrounding areas. If you're looking for reliable interior painters who show up on time and deliver high-end results, you're in the right place.
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
