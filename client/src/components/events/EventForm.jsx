import { useEffect, useState } from "react";

const categories = [
  "Workshop",
  "Hackathon",
  "Seminar",
  "Conference",
  "Sports",
  "Cultural",
  "Technical",
  "Other",
];

const EventForm = ({
  initialValues,
  onSubmit,
  loading,
  title = "Create Event",
  submitButtonText = "Save Event",
}) => {
  const [formData, setFormData] = useState(initialValues);
  useEffect(() => {
  setFormData(initialValues);
}, [initialValues]);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.category ||
      !formData.date ||
      !formData.startTime ||
      !formData.endTime ||
      !formData.location.trim() ||
      !formData.capacity
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (Number(formData.capacity) < 1) {
      setError("Capacity must be at least 1.");
      return;
    }

    onSubmit({
      ...formData,
      capacity: Number(formData.capacity),
    });
  };

  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">
      <h1 className="mb-8 text-3xl font-bold">
  {title}
</h1>

      {error && (
        <div className="mb-6 rounded-lg bg-red-100 p-3 text-red-600">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Title */}

        <div>
          <label className="mb-2 block font-medium">
            Title *
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block font-medium">
            Description *
          </label>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Category */}

        <div>
          <label className="mb-2 block font-medium">
            Category *
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}

        <div>
          <label className="mb-2 block font-medium">
            Date *
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Time */}

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Start Time *
            </label>

            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              End Time *
            </label>

            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>

        {/* Location */}

        <div>
          <label className="mb-2 block font-medium">
            Location *
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Image */}

        <div>
          <label className="mb-2 block font-medium">
            Image URL
          </label>

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Price */}

        <div>
          <label className="mb-2 block font-medium">
            Price
          </label>

          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Capacity */}

        <div>
          <label className="mb-2 block font-medium">
            Capacity *
          </label>

          <input
            type="number"
            min="1"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Please wait..."
            : submitButtonText}
        </button>
      </form>
    </div>
  );
};

export default EventForm;