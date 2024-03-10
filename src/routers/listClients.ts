import type { Request, Response } from "express";
import { UsecasesClient } from "../usecases/usecase.clients";


export const listenClientsController = async (req:Request, res:Response) => {
    try {
        const useCase = new UsecasesClient();
        const listClients = await useCase.listClient();
        return res.json({messege: listClients});
    } catch (error) {
        console.error('Error during process!:', error);
        res.status(500).json({ error: "Error during process!" });
    }
}