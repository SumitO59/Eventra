import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Calendar,
    Clock,
    MapPin,
    Users,
    IndianRupee,
    User,
} from "lucide-react";

import {
    getEventById,
    registerForEvent,
    cancelRegistration,
    deleteEvent,
} from "../../services/eventService";

import { formatDate } from "../../utils/formatDate";

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [registering, setRegistering] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const fetchEvent = async () => {
        try {
            setLoading(true);

            const data = await getEventById(id);

            setEvent(data.event);
            setError("");
        } catch (err) {
            console.error(err);
            setError("Failed to load event.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvent();
    }, [id]);

    const handleRegister = async () => {
        try {
            setRegistering(true);

            const response = await registerForEvent(id);

            alert(response.message);

            await fetchEvent();
        } catch (err) {
            console.error(err);

            alert(
                err.response?.data?.message ||
                "Registration failed."
            );
        } finally {
            setRegistering(false);
        }
    };

    const handleCancelRegistration = async () => {
        try {
            setRegistering(true);

            const response = await cancelRegistration(id);

            alert(response.message);

            await fetchEvent();
        } catch (err) {
            console.error(err);

            alert(
                err.response?.data?.message ||
                "Failed to cancel registration."
            );
        } finally {
            setRegistering(false);
        }
    };

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this event?"
        );

        if (!confirmed) return;

        try {
            setDeleting(true);

            const response = await deleteEvent(id);

            alert(response.message);

            navigate("/events");
        } catch (err) {
            console.error(err);

            alert(
                err.response?.data?.message ||
                "Failed to delete event."
            );
        } finally {
            setDeleting(false);
        }
    };

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-20">
                Loading event...
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-20 text-red-600">
                {error}
            </div>
        );
    }

    if (!event) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-20">
                Event not found.
            </div>
        );
    }

    const seatsRemaining = event.capacity - event.attendees;
    const isFull = seatsRemaining <= 0;
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            {/* Banner */}
            <img
                src={
                    event.image ||
                    "https://placehold.co/1200x500?text=Event"
                }
                alt={event.title}
                className="w-full h-[420px] rounded-2xl object-cover"
            />

            {/* Header */}
            <div className="mt-8">
                <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-600">
                    {event.category}
                </span>

                <h1 className="mt-4 text-4xl font-bold">
                    {event.title}
                </h1>

                <p className="mt-6 leading-8 text-gray-600">
                    {event.description}
                </p>
            </div>

            {/* Information */}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                        <Calendar size={18} className="text-indigo-600" />
                        Date
                    </div>

                    <p>{formatDate(event.date)}</p>
                </div>

                <div className="rounded-xl border p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                        <Clock size={18} className="text-indigo-600" />
                        Time
                    </div>

                    <p>
                        {event.startTime} - {event.endTime}
                    </p>
                </div>

                <div className="rounded-xl border p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                        <MapPin size={18} className="text-indigo-600" />
                        Location
                    </div>

                    <p>{event.location}</p>
                </div>

                <div className="rounded-xl border p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                        <IndianRupee size={18} className="text-indigo-600" />
                        Price
                    </div>

                    <p>
                        {Number(event.price) === 0
                            ? "Free"
                            : `₹${event.price}`}
                    </p>
                </div>

                <div className="rounded-xl border p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                        <Users size={18} className="text-indigo-600" />
                        Participants
                    </div>

                    <p className="font-semibold">
                        {event.attendees} / {event.capacity}
                    </p>

                    <p
                        className={`mt-2 text-sm ${isFull ? "text-red-600" : "text-green-600"
                            }`}
                    >
                        {isFull
                            ? "Event Full"
                            : `${seatsRemaining} seat${seatsRemaining === 1 ? "" : "s"
                            } remaining`}
                    </p>
                </div>

                <div className="rounded-xl border p-5">
                    <div className="mb-2 flex items-center gap-2 font-semibold">
                        <User size={18} className="text-indigo-600" />
                        Organizer
                    </div>

                    <p>{event.organizer.name}</p>
                </div>
            </div>

            {/* Registration Button */}
            {/* Action Buttons */}

            {event.isOrganizer ? (
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <button
                        onClick={() => navigate(`/events/edit/${event._id}`)}
                        className="rounded-xl bg-amber-500 py-4 text-lg font-semibold text-white transition hover:bg-amber-600"
                    >
                        Edit Event
                    </button>

                    <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="rounded-xl bg-red-600 py-4 text-lg font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                        {deleting ? "Deleting..." : "Delete Event"}
                    </button>
                </div>
            ) : (
                <button
                    onClick={
                        event.isRegistered
                            ? handleCancelRegistration
                            : handleRegister
                    }
                    disabled={
                        registering ||
                        (!event.isRegistered && isFull)
                    }
                    className={`mt-10 w-full rounded-xl py-4 text-lg font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-gray-400 ${event.isRegistered
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-indigo-600 hover:bg-indigo-700"
                        }`}
                >
                    {registering
                        ? event.isRegistered
                            ? "Cancelling..."
                            : "Registering..."
                        : event.isRegistered
                            ? "Cancel Registration"
                            : isFull
                                ? "Event Full"
                                : "Register for Event"}
                </button>
            )}
        </section>
    );
};

export default EventDetails;