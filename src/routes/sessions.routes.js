import { Router } from "express";
import { postLogin, logout, currentUser } from "../controllers/sessions.controllers.js";

const sessionRouter = Router();
sessionRouter.post("/", postLogin);
sessionRouter.post("/logout", logout);
sessionRouter.get("/current", currentUser);

export default sessionRouter;