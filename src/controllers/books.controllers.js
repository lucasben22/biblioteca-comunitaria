import { Book } from "../models/books.models.js";

export const getBooks = async (req,res) => {
try {
    const books = await Book.find();
    res.status(201).send(books)
}
catch(error) {
    res.status(400).send({answer: "Error", message: error.message})
}
}

export const getBook = async (req,res) => {
    const {id} = req.params;

    try {
        const book = await Book.findById(id).populate("owner", "name email");
        if(book)
            res.status(201).send({answer: "Ok", message: "Book: ", book})
        else
            res.status(404).send({answer: "Error", message: "Book not found"})
    }
    catch (error) {
        res.status(400).send({answer: "Error", message: error.message})
    }
}

export const postBook = async (req,res) => {
    const {title, author, genre, available, owner} = req.body;

    if (!title || !author || !genre || ! owner || available === undefined)
        return res.status(400).send({answer: "Error", message: "Missing required fields"})
        try {
            const newBook = await Book.create({title, author, genre, available, owner});
            res.status(201).send({answer: "Ok", message: "Book created", newBook})
        }
    catch (error) {
        res.status(400).send({answer: "Error", message: error.message})
    }
}

export const putBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, available, owner } = req.body;

    if (!title || !author || !genre || !owner || available === undefined) {
        return res.status(400).send({
            answer: "Error",
            message: "Missing required fields"
        });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, genre, available, owner },
            { new: true }
        ).populate("owner", "name email");

        res.status(200).send({
            answer: "Ok",
            message: "Book updated",
            book: updatedBook
        });

    } catch (error) {
        res.status(400).send({
            answer: "Error",
            message: error.message
        });
    }
};

export const deleteBook = async (req,res) => {
    const {id} = req.params;
    try
        {
       const bookDeleted = await Book.findByIdAndDelete(id);
              if (!bookDeleted) {
                  return res.status(404).send({ answer: "Error", message: "User not found" });
              }
              res.status(200).send({ answer: "Ok", message: "Book deleted" });
          } catch (error) {
              res.status(400).send({ answer: "Error", message: error.message });
          }
      };
