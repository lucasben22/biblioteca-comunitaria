import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.routes.js";
import MongoStore from "connect-mongo";
import session from "express-session";

// 1. Cargar variables de entorno
dotenv.config();

// 2. Configurar app y puerto
const PORT = process.env.PORT;
const app = express();

// 3. Middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Configurar sesiones (antes de las rutas)
app.use(session({
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    ttl: 1000 * 60 * 60 * 24, // un día
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// 5. Conexión a la base de datos
const mongoDBUrl = process.env.MONGO_URL;
mongoose.connect(mongoDBUrl)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Connection error: ", error));

// Rutas
app.use("/", router);

// 7. Iniciar el servidor
app.listen(PORT, () => {
  console.log("Server listening");
});
