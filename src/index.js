import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.routes.js";
import bookRouter from "./routes/books.routes.js";

//SERVER
const PORT = 3000;
const app = express();
app.listen(PORT, ()=>{
    console.log("Listen on Port: ", PORT)
});

//MW
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//ROUTES
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

//DB
const mongoDBUrl = "mongodb://127.0.0.1:27017/BiblioComu";
mongoose.connect(mongoDBUrl)
    .then(()=> console.log("Conectado"))
    .catch((error)=> console.log("Error de conexión: ", error));
