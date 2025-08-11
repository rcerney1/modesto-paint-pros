import BaseLayout from "../layout/BaseLayout";
import Hero from "../components/Home/Hero/Hero";
import ServicesPreview from "../components/Home/ServicesPreview/ServicesPreview";
import AboutPreview from "../components/Home/AboutPreview/AboutPreview";
import GalleryPreview from "../components/Home/GalleryPreview/GalleryPreview";
import Testimonials from "../components/Home/TestimonialPreview/TestimonialPreview";
import CTA from "../components/Home/CTA/CTA";
import FAQ from "../components/Home/FAQ/FAQ";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { Helmet } from "react-helmet-async";

export default function Home() {
    useScrollFadeIn();
    return (
        <BaseLayout>
            <Helmet>
                <title>Modesto Paint Pros | Expert Residential & Commercial Painting</title>
                <meta
                    name="description"
                    content="Modesto Paint Pros offers high-quality interior and exterior painting services for homes and businesses across Stanislaus County. Get a free estimate today!"
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "PaintingService",
                        "@id": "https://modestopaintpros.com/#identity",
                        "name": "Modesto Paint Pros",
                        "url": "https://modestopaintpros.com/",
                        "logo": "https://modestopaintpros.com/assets/logo.png", // TODO: ensure this exists
                        "image": "https://modestopaintpros.com/assets/hero.jpg", // TODO: use a real public image
                        "telephone": "+12095551234", // TODO: match site/GBP exactly
                        "email": "info@modestopaintpros.com",
                        "hasMap": "https://maps.google.com/?q=1436+Sutter+Ave,+Modesto,+CA+95354",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "1436 Sutter Ave",
                            "addressLocality": "Modesto",
                            "addressRegion": "CA",
                            "postalCode": "95354",
                            "addressCountry": "US"
                        },
                        "priceRange": "$$",
                        "areaServed": [
                            { "@type": "City", "name": "Modesto" },
                            { "@type": "AdministrativeArea", "name": "Stanislaus County" }
                        ],
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 37.6391,   // optional: use your real coords if you have them
                            "longitude": -120.9969
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "opens": "09:00",    // TODO: align with your actual hours
                                "closes": "18:00"
                            }
                        ],
                        "sameAs": [
                            "https://www.facebook.com/yourpage", // TODO: replace or remove if none
                            "https://www.instagram.com/yourpage"
                        ],
                        "makesOffer": [
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Refinishing" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair" } }
                        ]
                    })}
                </script>

            </Helmet>

            <Hero />
            <ServicesPreview />
            <AboutPreview />
            <Testimonials />
            <GalleryPreview />
            <FAQ />
            <CTA />

        </BaseLayout>
    )
}