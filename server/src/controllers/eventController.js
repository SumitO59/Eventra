import Event from "../models/Event.js";

// @desc    Create a new event
// @route   POST /api/events
// @access  Private
export const createEvent = async (req, res) => {
    try {
        const {
            title,
            description,
            category,
            date,
            startTime,
            endTime,
            location,
            image,
            capacity,
        } = req.body;

        const event = await Event.create({
            title,
            description,
            category,
            date,
            startTime,
            endTime,
            location,
            image,
            capacity,
            organizer: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: "Event created successfully",
            event,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// @desc    Get all events
// @route   GET /api/events
// @access  Public
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
            .populate("organizer", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: events.length,
            events,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// @desc    Get single event
// @route   GET /api/events/:id
// @access  Public
export const getEventById = async (req, res) => {
    try {

        const event = await Event.findById(req.params.id)
            .populate("organizer", "name email");

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        res.status(200).json({
            success: true,
            event,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// @desc    Update event
// @route   PUT /api/events/:id
// @access  Private
export const updateEvent = async (req, res) => {
    try {

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Authorization check
        if (event.organizer.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this event",
            });
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).populate("organizer", "name email");

        res.status(200).json({
            success: true,
            message: "Event updated successfully",
            event: updatedEvent,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private
export const deleteEvent = async (req, res) => {
    try {

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Check ownership
        if (event.organizer.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this event",
            });
        }

        await event.deleteOne();

        res.status(200).json({
            success: true,
            message: "Event deleted successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};


// @desc    Register for an event
// @route   POST /api/events/:id/register
// @access  Private
export const registerForEvent = async (req, res) => {
    try {

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Check if already registered
        const alreadyRegistered = event.registeredUsers.some(
            (userId) => userId.toString() === req.user._id.toString()
        );

        if (alreadyRegistered) {
            return res.status(400).json({
                success: false,
                message: "You are already registered for this event",
            });
        }

        // Check capacity
        if (event.registeredUsers.length >= event.capacity) {
            return res.status(400).json({
                success: false,
                message: "Event is full",
            });
        }

        event.registeredUsers.push(req.user._id);

        await event.save();

        res.status(200).json({
            success: true,
            message: "Successfully registered for the event",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// @desc    Get events created by logged-in user
// @route   GET /api/events/my-events
// @access  Private
export const getMyEvents = async (req, res) => {
    try {

        const events = await Event.find({
            organizer: req.user._id,
        })
        .populate("organizer", "name email")
        .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: events.length,
            events,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// @desc    Get events registered by logged-in user
// @route   GET /api/events/my-registrations
// @access  Private
export const getMyRegistrations = async (req, res) => {
    try {

        const events = await Event.find({
            registeredUsers: req.user._id,
        })
        .populate("organizer", "name email")
        .sort({ date: 1 });

        res.status(200).json({
            success: true,
            count: events.length,
            events,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// @desc    Cancel event registration
// @route   DELETE /api/events/:id/register
// @access  Private
export const cancelRegistration = async (req, res) => {
    try {

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Check if user is registered
        const isRegistered = event.registeredUsers.some(
            (userId) => userId.toString() === req.user._id.toString()
        );

        if (!isRegistered) {
            return res.status(400).json({
                success: false,
                message: "You are not registered for this event",
            });
        }

        // Remove the user from the registration list
        event.registeredUsers = event.registeredUsers.filter(
            (userId) => userId.toString() !== req.user._id.toString()
        );

        await event.save();

        res.status(200).json({
            success: true,
            message: "Registration cancelled successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};