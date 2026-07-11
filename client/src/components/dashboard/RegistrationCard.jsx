import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

import { formatDate } from "../../utils/formatDate";

export default function RegistrationCard({
  event,
  onCancelRegistration,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <img
        src={
          event.image ||
          "https://placehold.co/600x400?text=Event"
        }
        alt={event.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
          {event.category}
        </span>

        <h2 className="mt-3 text-xl font-bold">
          {event.title}
        </h2>

        <div className="mt-4 flex items-center gap-2 text-gray-600">
          <Calendar size={18} />
          <span>{formatDate(event.date)}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          <span>{event.location}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-gray-600">
          <Users size={18} />
          <span>{event.attendees} Registered</span>
        </div>

        <p className="mt-4 text-lg font-semibold text-indigo-600">
          {Number(event.price) === 0 ? "Free" : `₹${event.price}`}
        </p>

        <div className="mt-5 space-y-2">
          <Link
            to={`/events/${event._id}`}
            className="block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center font-medium text-white transition hover:bg-indigo-700"
          >
            View Details
          </Link>

          <button
            onClick={() => onCancelRegistration(event._id)}
            className="w-full rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Cancel Registration
          </button>
        </div>
      </div>
    </div>
  );
}