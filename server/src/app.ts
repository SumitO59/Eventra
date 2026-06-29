import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

// Security
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Parse Cookies
app.use(cookieParser());

// Compress responses
app.use(compression());

// Logging
app.use(morgan("dev"));

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Eventra Backend is running 🚀",
  });
});

export default app;