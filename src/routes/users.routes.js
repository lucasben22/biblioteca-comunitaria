import * as usersController from "../controllers/users.controllers.js"
import { Router } from "express"

const userRouter = Router();

userRouter.get ("/", usersController.getUsers);
userRouter.get ("/:id", usersController.getUserById);
userRouter.post ("/", usersController.postUser);
userRouter.put ("/:id", usersController.putUser)
userRouter.delete ("/:id", usersController.deleteUser);

export default userRouter
