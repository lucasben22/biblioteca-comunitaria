import { Router } from "express";
import { getBooks, getBook, postBook, putBook, deleteBook } from "../controllers/books.controllers.js";
import { isAdmin } from "../middlewares/role.middleware.js";

const bookRouter = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.post("/", isAdmin, postBook);
bookRouter.put("/:id", putBook);
bookRouter.delete("/:id", deleteBook)

export default bookRouter