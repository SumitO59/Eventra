import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";

const TestEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        console.log("API Response:", data);
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Event API Test</h1>

      {events.map((event) => (
        <div key={event._id} className="border p-4 mb-4 rounded">
          <h2 className="font-semibold">{event.title}</h2>
          <p>{event.location}</p>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default TestEvents;