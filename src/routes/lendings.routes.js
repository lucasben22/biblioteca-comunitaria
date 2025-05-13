import { Router } from "express";
import * as lendingsController from "../controllers/lendings.controllers.js";

const lendingRouter = Router();

lendingRouter.get("/", lendingsController.getLendings);
lendingRouter.post("/", lendingsController.postLending);
lendingRouter.put("/:id", lendingsController.putLending);

export default lendingRouter;