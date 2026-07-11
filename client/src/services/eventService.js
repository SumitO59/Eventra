import api from "../api/axios";

export const createEvent = async (eventData) => {
  const response = await api.post("/events", eventData);
  return response.data;
};

export const getEvents = async () => {
  const response = await api.get("/events");
  return response.data;
};

export const getFeaturedEvents = async () => {
  const response = await api.get("/events");

  return response.data.events.filter((event) => event.featured);
};

export const getEventById = async (id) => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};

export const updateEvent = async (id, eventData) => {
  const response = await api.put(`/events/${id}`, eventData);
  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response.data;
};

export const registerForEvent = async (id) => {
  const response = await api.post(`/events/${id}/register`);
  return response.data;
};

export const cancelRegistration = async (id) => {
  const response = await api.delete(`/events/${id}/register`);
  return response.data;
};

export const getMyEvents = async () => {
  const response = await api.get("/events/my-events");
  return response.data;
};

export const getMyRegistrations = async () => {
  const response = await api.get("/events/my-registrations");
  return response.data;
};