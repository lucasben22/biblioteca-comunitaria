import { Router } from "express";
import userRouter from "./users.routes.js";
import bookRouter from "./books.routes.js";
import lendingRouter from "./lendings.routes.js";

const router = Router();

router.use("/api/users", userRouter);
router.use("/api/books", bookRouter);
router.use("/api/lendings", lendingRouter);

export default router;