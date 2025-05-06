import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.routes.js";

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
app.use("/", router);

//DB
const mongoDBUrl = "mongodb://127.0.0.1:27017/BiblioComu";
mongoose.connect(mongoDBUrl)
    .then(()=> console.log("Conectado"))
    .catch((error)=> console.log("Error de conexión: ", error));
