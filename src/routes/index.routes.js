import { Router } from "express";
import userRouter from "./users.routes.js";
import bookRouter from "./books.routes.js";
import lendingRouter from "./lendings.routes.js";
import sessionRouter from "./sessions.routes.js";

const router = Router();

router.use("/api/users", userRouter);
router.use("/api/books", bookRouter);
router.use("/api/lendings", lendingRouter);
router.use("/api/login", sessionRouter);

export default router;