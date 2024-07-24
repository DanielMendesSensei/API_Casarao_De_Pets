import express from "express";
import petRouter from "./routes/pet.routes.js";

const app = express();

app.use(express.json());
app.use("/", petRouter);

app.listen("8080", () => console.log("Executando na porta 8080"));
