import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

import { formatDate } from "../../utils/formatDate";
import { getEventImage } from "../../utils/getEventImage";

const EventCard = ({ event }) => {
  const displayPrice =
    !event.price ||
    event.price === 0 ||
    event.price === "0" ||
    event.price.toLowerCase?.() === "free"
      ? "Free"
      : event.price.startsWith("₹")
        ? event.price
        : `₹${event.price}`;

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={getEventImage(event)}
          alt={event.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = getEventImage({
              ...event,
              image: "",
            });
          }}
        />
      </div>

      <div className="p-5">
        {/* Category */}
        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
          {event.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-xl font-bold text-gray-900">
          {event.title}
        </h2>

        {/* Date */}
        <div className="mt-4 flex items-center gap-2 text-gray-600">
          <Calendar size={18} />
          <span>{formatDate(event.date)}</span>
        </div>

        {/* Location */}
        <div className="mt-2 flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          <span className="line-clamp-1">{event.location}</span>
        </div>

        {/* Attendees */}
        <div className="mt-2 flex items-center gap-2 text-gray-600">
          <Users size={18} />
          <span>
            {event.attendees ?? event.registeredUsers?.length ?? 0} Registered
          </span>
        </div>

        {/* Price */}
        <p className="mt-4 text-lg font-semibold text-indigo-600">
          {displayPrice}
        </p>

        <Link
          to={`/events/${event._id}`}
          className="mt-5 inline-block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center font-medium text-white transition hover:bg-indigo-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;