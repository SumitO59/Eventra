import {
  Search,
  CalendarCheck,
  PartyPopper,
} from "lucide-react";

import Section from "../../../components/ui/Section";
import Container from "../../../components/ui/Container";
import SectionHeader from "../../../components/common/SectionHeader";
import StepCard from "../../../components/common/StepCard";

const steps = [
  {
    icon: Search,
    title: "Discover Events",
    description:
      "Browse workshops, hackathons, seminars, and cultural events happening across your campus.",
  },
  {
    icon: CalendarCheck,
    title: "Book Your Spot",
    description:
      "Reserve your seat instantly with a smooth registration process and receive confirmation.",
  },
  {
    icon: PartyPopper,
    title: "Attend & Enjoy",
    description:
      "Participate, network, and make the most of every event while keeping all your bookings organized.",
  },
];

function HowItWorksSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader
          badge="Simple Process"
          title="How Eventra Works"
          subtitle="From discovering events to attending them, everything takes just a few clicks."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorksSection;