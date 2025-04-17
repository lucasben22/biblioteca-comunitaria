import { User } from "../models/users.models.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
            res.status(201).send({answer: "Ok", message: users})
    }
    catch (error) {
            res.status(400).send({answer: "Error", message: error})
    }
}