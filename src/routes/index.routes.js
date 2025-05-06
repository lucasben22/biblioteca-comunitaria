import { Router } from "express";
import userRouter from "./users.routes.js";
import bookRouter from "./books.routes.js";

const router = Router();

router.use("/api/users", userRouter);
router.use("/api/books", bookRouter);

export default router;