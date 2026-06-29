import dotenv from "dotenv";
import app from "./app.js";
import { env } from "./config/env.js";
import logger from "./utils/logger.js";

dotenv.config();

const PORT = Number(env.PORT);

app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`);
});