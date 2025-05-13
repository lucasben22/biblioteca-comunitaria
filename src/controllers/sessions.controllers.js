
import bcrypt from 'bcrypt';
import { User } from '../models/users.models.js';

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Crear sesión
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    res.status(200).json({ message: "Login success", user: req.session.user });

  } catch (error) {
    res.status(500).json({ message: "Error at starting session", error: error.message });
  }
};

export const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: "Error trying to close session" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Session ended" });
  });
};

export const currentUser = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "No current session" });
  }

  res.status(200).json({
    message: "User in session",
    user: req.session.user
  });
};
