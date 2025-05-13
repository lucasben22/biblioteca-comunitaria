import { Router } from "express";
import { postLogin } from "../controllers/sessions.controllers.js";

const loginRouter = Router();
loginRouter.post("/", postLogin);

export default loginRouter;