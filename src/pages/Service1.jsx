import BaseLayout from "../layout/BaseLayout";
import InteriorServices from "../components/Services/InteriorServices/InteriorServices";
import CTA from "../components/Home/CTA/CTA"
import Banner from "../components/Banner/Banner";

import { Helmet } from "react-helmet-async";

export default function Service1() {
    return (
        <BaseLayout>
            <Helmet>
                <title>Interior Painting in Modesto | Modesto Paint Pros</title>
                <meta
                    name="description"
                    content="Get flawless interior painting for your Modesto home or business. We specialize in walls, ceilings, trim, and more—backed by licensed pros and free estimates"
                />
                <link rel="canonical" href="https://modestopaintpros.com/services/interior" />

                <link rel="preload" as="image" href="/assets/aboutHero-m-B3N3rOcL.webp" media="(max-width: 600px)" />
                <link rel="preload" as="image" href="/assets/aboutHero-d-IzCeYro1.webp" media="(min-width: 601px)" />
            </Helmet>
            <Banner
                title="Interior Services"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Interior", href: "/services/interior" }
                ]}
            />
            <InteriorServices />
            <CTA />
        </BaseLayout>
    )
}