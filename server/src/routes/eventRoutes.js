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
  cancelRegistration,
} from "../controllers/eventController.js";

import {
  protect,
  optionalProtect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAllEvents);

// Protected Routes
router.get("/my-events", protect, getMyEvents);
router.get("/my-registrations", protect, getMyRegistrations);

router.post("/", protect, createEvent);
router.put("/:id", protect, updateEvent);
router.delete("/:id", protect, deleteEvent);

router.post("/:id/register", protect, registerForEvent);
router.delete("/:id/register", protect, cancelRegistration);

// Dynamic route should come last
router.get("/:id", optionalProtect, getEventById);

export default router;