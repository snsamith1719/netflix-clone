// const express = require('express'); // CommonJS
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import ENV_VARS from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

console.log("Mongo URI: ", ENV_VARS.MONGO_URI);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
