export const isAdmin = (req, res, next) => {
  // Asegurarse de que hay sesión activa y rol
  if (req.session?.user?.role === "admin") {
    return next(); // continua a postBook
  }

  return res.status(403).json({
    status: "Error",
    message: "Access denied: Admins only",
  });
};
