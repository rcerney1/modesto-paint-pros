import BaseLayout from "../layout/BaseLayout";
import ContactPage from "../components/Contact/ContactPage";
import { Helmet } from "react-helmet-async"

export default function Contact() {
    return (
        <BaseLayout>
            <Helmet>
                <title>Contact Us | Modesto Paint Pros</title>
                <meta
                    name="description"
                    content="Contact Modesto Paint Pros for reliable interior and exterior painting services in Stanislaus County. Call, email, or send a message for your free quote."
                />
            </Helmet>
            <ContactPage />
        </BaseLayout>
    );
}