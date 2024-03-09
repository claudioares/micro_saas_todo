import { App } from "./app";

const app = new App();

app.useCors();
app.useJson();
app.listen();
app.methodGet();


  