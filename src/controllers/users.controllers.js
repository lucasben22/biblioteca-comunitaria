import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
            res.status(201).json({status: "Ok", message: users})
    }
    catch (error) {
            res.status(400).json({status: "Error", message: error})
    }
}

export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);

        if (user) {
            res.status(200).json({ status: "Ok", message: user });
        } else {
            res.status(404).json({ status: "Error", message: "User not found" });
        }
    } catch (error) {
        res.status(400).json({ status: "Error", message: error.message });
    }
};

export const postUser = async (req, res) => {
  const { name, age, email, address, isActive, role, password } = req.body;

  // Validación de campos obligatorios
  if (!name || !age || !email || !address || !role || isActive === undefined || !password) {
    return res.status(400).json({
      status: "Error",
      message: "Missing required fields",
    });
  }

  try {

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: "Error",
        message: "El usuario ya existe con ese email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      age,
      email,
      address,
      isActive,
      role,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "Ok",
      message: "User created",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

export const putUser = async (req, res) => {
    const {id} = req.params;
    const {name, age, address, email, isActive, role } = req.body;

    if(!name || !age || !email || !address || !role ||  !isActive === undefined) {
        return res.status(400).json({status: "Error", message: "Missing required fields"})
    } 
    try {
        const user = await User.findByIdAndUpdate(id, {name, age, email, address, isActive, role});
    if(user)
        res.status(201).json({status: "Ok", message: "User updated: ", user})
    else
        res.status(404).json({status: "Error", message: "User not found"})
    } catch(error) {
        res.status(400).json({status:"Error", message: error.message})
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const userDeleted = await User.findByIdAndDelete(id);
        if (!userDeleted) {
            return res.status(404).json({ status: "Error", message: "User not found" });
        }
        res.status(200).json({ status: "Ok", message: "User deleted" });
    } catch (error) {
        res.status(400).json({ status: "Error", message: error.message });
    }
};
