import express from 'express';
import mongoose from "mongoose";
const app = express();
app.use(express.json());

app.get("/str", (req, res) => {
    return res.json({
        msg: "Some random String",
    })
})

app.listen(3000, ()=> {
    console.log("App is listening at port 3000");
})