import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    try {
        let token;

        // Check if Authorization header exists
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            // Extract token
            token = req.headers.authorization.split(" ")[1];

            // Verify JWT
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch user from database
            req.user = await User.findById(decoded.id).select("-password");

            // User deleted after token issued
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "User not found",
                });
            }

            return next();
        }

        return res.status(401).json({
            success: false,
            message: "Not authorized. No token provided.",
        });

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};