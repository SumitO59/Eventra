import express from "express";

import {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    registerForEvent,
    getMyEvents,
    getMyRegistrations,
    cancelRegistration
} from "../controllers/eventController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAllEvents);
router.get("/:id", getEventById);

// Protected Routes
router.get("/my-events", protect, getMyEvents);
router.get("/my-registrations", protect, getMyRegistrations);
router.post("/", protect, createEvent);
router.put("/:id", protect, updateEvent);
router.delete("/:id", protect, deleteEvent);
router.post("/:id/register", protect, registerForEvent);
router.delete("/:id/register", protect, cancelRegistration);

export default router;