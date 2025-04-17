import mongoose, { Schema } from "mongoose";

const userSchema = new Schema ({
    name: {type: String, required: true},
    age: Number,
    email: {type: String, unique: true, required: true},
    address: {type: String, unique: true},
    isActive: {type: Boolean, default: true}
})

export const User = mongoose.model ("User", userSchema);


    

