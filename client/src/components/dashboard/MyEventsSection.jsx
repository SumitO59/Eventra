import EventCard from "../events/EventCard";
import EmptyState from "../common/EmptyState";

export default function MyEventsSection({
  events,
  currentUser,
  onDelete,
}) {
  return (
    <section className="mb-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">
          My Events
        </h2>

        <span className="text-sm text-slate-500">
          {events.length} {events.length === 1 ? "Event" : "Events"}
        </span>
      </div>

      {events.length === 0 ? (
        <EmptyState
          title="You haven't created any events yet"
          description="Create your first event and start accepting registrations from participants."
          buttonText="Create Event"
          buttonLink="/events/create"
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              currentUser={currentUser}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}