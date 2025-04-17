import { getUsers } from "../controllers/users.controllers.js";
import { Router } from "express"

const userRouter = Router();

userRouter.get ("/", getUsers);

export default userRouter
