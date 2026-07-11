import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EventForm from "../../components/events/EventForm";
import {
  createEvent,
  getEventById,
  updateEvent,
} from "../../services/eventService";

const CreateEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditMode = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(isEditMode);
  const [serverError, setServerError] = useState("");

  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    image: "",
    price: "Free",
    capacity: 1,
  });

  useEffect(() => {
    if (!isEditMode) return;

    const fetchEvent = async () => {
      try {
        setPageLoading(true);
        setServerError("");

        const response = await getEventById(id);
        const event = response.event;

        setInitialValues({
          title: event.title,
          description: event.description,
          category: event.category,
          date: event.date?.split("T")[0] || "",
          startTime: event.startTime,
          endTime: event.endTime,
          location: event.location,
          image: event.image || "",
          price: event.price,
          capacity: event.capacity,
        });
      } catch (err) {
        console.error(err);

        setServerError(
          err.response?.data?.message ||
          "Failed to load event."
        );
      } finally {
        setPageLoading(false);
      }
    };

    fetchEvent();
  }, [id, isEditMode]);

  const handleCreateEvent = async (formData) => {
    try {
      setLoading(true);
      setServerError("");

      if (isEditMode) {
        const response = await updateEvent(id, formData);

        navigate(`/events/${response.event._id}`, {
          replace: true,
        });
      } else {
        const response = await createEvent(formData);

        navigate(`/events/${response.event._id}`, {
          replace: true,
        });
      }
    } catch (err) {
      console.error(err);

      setServerError(
        err.response?.data?.message ||
        `Failed to ${isEditMode ? "update" : "create"
        } event.`
      );
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <section className="min-h-screen bg-slate-100 py-10 px-4">
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">
          Loading event...
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 py-10 px-4">
      {serverError && (
        <div className="mx-auto mb-6 max-w-3xl rounded-lg bg-red-100 p-4 text-red-600">
          {serverError}
        </div>
      )}

      <EventForm
        initialValues={initialValues}
        onSubmit={handleCreateEvent}
        loading={loading}
        title={
          isEditMode
            ? "Edit Event"
            : "Create Event"
        }
        submitButtonText={
          isEditMode
            ? "Update Event"
            : "Create Event"
        }
      />
    </section>
  );
};

export default CreateEvent;