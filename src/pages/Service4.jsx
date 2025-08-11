import BaseLayout from "../layout/BaseLayout";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import DrywallRepair from "../components/Services/DrywallRepair/DrywallRepair";
import Banner from "../components/Banner/Banner";
import CTA from "../components/Home/CTA/CTA";

import { Helmet } from "react-helmet-async";

export default function Service4() {
    useScrollFadeIn();
    return (
        <BaseLayout>
            <Helmet>
                <title>Drywall Repair & Prep | Modesto Paint Pros</title>
                <meta
                    name="description"
                    content="Professional drywall repair and surface preparation services in Modesto and Stanislaus County. We patch, sand, and prime your walls for a flawless finish."
                />
            </Helmet>
            <Banner
                title="Drywall Repair & Prep"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Drywall Repair", href: "/services/drywall-repair" }
                ]}
            />
            <DrywallRepair />
            <CTA />
        </BaseLayout>
    );
}
