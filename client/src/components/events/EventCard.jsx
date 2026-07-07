import Card from "../ui/Card";
import Button from "../ui/Button";

import { formatDate } from "../../utils/formatDate";
import { getEventImage } from "../../utils/getEventImage";

function EventCard({ event }) {
    const {
        title,
        category,
        date,
        location,
        price,
        attendees,
    } = event;

    return (
        <Card
            hoverable
            className="group flex h-full flex-col overflow-hidden p-0"
        >
            <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                    src={getEventImage(event)}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    {category}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">

                <span className="text-sm font-medium text-blue-600">
                    {category}
                </span>

                <h3 className="mt-2 text-xl font-semibold leading-tight text-slate-900">
                    {title}
                </h3>

                <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                    <p>📅 {formatDate(date)}</p>
                    <p>📍 {location}</p>
                    <p>👥 {attendees} attending</p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-6">

                    <span className="text-lg font-bold text-slate-900">
                        {price}
                    </span>

                    <Button
                        size="sm"
                        className="shrink-0"
                    >
                        View Event
                    </Button>

                </div>
            </div>
        </Card>
    );
}

export default EventCard;