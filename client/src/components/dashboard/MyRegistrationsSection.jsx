import RegistrationCard from "./RegistrationCard";
import EmptyState from "../common/EmptyState";

export default function MyRegistrationsSection({
  events,
  onCancelRegistration,
}) {
  return (
    <section className="mb-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">
          My Registrations
        </h2>

        <span className="text-sm text-slate-500">
          {events.length} {events.length === 1 ? "Event" : "Events"}
        </span>
      </div>

      {events.length === 0 ? (
        <EmptyState
          title="You haven't registered for any events yet"
          description="Browse upcoming events and register to start participating."
          buttonText="Explore Events"
          buttonLink="/events"
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <RegistrationCard
              key={event._id}
              event={event}
              onCancelRegistration={onCancelRegistration}
            />
          ))}
        </div>
      )}
    </section>
  );
}