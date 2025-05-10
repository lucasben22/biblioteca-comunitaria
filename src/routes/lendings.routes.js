import { Router } from "express";
import { postLending } from "../controllers/lendings.controllers.js";

const lendingRouter = Router();

lendingRouter.post("/", postLending);

export default lendingRouter;