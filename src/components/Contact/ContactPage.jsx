import "./ContactPage.css";
import mailIcon from "/src/assets/icons/email.svg";
import phoneIcon from "/src/assets/icons/phone-grey.svg";
import pinIcon from "/src/assets/icons/address.svg";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export default function ContactPage() {
    useScrollFadeIn();
    return (
        <section id="cs-contact-240">
            <div className="cs-container scroll-fade delay-2">
                <div className="cs-left-section">
                    <div className="cs-content">
                        <span className="cs-topper  scroll-fade delay-3">Contact</span>
                        <h2 className="cs-title scroll-fade delay-3">Get in Touch</h2>
                        <p className="cs-text scroll-fade delay-4">
                            Ready to refresh your home or business? Use the form below to get a free quote, or contact us directly by phone or email. We proudly serve Modesto, Oakdale, Riverbank, and surrounding Stanislaus County areas.
                        </p>
                    </div>
                    <form
                        id="cs-form-240"
                        name="Contact Form"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        action="/"
                        className="scroll-fade delay-5"
                    >
                        <input type="hidden" name="form-name" value="Contact Form" />
                        <p hidden>
                            <label>
                                Don’t fill this out if you're human: <input name="bot-field" />
                            </label>
                        </p>

                        <label className="cs-label">
                            Name
                            <input className="cs-input" required type="text" id="name-240" name="name" placeholder="Name" />
                        </label>
                        <label className="cs-label">
                            Email
                            <input className="cs-input" required type="email" id="email-240" name="email" placeholder="Email" />
                        </label>
                        <label className="cs-label">
                            Phone
                            <input className="cs-input" required type="text" id="phone-240" name="phone" placeholder="Phone" />
                        </label>
                        <label className="cs-label">
                            How Did You Find Us
                            <input className="cs-input" type="text" id="find-240" name="find-us" placeholder="How did you find us?" />
                        </label>
                        <label className="cs-label cs-label-message">
                            Message
                            <textarea className="cs-input cs-textarea" required name="message" id="message-240" placeholder="Write message..."></textarea>
                        </label>
                        <button className="cs-button-solid cs-submit" type="submit">
                            Submit Message Now
                        </button>
                    </form>
                </div>
                <div className="cs-right-section">
                    <ul className="cs-ul scroll-fade delay-3">
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img src={mailIcon} alt="mail icon" className="cs-icon" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Email</span>
                                <a href="mailto:ryanccerney@gmail.com" className="cs-link">info@modestopaintPros.com</a>
                            </div>
                        </li>
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img src={phoneIcon} alt="phone icon" className="cs-icon" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Phone</span>
                                <a href="tel:9256832180" className="cs-link">(209) 555-1234</a>
                            </div>
                        </li>
                        <li className="cs-li">
                            <picture className="cs-icon-wrapper">
                                <img src={pinIcon} alt="address icon" className="cs-icon" />
                            </picture>
                            <div className="cs-flex-group">
                                <span className="cs-header">Address</span>
                                <a href="#" className="cs-link">1436 Sutter Ave, Modesto, CA, 95354</a>
                            </div>
                        </li>
                    </ul>
                    <div className="cs-picture scroll-fade delay-4">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.268100466584!2d-121.01665271147881!3d37.619380948976335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809053a0390a2fdb%3A0x4d81b44499d5581!2sSutter%20Ave%2C%20Modesto%2C%20CA%2095351!5e0!3m2!1sen!2sus!4v1754346314539!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "1rem" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
