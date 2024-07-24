import { Router } from "express";

import {
  cadPet,
  deletePetByParams,
  getAllPets,
  getPetByBody,
  getPetByParams,
  updadePet,
} from "../controller/pet.controller.js";

const petRouter = Router();

// PEGAR TODOS OS ANIMAIS CADASTRADOS NO BANCO
petRouter.get("/api/getAllPets", getAllPets);
petRouter.get("/api/getPetByBody", getPetByBody);
petRouter.get("/api/getPetByParams/:id", getPetByParams);
petRouter.delete("/api/deletePet", deletePetByParams);
petRouter.post("/api/cadPet", cadPet);
petRouter.put("/api/updatePet", updadePet);

export default petRouter;
