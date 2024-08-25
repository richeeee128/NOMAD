import express, { application } from "express";
import path from "path";

const app = express();
const dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", dirname + "/src/views");

app.get("/", (req, res) => res.render("home"));

//포트 3000을 의미함
const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);
