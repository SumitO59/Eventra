export default function StatsGrid({
  eventsCreated,
  registrations,
  upcomingEvents,
}) {
  const stats = [
    {
      title: "Events Created",
      value: eventsCreated,
    },
    {
      title: "Registrations",
      value: registrations,
    },
    {
      title: "Upcoming Events",
      value: upcomingEvents,
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-5 text-xl font-semibold text-slate-900">
        Quick Stats
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">
              {stat.title}
            </p>

            <h3 className="mt-3 text-4xl font-bold text-slate-900">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}