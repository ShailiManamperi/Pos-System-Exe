import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import bodyParser from "body-parser";
import mainRoutes from "../Routes/mainRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/admin/main", mainRoutes);

export const handler = serverless(app);
export default handler;
