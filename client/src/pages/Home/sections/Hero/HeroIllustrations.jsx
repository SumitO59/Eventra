import Card from "../../../../components/ui/Card";
import Button from "../../../../components/ui/Button";

const heroEvents = [
    {
        id: 1,
        title: "Tech Hackathon",
        location: "NIT Srinagar",
        date: "12 July • 9:00 AM",
        seats: "120 Seats Left",
        emoji: "💻",
        color: "bg-blue-100",
        position: "top-24 left-0 -rotate-6",
    },
    {
        id: 2,
        title: "Music Festival",
        location: "Delhi",
        date: "18 July • 7:00 PM",
        seats: "350 Seats Left",
        emoji: "🎵",
        color: "bg-pink-100",
        position: "top-4 right-0 rotate-6",
    },
    {
        id: 3,
        title: "UI/UX Workshop",
        location: "Bengaluru",
        date: "22 July • 10:00 AM",
        seats: "42 Seats Left",
        emoji: "🎨",
        color: "bg-violet-100",
        position: "bottom-0 right-20 rotate-8",
    },
];

function HeroIllustration() {
    return (
        <div className="relative mx-auto h-[560px] w-full max-w-xl transition-transform duration-500 hover:-translate-y-2">

            {/* Background Glow */}
            {/* Main Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/20 blur-[100px]" />

            {/* Secondary Glow */}
            <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl" />

            {/* Accent Glow */}
            <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-pink-300/20 blur-3xl" />
            {/* Decorative Circles */}
            <div className="absolute left-6 top-8 h-4 w-4 rounded-full bg-indigo-400" />

            <div className="absolute bottom-8 left-20 h-3 w-3 rounded-full bg-pink-400" />

            <div className="absolute right-8 top-32 h-5 w-5 rounded-full bg-blue-400" />
            <div className="absolute left-8 top-10 h-3 w-3 rounded-full bg-indigo-500"></div>

            <div className="absolute right-6 top-28 h-4 w-4 rounded-full bg-blue-500"></div>

            <div className="absolute bottom-10 left-24 h-3 w-3 rounded-full bg-pink-500"></div>

            <div className="absolute bottom-24 right-16 h-2 w-2 rounded-full bg-violet-500"></div>

            {/* Floating Cards */}
            {heroEvents.map((event) => (
                <div
                    key={event.id}
                    className={`
absolute
w-64
transition-all
duration-500
${event.position}
`}
                >
                    <Card
                        className="
                         overflow-hidden
                         rounded-3xl
                         border
                         border-white/70
                         bg-white/90
                         shadow-xl
                         backdrop-blur-sm
                         transition-all
                         duration-500
                         hover:-translate-y-4
                         hover:rotate-0
                         hover:shadow-2xl
                         "
                    >
                        <div
                            className={`h-24 w-full ${event.color}`}
                        >
                            <div className="flex h-full items-center justify-center text-5xl">
                                {event.emoji}
                            </div>
                        </div>
                        <div className="space-y-4 p-5">

                            <div className="flex items-center justify-between">

                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${event.color}`}
                                >
                                    {event.emoji}
                                </div>

                                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                    Live
                                </span>

                            </div>

                            <div>

                                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                                    {event.title}
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    📍 {event.location}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    📅 {event.date}
                                </p>

                            </div>

                            <div className="flex items-center justify-between border-t border-slate-100 pt-4">

                                <span className="text-sm font-medium text-indigo-600">
                                    {event.seats}
                                </span>

                                <Button size="sm">
                                    View
                                </Button>

                            </div>

                        </div>
                    </Card>
                </div>
            ))}

        </div>
    );
}

export default HeroIllustration;