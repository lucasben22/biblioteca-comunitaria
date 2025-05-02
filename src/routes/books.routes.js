import { Router } from "express";
import { getBooks, getBook, postBook, putBook, deleteBook } from "../controllers/books.controllers.js";

const bookRouter = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.post("/", postBook);
bookRouter.put("/:id", putBook);
bookRouter.delete("/:id", deleteBook)

export default bookRouter