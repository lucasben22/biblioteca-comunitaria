import express from "express";

const PORT = 3000;
const app = express();

app.get ("/", (req, res) => {
    res.send("paises bajos")
});

app.listen(PORT, ()=>{
    console.log("Listen on Port: ", PORT)
});

