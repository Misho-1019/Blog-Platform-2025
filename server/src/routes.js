import { Router } from "express";
import authController from "./controllers/authController.js";
import spotifyRouter from "./controllers/spotifyController.js";

const routes = Router();

routes.use('/auth', authController)
routes.use('/spotify', spotifyRouter)

export default routes;