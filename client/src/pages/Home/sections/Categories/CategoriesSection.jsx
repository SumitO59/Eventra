import Section from "../../../../components/ui/Section";
import Container from "../../../../components/ui/Container";
import SectionHeader from "../../../../components/common/SectionHeader";
import CategoryCard from "../../../../components/categories/CategoryCard";
import categories from "../../data/categories";

function CategoriesSection() {
    return (
        <Section>
            <Container>
                <SectionHeader
                    title="Browse Event Categories"
                    subtitle="Discover events tailored to your interests—from technology and music to sports, education, and more."
                />

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            icon={category.icon}
                            title={category.title}
                            description={category.description}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default CategoriesSection;