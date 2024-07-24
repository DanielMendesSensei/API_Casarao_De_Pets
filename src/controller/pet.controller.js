import { v4 as uuid } from "uuid";
import { getAllPetsService } from "../service/pet.service.js";

export const getAllPets = async (req, res) => {
  try {
    const getPets = await getAllPetsService();
    if (getPets) {
      res.status(200).json(getPets);
    }
  } catch (error) {
    console.error("Erro no serviço de getPet", error);
  }
};

// export const getPetByBody = async (req, res) => {
//   try {
//     const { id } = req.body;
//     const idExist = bancoPet.find((pet) => id == pet.id);
//     if (idExist) {
//       res.status(200).json(idExist);
//     } else {
//       res.status(404);
//     }
//   } catch (error) {
//     console.log("Erro no controlador de getPetByBody", error);
//   }
// };

// export const getPetByParams = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const idExist = bancoPet.find((pet) => id == pet.id);
//     if (idExist) {
//       res.status(200).json(idExist);
//     } else {
//       res.status(404);
//     }
//   } catch (error) {
//     console.log("Erro no controlador de getPetByParams", error);
//   }
// };

// export const deletePetByParams = async (req, res) => {
//   try {
//     const { id } = req.body;

//     const getIndex = bancoPet.findIndex((pet) => pet.id === id);

//     if (getIndex === -1) return null;
//     const removePet = bancoPet.splice(getIndex, 1);
//     res.status(200).json({ message: "Finalizou" });
//     return removePet[0];
//   } catch (error) {
//     console.log("Erro no controlador deletePetByParams", error);
//   }
// };

// export const cadPet = async (req, res) => {
//   try {
//     const novoId = uuid();
//     const { name, age, species } = req.body;
//     const novoAnimal = {
//       id: novoId,
//       name: name,
//       age: age,
//       species: species,
//     };
//     bancoPet.push(novoAnimal);
//     console.log(bancoPet);
//     res.status(201).json(novoAnimal);
//   } catch (error) {
//     console.log("Erro no controlador cadPet", error);
//   }
// };

// export const updadePet = async (req, res) => {
//   try {
//     const { id, name, age, species } = req.body;
//     const idExist = bancoPet.find((pet) => id == pet.id);

//     if (idExist) {
//       const getIndex = bancoPet.findIndex((pet) => pet.id === id);
//       console.log(getIndex);
//       if (getIndex >= 0) {
//         bancoPet[getIndex] = { id: id, name: name, age: age, species: species };
//         console.log(bancoPet[getIndex]);
//       }
//       res.status(200).json(bancoPet[getIndex]);
//     } else {
//       res.status(404).json({ message: "Não existe animal com esse id" });
//     }
//   } catch (error) {}
// };
