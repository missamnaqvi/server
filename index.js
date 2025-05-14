import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

import connectMongoAtlas from "./src/config/databaseConnection.js";
import { initializeRoutes } from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 3001;

// Initialize Middlewares
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectMongoAtlas();

// Initialize Routes
app.get("/", (req, res) => {
  res.send("Welcome to Node Server!");
});

initializeRoutes(app);

// Add response for root route "/"

// Start the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
