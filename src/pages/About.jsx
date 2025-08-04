import BaseLayout from "../layout/BaseLayout";
import Banner from "../components/Banner/Banner";
import MeetTeam from "../components/About/Team/MeetTeam";
import Pricing from "../components/About/Pricing/Pricing";
import SideBySide from "../components/About/SideBySide/SideBySide";
import SideBySideReverse from "../components/About/SideBySideReverse/SideBySideReverse";
import Stats from "../components/About/Stats/Stats";
import CTA from "../components/Home/CTA/CTA"
import { Helmet } from "react-helmet-async"

export default function About() {
    return (
        <BaseLayout>
            <Helmet>
                <title>About Modesto Paint Pros | Local Painting Experts</title>
                <meta
                    name="description"
                    content="Learn more about Modesto Paint Pros, your trusted local painters for residential and commercial projects throughout Stanislaus County. Quality work, reliable service."
                />
            </Helmet>
            {/*  */}
            <Banner
                title="About Us"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" }
                ]}
            />
            <SideBySide />
            <SideBySideReverse />
            <Stats />
            <MeetTeam />
            <Pricing />
            <CTA />
        </BaseLayout>
    );
}