import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.get('/hello', (req, res) => res.send(`EH SALUT ! ${process.env.MENFOU} !!!!!!`));

app.listen(3000, ()=> console.log("Application démarrée sur le port 3000"));
