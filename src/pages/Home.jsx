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
                        name: "Modesto Paint Pros",
                        image: "https://modestopaintpros.com/assets/logos/logo.png",
                        url: "https://modestopaintpros.com",
                        telephone: "(209) 555-1234",
                        email: "info@modestopaintpros.com",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "1436 Sutter Ave",
                            addressLocality: "Modesto",
                            addressRegion: "CA",
                            postalCode: "95354",
                            addressCountry: "US",
                        },
                        priceRange: "$$",
                        areaServed: {
                            "@type": "Place",
                            name: "Stanislaus County",
                        },
                        openingHoursSpecification: {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                            ],
                            opens: "08:00",
                            closes: "17:00",
                        },
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