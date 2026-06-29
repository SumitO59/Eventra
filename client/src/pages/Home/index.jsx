import Hero from "./sections/Hero/Hero";
import CategoriesSection from "./sections/Categories/CategoriesSection";
import FeaturedEventsSection from "./sections/FeaturedEvents/FeaturedEvents";

function Home() {
    return (
        <>
            <Hero />
            <CategoriesSection />
            <FeaturedEventsSection />
        </>
    );
}

export default Home;