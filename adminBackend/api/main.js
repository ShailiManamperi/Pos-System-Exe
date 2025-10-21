import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import mainRoutes from "../Routes/mainRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Your existing main routes
app.use("/api/admin/main", mainRoutes);

// Simple test route
app.get("/api/main/test", (req, res) => {
  res.json({ message: "Main API route working ✅" });
});

export const handler = serverless(app);
export default handler;
