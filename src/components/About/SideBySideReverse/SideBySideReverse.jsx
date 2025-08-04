import "./SideBySideReverse.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Import all images
import painter2Mobile from "../../../assets/about/sbs-painter-2-m.webp";
import painter2Desktop from "../../../assets/about/sbs-painter-2-d.webp";
import painter3Mobile from "../../../assets/about/sbs-painter-3-m.webp";
import painter3Desktop from "../../../assets/about/sbs-painter-3-d.webp";
import stripes from "../../../assets/about/stripes-long.svg";

export default function SideBySideReverse() {
    useScrollFadeIn();

    return (
        <section id="sbsr-1100-1112">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-image-group scroll-fade delay-3">
                    <picture className="cs-picture cs-picture1">
                        <source media="(max-width: 600px)" srcSet={painter2Mobile} />
                        <source media="(min-width: 601px)" srcSet={painter2Desktop} />
                        <img
                            loading="lazy"
                            decoding="async"
                            src={painter2Desktop}
                            alt="Professional painter prepping walls for residential repainting in Modesto"
                            width="323"
                            height="447"
                        />
                    </picture>
                    <picture className="cs-picture cs-picture2">
                        <source media="(max-width: 600px)" srcSet={painter3Mobile} />
                        <source media="(min-width: 601px)" srcSet={painter3Desktop} />
                        <img
                            loading="lazy"
                            decoding="async"
                            src={painter3Desktop}
                            alt="Painting tools and equipment used by Modesto Paint Pros"
                            width="305"
                            height="441"
                        />
                    </picture>
                    <img
                        className="cs-stripes"
                        loading="lazy"
                        decoding="async"
                        src={stripes}
                        alt="decorative stripes"
                        width="548"
                        height="487"
                        aria-hidden="true"
                    />
                </div>
                <div className="cs-content scroll-fade delay-4">
                    <span className="cs-topper">Mission & Vision</span>
                    <h2 className="cs-title">Why Modesto Paint Pros Exists</h2>
                    <p className="cs-text">
                        At Modesto Paint Pros, we believe that a quality paint job does more than change the look of a space — it uplifts homes, transforms businesses, and reflects pride in our community.
                    </p>
                    <ul className="cs-ul">
                        <li className="cs-li">
                            <h3 className="cs-h3">Our Mission</h3>
                            <p className="cs-li-text">
                                To deliver professional, reliable, and long-lasting painting solutions for homeowners and business owners across Stanislaus County. We aim to exceed expectations on every job, large or small.
                            </p>
                        </li>
                        <li className="cs-li">
                            <h3 className="cs-h3">Our Vision</h3>
                            <p className="cs-li-text">
                                To be the most trusted painting company in Modesto and the surrounding region — known for quality craftsmanship, honest pricing, and friendly service.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
