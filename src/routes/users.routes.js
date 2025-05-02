import { getUsers, getUserById, deleteUser, postUser } from "../controllers/users.controllers.js";
import { Router } from "express"

const userRouter = Router();

userRouter.get ("/", getUsers);
userRouter.get ("/:id", getUserById);
userRouter.post ("/", postUser);
userRouter.delete ("/:id", deleteUser);

export default userRouter
