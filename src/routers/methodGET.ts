import type { Request, Response } from "express";


export const listenUserController = (req:Request, res:Response) => {
    return res.json({messege: "Server in running aplication"})
}