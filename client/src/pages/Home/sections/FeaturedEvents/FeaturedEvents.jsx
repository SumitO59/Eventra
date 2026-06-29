import Section from "../../../../components/ui/Section";
import Container from "../../../../components/ui/Container";
import SectionHeader from "../../../../components/common/SectionHeader";
import EventCard from "../../../../components/events/EventCard";

import {events} from "../../data/events";

function FeaturedEventsSection() {
    const featuredEvents = events.filter(
        (event) => event.featured
    );

    return (
        <Section>
            <Container>
                <SectionHeader
                    title="Featured Events"
                    subtitle="Discover hand-picked events happening across the country."
                />

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {featuredEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default FeaturedEventsSection;