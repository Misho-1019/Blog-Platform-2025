import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import routes from "./routes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
}));


try {
    const uri = process.env.MONGO_URI
    await mongoose.connect(uri)

    console.log('DB Connected Successfully!');
} catch (err) {
    console.log('Cannot connect to DB!');
    console.error(err.message);
}

const port = process.env.PORT || 3030;

app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
}))

app.use(routes)
app.use(authMiddleware)

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`))
