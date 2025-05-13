
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

    res.status(200).json({ message: "Login exitoso", user: req.session.user });

  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
  }
};
