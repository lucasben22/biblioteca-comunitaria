import { Lending } from "../models/lendings.models.js";
import { Book } from "../models/books.models.js";

export const getLendings = async (req,res) => {
    try {
        const lendings = await Lending.find().populate("requestedBy", "name")
        .populate("book", "title")
        .populate("owner", "name");
        res.status(200).send(lendings)
    }catch (error) {
        res.status(400).send({answer: "Error", message: error.message})
    }
}

export const postLending = async (req, res) => {
    const { requestedBy, owner, book, status } = req.body;

    try {
        if (!requestedBy || !owner || !book || !status) {
            return res.status(400).send({ answer: "Error", message: "Missing required fields" });
        } 
        if (requestedBy == owner) {
            return res.status(400).send({ answer: "Error", message: "Same owner and user request" });
        }
        const foundBook = await Book.findById(book);
        if (!foundBook.available) {
            return res.status(400).send({ answer: "Error", message: "Book is already lent" });
        }
        const newLending = await Lending.create({ requestedBy, owner, book, status });
        await Book.findByIdAndUpdate(book, { available: false });
        res.status(200).send({ answer: "Ok", message: "New Lending created", newLending });

    } catch (error) {
        res.status(400).send({ answer: "Error", message: error.message });
    }
};