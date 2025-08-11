import BaseLayout from "../layout/BaseLayout";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import ExteriorServices from "../components/Services/ExteriorServices/ExteriorServices";
import Banner from "../components/Banner/Banner";
import CTA from "../components/Home/CTA/CTA";

import { Helmet } from "react-helmet-async";

export default function Service2() {
    useScrollFadeIn();

    return (
        <BaseLayout>
            <Helmet>
                <title>Exterior House Painting in Modesto | Modesto Paint Pros</title>
                <meta
                    name="description"
                    content="Get high-quality exterior painting in Modesto and surrounding areas. We offer stucco repair, trim painting, pressure washing, and more. Free estimates available!"
                />
            </Helmet>
            <Banner
                title="Exterior Services"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Exterior", href: "/services/exterior" }
                ]}
            />
            <ExteriorServices />
            <CTA />
        </BaseLayout>
    );
}
