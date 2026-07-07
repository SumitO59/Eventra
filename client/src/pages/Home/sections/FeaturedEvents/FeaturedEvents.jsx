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
        const fetchEvents = async () => {
            try {
                const featuredEvents = await getFeaturedEvents();

                setEvents(featuredEvents);
            } catch (error) {
                setError("Failed to load events.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <Section>
            <Container>
                <SectionHeader
                    title="Featured Events"
                    subtitle="Discover hand-picked events happening across the country."
                />

                {loading && (
                    <p className="mt-10 text-center text-slate-500">
                        Loading events...
                    </p>
                )}

                {error && (
                    <p className="mt-10 text-center text-red-500">
                        {error}
                    </p>
                )}

                {!loading && !error && events.length === 0 && (
                    <p className="mt-10 text-center text-slate-500">
                        No featured events available.
                    </p>
                )}

                {!loading && !error && events.length > 0 && (
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:mt-12 xl:grid-cols-3">
                        {events.map((event) => (
                            <EventCard
                                key={event._id}
                                event={event}
                            />
                        ))}
                    </div>
                )}
                
            </Container>
        </Section>
    );
}

export default FeaturedEventsSection;