import Card from "../ui/Card";
import Button from "../ui/Button";

function EventCard({ event }) {
    const {
        title,
        category,
        date,
        location,
        price,
        attendees,
        image,
    } = event;

    return (
        <Card
            hoverable
            className="h-full overflow-hidden p-0 flex flex-col"
        >
            {/* Event Image */}
          <div className="relative h-56 overflow-hidden">
    <img
        src={event.image}
        alt={event.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
        {event.category}
    </span>
</div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <span className="text-sm font-medium text-blue-600">
                    {category}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {title}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>📅 {date}</p>
                    <p>📍 {location}</p>
                    <p>👥 {attendees} attending</p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-lg font-bold text-slate-900">
                        {price}
                    </span>

                    <Button size="sm">
                        View Event
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default EventCard;