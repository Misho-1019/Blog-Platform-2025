import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import routes from "./routes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app = express();

try {
    const uri = 'mongodb+srv://mikail:Mvt12345@cluster0.0jspcgh.mongodb.net/Blog-Platform-2025?retryWrites=true&w=majority&appName=Cluster0'
    await mongoose.connect(uri)

    console.log('DB Connected Successfully!');
} catch (err) {
    console.log('Cannot connect to DB!');
    console.error(err.message);
}

const port = process.env.PORT || 3030;

app.use(express.json())
app.use(cookieParser())
app.use(authMiddleware)

app.use(routes)

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`))
