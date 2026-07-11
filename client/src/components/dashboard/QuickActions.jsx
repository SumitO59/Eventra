import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-xl font-semibold text-slate-900">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/events/create"
          className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          Create Event
        </Link>

        <Link
          to="/events"
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Browse Events
        </Link>
      </div>
    </section>
  );
}