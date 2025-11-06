import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import foodRoutes from "./routes/foodRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://mongo:27017/tastyhub");

app.use("/api/foods", foodRoutes);
app.listen(5000, () => console.log("Server running on port 5000"));
