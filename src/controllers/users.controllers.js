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

export const postUser = async (req, res) => {
    const {name, age, email, address, isActive} = req.body;

    if(!name || !age || !email || !address || !isActive) {
        return res.status(400).send({answer: "Error", message: "Missing required fields"})
    } 
    try {
        const newUser = await User.create({name, age, email, address, isActive});
        res.status(201).send({answer: "Ok", message: "User created: ", newUser})
    } catch(error) {
        res.status(400).send({answer:"Error", message: error.message})
    }
}

export const putUser = async (req, res) => {
    const {id} = req.params;
    const {name, age, address, email, isActive} = req.body;

    if(!name || !age || !email || !address || !isActive) {
        return res.status(400).send({answer: "Error", message: "Missing required fields"})
    } 
    try {
        const user = await User.findByIdAndUpdate(id, {name, age, email, address, isActive});
    if(user)
        res.status(201).send({answer: "Ok", message: "User updated: ", user})
    else
        res.status(404).send({answer: "Error", message: "User not found"})
    } catch(error) {
        res.status(400).send({answer:"Error", message: error.message})
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const userDeleted = await User.findByIdAndDelete(id);
        if (!userDeleted) {
            return res.status(404).send({ answer: "Error", message: "User not found" });
        }
        res.status(200).send({ answer: "Ok", message: "User deleted" });
    } catch (error) {
        res.status(400).send({ answer: "Error", message: error.message });
    }
};
