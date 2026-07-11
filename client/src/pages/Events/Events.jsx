import { useEffect, useState } from "react";
import { getEvents } from "../../services/eventService";
import { formatDate } from "../../utils/formatDate";
import EventCard from "../../components/events/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data.events);
      } catch (err) {
        console.error(err);
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="p-8">Loading events...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {events.map((event) => (
    <EventCard
      key={event._id}
      event={event}
    />
  ))}
</div>
      )}
    </div>
  );
};

export default Events;