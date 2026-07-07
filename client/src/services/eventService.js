import api from "../api/axios";

export const getAllEvents = async () => {
    const response = await api.get("/events");
    return response.data.events;
};

export const getFeaturedEvents = async () => {
    const events = await getAllEvents();

    return events.filter((event) => event.featured);
};