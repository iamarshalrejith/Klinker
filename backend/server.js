import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import protectRoute from "./middleware/protectRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", protectRoute, messageRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started at ${PORT}`);
});
