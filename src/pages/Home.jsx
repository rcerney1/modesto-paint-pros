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

export default function Home(){
    useScrollFadeIn();
    return(
        <BaseLayout>
            <Helmet>
                <title>Modesto Paint Pros | Expert Residential & Commercial Painting</title>
                <meta 
                    name="description"
                    content="Modesto Paint Pros offers high-quality interior and exterior painting services for homes and businesses across Stanislaus County. Get a free estimate today!"
                />
                
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