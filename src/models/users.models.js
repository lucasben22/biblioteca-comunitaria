import mongoose, { Schema } from "mongoose";

const userSchema = new Schema ({
    name: {type: String, required: true},
    age: Number,
    email: {type: String, unique: true, required: true},
    address: {type: String},
    isActive: {type: Boolean, default: true},
    role: {type: String, enum: ["user", "admin"], default: "user"}
})

export const User = mongoose.model ("User", userSchema);


    

