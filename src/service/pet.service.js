import { bancoPet } from "../db/bancoPet.js";

export const getAllPetsService = async () => {
  try {
    return bancoPet;
  } catch (error) {
    console.log("Erro no serviço getAllPetsService", error);
  }
};
