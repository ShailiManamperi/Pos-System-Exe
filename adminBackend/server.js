// import dotenv from 'dotenv';
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mainRoutes from "./Routes/mainRoutes.js";
// import auth from "./Routes/auth.js";
// import * as path from "path";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 6000; // Default to 6000 if PORT not in .env

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow frontend origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// }));
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true })); // Handles form data
// app.use(bodyParser.json({ limit: "20mb" }));
// app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));


// // Serve static files (if needed, e.g., images, barcodes)
// app.use('/uploads', express.static(path.resolve('uploads')));

// // Routes
// app.use('/api/admin/main', mainRoutes);
// app.use('/api/auth', auth);

// // Default route
// app.get('/', (req, res) => {
//     res.send('Shejama Group Management System API is running.');
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import mainRoutes from './Routes/mainRoutes.js';
import auth from './Routes/auth.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

// ⚠️ Static uploads (local only — won’t persist on Vercel)
app.use('/uploads', express.static(path.resolve('uploads')));

// Serve React frontend
app.use(express.static(path.join(__dirname, '../adminFrontend/build')));

// API routes
app.use('/api/admin/main', mainRoutes);
app.use('/api/auth', auth);

// Catch-all for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../adminFrontend/build', 'index.html'));
});

// ✅ Export app for Vercel
export default app;

// ✅ Run locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running locally on http://localhost:${PORT}`);
  });
}

