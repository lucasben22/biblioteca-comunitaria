import { Router } from "express";
import { getLendings, postLending } from "../controllers/lendings.controllers.js";

const lendingRouter = Router();

lendingRouter.get("/", getLendings);
lendingRouter.post("/", postLending);

export default lendingRouter;