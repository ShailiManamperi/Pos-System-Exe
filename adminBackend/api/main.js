import mainRoutes from "../Routes/mainRoutes.js";
import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());
app.use("/api/admin/main", mainRoutes);

export const handler = serverless(app);
export default handler;
