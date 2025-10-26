import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import geminiResponse from "./gemini.js"; // only if you're using it

dotenv.config();

const app = express();

app.use(
  cors({
    // origin: "https://virtual-assistant-9y56.vercel.app",
    origin:"http://localhost:5173", // change to your frontend URL when deployed
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// ✅ Connect to DB once
await connectDb();

// ✅ Start server if running locally (Vercel handles this automatically)
const port = process.env.PORT || 8000;
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

// ✅ Export app for Vercel
export default app;
