import { useEffect, useState } from "react";

import Section from "../../../../components/ui/Section";
import Container from "../../../../components/ui/Container";
import SectionHeader from "../../../../components/common/SectionHeader";
import EventCard from "../../../../components/events/EventCard";

import { getFeaturedEvents } from "../../../../services/eventService";

function FeaturedEventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      try {
        const featuredEvents = await getFeaturedEvents();
        setEvents(featuredEvents);
      } catch (err) {
        console.error(err);
        setError("Failed to load featured events.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedEvents();
  }, []);

  if (loading) {
    return <p>Loading featured events...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Section>
      <Container>
        <SectionHeader
          title="Featured Events"
          subtitle="Discover our highlighted events."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedEventsSection;