import mongoose, { Schema } from "mongoose";

const lendingSchema = new Schema ({
    requestedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    title: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    status: {
    type: String,
    enum: ["accepted", "rejected", "returned"],
    default: "aceptado" 
    }
})

export const Lending = mongoose.model("Lending", lendingSchema)