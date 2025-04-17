import express from "express";
import mongoose from "mongoose";

//SERVER
const PORT = 3000;
const app = express();
app.listen(PORT, ()=>{
    console.log("Listen on Port: ", PORT)
});

//ROUTES
app.get ("/", (req, res) => {
    res.send("paises bajos")
});


//DB
const mongoDBUrl = "mongodb://127.0.0.1:27017/BiblioComu";
mongoose.connect(mongoDBUrl)
    .then(()=> console.log("Conectado"))
    .catch((error)=> console.log("Error de conexión: ", error));

//MW
