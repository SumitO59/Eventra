import Card from "../ui/Card";
import Button from "../ui/Button";

// import Card from "../../../components/ui/Card";
// import Button from "../../../components/ui/Button";

import {
    Calendar,
    MapPin,
    Users,
    ArrowRight,
} from "lucide-react";

function EventCard({ event }) {
    return (
        <Card className="group overflow-hidden p-0">

            {/* Image */}

            <div className="relative h-56 overflow-hidden bg-red-200">
    <img
    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
    alt="Test"
    className="h-full w-full object-cover"
/>
    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
        Image Test
    </div>
</div>

            <div className="space-y-5 p-6">

                <div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                        {event.title}
                    </h3>

                </div>

                <div className="space-y-3 text-sm text-slate-600">

                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {event.date} • {event.time}
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {event.location}
                    </div>

                    <div className="flex items-center gap-2">
                        <Users size={16} />
                        {event.attendees} Attendees
                    </div>

                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-5">

                    <div>

                        <p className="text-xs text-slate-500">
                            Starting From
                        </p>

                        <p className="text-xl font-bold text-indigo-600">
                            {event.price}
                        </p>

                    </div>

                    <Button className="group/button">

                        Book Now

                        <ArrowRight
                            size={18}
                            className="ml-2 transition-transform group-hover/button:translate-x-1"
                        />

                    </Button>

                </div>

            </div>

        </Card>
    );
}

export default EventCard;