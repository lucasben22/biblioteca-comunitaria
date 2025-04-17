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

export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);

        if (user) {
            res.status(200).send({ answer: "Ok", message: user });
        } else {
            res.status(404).send({ answer: "Error", message: "User not found" });
        }
    } catch (error) {
        res.status(400).send({ answer: "Error", message: error.message });
    }
};
