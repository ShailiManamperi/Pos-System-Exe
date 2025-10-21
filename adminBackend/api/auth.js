import auth from "../Routes/auth.js";
import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());
app.use("/api/auth", auth);

export const handler = serverless(app);
export default handler;
