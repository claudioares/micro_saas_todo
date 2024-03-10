import { prisma } from "../database/prisma.config";

export class Repositorie {

    async listUser() {
        const dataClient = await prisma.user.findMany();

        return dataClient;
    }
    async findOneUser(_id: string) {

        const dataClients = await prisma.user.findUnique({
            where: {
                id:_id
            }
        });

        return dataClients;
    }
}