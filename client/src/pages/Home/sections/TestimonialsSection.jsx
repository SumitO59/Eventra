import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/common/SectionHeader";
import TestimonialCard from "../../../components/common/TestimonialCard";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Student",
    college: "NIT Srinagar",
    review:
      "Eventra made registering for hackathons effortless. Everything was organized and easy to access.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Verma",
    role: "Organizer",
    college: "IIT Delhi",
    review:
      "Managing registrations and participants became much simpler. A great platform for college events.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Rahul Singh",
    role: "Student",
    college: "NIT Trichy",
    review:
      "Clean interface, quick booking process, and timely updates. Exactly what students need.",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="Loved by Students & Organizers"
          subtitle="Hear what our community says about Eventra."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;