import { getUsers, getUserById } from "../controllers/users.controllers.js";
import { Router } from "express"

const userRouter = Router();

userRouter.get ("/", getUsers);
userRouter.get ("/:id", getUserById);

export default userRouter
