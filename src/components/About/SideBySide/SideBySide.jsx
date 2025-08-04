import "./SideBySide.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Image imports
import painterMobile from "../../../assets/about/sbs-painter-1-m.webp";
import painterDesktop from "../../../assets/about/sbs-painter-1-d.webp";
import stripes from "../../../assets/about/stripes-long.svg";
import profile from "../../../assets/about/profile-2.webp";

export default function SideBySide() {
    useScrollFadeIn();
    return (
        <section id="sbs-1095-1112">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-image-group scroll-fade delay-3">
                    <picture className="cs-picture">
                        <source media="(max-width: 600px)" srcSet={painterMobile} />
                        <source media="(min-width: 601px)" srcSet={painterDesktop} />
                        <img
                            loading="lazy"
                            decoding="async"
                            src={painterDesktop}
                            alt="Painter working on interior wall of a Modesto home"
                            width="542"
                            height="608"
                        />
                    </picture>
                    <img
                        className="cs-stripes"
                        loading="lazy"
                        decoding="async"
                        src={stripes}
                        alt="decorative stripes"
                        width="522"
                        height="608"
                        aria-hidden="true"
                    />
                </div>
                <div className="cs-content scroll-fade delay-3">
                    <span className="cs-topper scroll-fade delay-4">Painting Modesto Homes Since 1984</span>
                    <h2 className="cs-title scroll-fade delay-4">A Legacy of Local Craftsmanship</h2>
                    <p className="cs-text scroll-fade delay-4">
                        With decades of experience serving homeowners in Stanislaus County, Modesto Paint Pros has built a reputation for quality, reliability, and attention to detail. We treat every project like it’s our own home.
                    </p>
                    <ul className="cs-list scroll-fade delay-4">
                        <li className="cs-li">Interior and exterior painting for homes of all sizes</li>
                        <li className="cs-li">Licensed, bonded, and insured for your peace of mind</li>
                        <li className="cs-li">Premium paints from trusted brands like Sherwin-Williams</li>
                        <li className="cs-li">Thorough prep work including patching, sanding, and priming</li>
                        <li className="cs-li">Clean work sites and respectful, timely crews</li>
                    </ul>
                    <div className="cs-info scroll-fade delay-4">
                        <img
                            className="cs-icon"
                            loading="lazy"
                            decoding="async"
                            src={profile}
                            alt="Owner of Modesto Paint Pros"
                            width="52"
                            height="52"
                        />
                        <div className="cs-flex">
                            <span className="cs-name">Marco Ramirez</span>
                            <span className="cs-desc">Founder, Modesto Paint Pros</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
