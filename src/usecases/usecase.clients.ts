import { Repositorie } from "../repositorie/repositorie";

export class UsecasesClient {

    private repositorie: Repositorie;
    constructor() {
        this.repositorie = new Repositorie();
    };


    async listClient () {
        const dataClients = await this.repositorie.listUser();

        return dataClients;
    }

    async findOneUser (id: string) {
        const dataClient = await this.repositorie.findOneUser(id);

        if (!dataClient) {return{error: "Not found!"}};

        return dataClient;
    }
}