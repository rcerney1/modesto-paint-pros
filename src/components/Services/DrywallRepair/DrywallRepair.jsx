import "./DrywallRepair.css";
import drywall1 from "/src/assets/services/interior1.webp";
import drywall2 from "/src/assets/services/interior1.webp";
import holeIcon from "/src/assets/home/paint-roller.svg";
import patchIcon from "/src/assets/home/paint-roller.svg";
import sandIcon from "/src/assets/home/paint-roller.svg";
import primerIcon from "/src/assets/home/paint-roller.svg";
import paintIcon from "/src/assets/home/paint-roller.svg";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

export default function DrywallRepair() {
    useScrollFadeIn();

    const services = [
        {
            icon: holeIcon,
            title: "Hole & Crack Patching",
            desc: "We fix everything from nail holes to large dents and drywall cracks."
        },
        {
            icon: patchIcon,
            title: "Full Panel Replacement",
            desc: "For severely damaged walls, we cut and install new drywall panels with proper framing support."
        },
        {
            icon: sandIcon,
            title: "Sanding & Smoothing",
            desc: "We sand patches until surfaces are flush and paint-ready."
        },
        {
            icon: primerIcon,
            title: "Priming for Paint",
            desc: "Every repair is finished with quality primer for a seamless topcoat."
        },
        {
            icon: paintIcon,
            title: "Final Paint Matching",
            desc: "We can match your wall color for a smooth, invisible finish."
        }
    ];

    return (
        <>
            <section id="content-page-1399">
                <div className="cs-container">
                    <div className="cs-image-group scroll-fade delay-2">
                        <picture className="cs-image stagger-1">
                            <img src={drywall1} alt="Drywall Work Before Repair" loading="lazy" decoding="async" />
                        </picture>
                        <picture className="cs-image stagger-2">
                            <img src={drywall2} alt="Drywall Work After Repair" loading="lazy" decoding="async" />
                        </picture>
                    </div>

                    <div className="cs-content scroll-fade delay-2">
                        <h1 className="cs-title scroll-fade delay-3">
                            Drywall <span className="cs-color">Repair & Prep</span>
                        </h1>
                        <div className="scroll-fade delay-4">
                            <h2>Restore Your Walls to a Flawless Finish</h2>
                            <h3>Fast, Clean, and Professional Repairs</h3>
                            <p>
                                Whether you're dealing with water damage, cracked corners, or rough patch jobs, our drywall team makes walls look new again. We handle every step of the repair process—removal, replacement, taping, mudding, and sanding—with expert precision.
                            </p>
                            <p>
                                Our goal is a smooth surface that blends seamlessly into the rest of your wall, so it's like the damage was never there.
                            </p>

                            <h3>Ready for Paint or Texture</h3>
                            <p>
                                Once repairs are complete, we prime the area for painting or texturing. We can even match your existing paint or apply a fresh coat so the wall looks brand new.
                            </p>
                            <p>
                                We work cleanly and efficiently, always protecting your space and minimizing dust.
                            </p>

                            <h3>Serving Modesto & the Central Valley</h3>
                            <p>
                                Our drywall services are available throughout Modesto, Riverbank, Ceres, Salida, and nearby communities. Let’s get your walls back in shape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="interior-services-grid">
                <div className="cs-grid-container scroll-fade delay-2">
                    <h2 className="cs-grid-title">Our Drywall Services Include</h2>
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
