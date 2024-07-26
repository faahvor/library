import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const app = express();
const port = "5555"


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})