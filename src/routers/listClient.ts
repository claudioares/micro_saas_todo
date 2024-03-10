import type { Request, Response } from "express";
import { UsecasesClient } from "../usecases/usecase.clients";

export const listClientController = async (req:Request, res:Response) => {
    const {id} = req.params;
    try {
        const useCase = new UsecasesClient();
        const responseUseCase = await useCase.findOneUser(id);

        return res.status(201).json(responseUseCase);
        
    } catch (error) {
        console.error('Error during process!:', error);
        res.status(500).json({ error: "Error during process!" });
    }
}