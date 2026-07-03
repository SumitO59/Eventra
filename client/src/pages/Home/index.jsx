import Hero from "./sections/Hero/Hero";
import CategoriesSection from "./sections/Categories/CategoriesSection";
import FeaturedEventsSection from "./sections/FeaturedEvents/FeaturedEvents";
import HowItWorksSection from "./sections/HowItWorksSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import NewsletterSection from "./sections/Newsletter/NewsletterSection";
import Footer from "../../components/layout/Footer";

function Home() {
    return (
        <>
            <Hero />
            <CategoriesSection />
            <FeaturedEventsSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <NewsletterSection />
            <Footer />
        </>
    );
}

export default Home;