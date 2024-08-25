import express, { application } from "express";
import path from "path";

const app = express();
const _dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", _dirname + "/src/views");
app.use("/public", express.static(path.join(_dirname, "src", "/public")));
app.get("/", (req, res) => res.render("home"));

//포트 3000을 의미함
const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);
