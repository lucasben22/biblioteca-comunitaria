import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    genre: String,
    available: { type: Boolean, required: true, default: true },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false
    }
});

export const Book = mongoose.model("Book", bookSchema);