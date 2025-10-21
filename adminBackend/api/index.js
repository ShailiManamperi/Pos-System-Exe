import serverless from 'serverless-http';
import app from '../server.js';

// Export the Express app as a serverless function for Vercel
export const handler = serverless(app);
export default handler;
