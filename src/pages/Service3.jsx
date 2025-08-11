import BaseLayout from "../layout/BaseLayout";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Banner from "../components/Banner/Banner";
import CTA from "../components/Home/CTA/CTA";
import CabinetServices from "../components/Services/CabinetServices/CabinetServices";
import { Helmet } from "react-helmet-async";

export default function Service3() {
    useScrollFadeIn();

    return (
        <BaseLayout>
            <Helmet>
                <title>Cabinet Refinishing in Modesto</title>
                <meta
                    name="description"
                    content="Breathe new life into your kitchen or bathroom with professional cabinet refinishing in Modesto. Affordable upgrades with clean, durable finishes."
                />
            </Helmet>
            <Banner
                title="Cabinet Refinishing"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cabinets", href: "/services/cabinets" }
                ]}
            />
            <CabinetServices />
            <CTA />
        </BaseLayout>
    );
}
