import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import authRoutes from "../Routes/auth.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Your existing routes
app.use("/api/auth", authRoutes);

// Simple test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend API working ✅" });
});

export const handler = serverless(app);
export default handler;
