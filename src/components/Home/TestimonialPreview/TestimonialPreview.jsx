import "./TestimonialPreview.css";
import { useEffect, useState } from "react";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

// ✅ Import all images
import stars5 from "../../../assets/home/stars5.svg";
import profile1 from "../../../assets/home/review-profile-d.webp";
import profile2 from "../../../assets/home/house-painter-m.webp";
import bgMobile from "../../../assets/home/review-m.webp";
import bgDesktop from "../../../assets/home/review-d.webp";

// ✅ Use image variables in the reviews array
const reviews = [
    {
        name: "Jenny Y.",
        desc: "Home Owner",
        text: "The team at Modesto Paint Pros was amazing. They were fast, clean, and made my living room look brand new!",
        profileImg: profile1,
        starsImg: stars5
    },
    {
        name: "Terry P.",
        desc: "Business Owner in Modesto",
        text: "Our storefront needed a serious refresh. These guys nailed the color match and finished ahead of schedule. Highly recommend.",
        profileImg: profile2,
        starsImg: stars5
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    useScrollFadeIn();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const prevReview = () => {
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const nextReview = () => {
        setIndex((prev) => (prev + 1) % reviews.length);
    };

    const review = reviews[index];

    return (
        <section id="reviews-2418">
            <div className="cs-container">
                <figure className="cs-card scroll-fade delay-3">
                    <div className="cs-content">
                        <p className="cs-title scroll-fade delay-4">What They Say</p>
                    </div>
                    <div className="cs-nav-buttons">
                        <button onClick={prevReview} aria-label="Previous Review">
                            &#10094;
                        </button>
                        <button onClick={nextReview} aria-label="Next Review">
                            &#10095;
                        </button>
                    </div>
                    <blockquote className="cs-blockquote scroll-fade delay-4">
                        <img
                            className="cs-stars"
                            src={review.starsImg}
                            alt="5 star review"
                            width="136"
                            height="20"
                            loading="lazy"
                            decoding="async"
                        />
                        <p className="cs-review">{review.text}</p>
                    </blockquote>
                    <figcaption className="cs-info scroll-fade delay-5">
                        <img
                            className="cs-profile"
                            src={review.profileImg}
                            alt={`Photo of ${review.name}`}
                            width="52"
                            height="52"
                            loading="lazy"
                            decoding="async"
                        />
                        <span className="cs-name">
                            {review.name}
                            <span className="cs-desc">{review.desc}</span>
                        </span>
                        <svg
                            className="cs-profile-graphic"
                            xmlns="http://www.w3.org/2000/svg"
                            width="125"
                            height="100"
                            viewBox="0 0 125 100"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M68.8 0 28.7 100H0L22.9 0h45.9Zm10.3 0L56.2 100h28.7L125 0H79.1Z"
                            />
                        </svg>
                    </figcaption>
                </figure>
            </div>

            <picture className="cs-background scroll-fade delay-2">
                <source media="(max-width: 767px)" srcSet={bgMobile} />
                <source media="(min-width: 768px)" srcSet={bgDesktop} />
                <img
                    src={bgDesktop}
                    alt="Customer testimonials background painting image in Modesto"
                    width="630"
                    height="877"
                    loading="lazy"
                    decoding="async"
                />
            </picture>
        </section>
    );
}
