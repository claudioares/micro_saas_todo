import express, { type Application } from "express"
import cors from 'cors'
import { listenUserController } from "./routers/methodGET";

export class App {
    private app: Application;
    constructor(){
        this.app = express();
    }

    useCors () {
        this.app.use(cors());
    }

    useJson () {
        this.app.use(express.json());
    }
    listen () {
        const port = 3333;
        this.app.listen(port, ()=>{
            console.log('Server runnig on port 3333...')
        })
    }

    methodGet () {
        this.app.get("/", listenUserController)
    }

}