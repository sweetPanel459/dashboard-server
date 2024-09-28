import express from "express";
import "dotenv/config";

import { router } from "./routes/routes.js";

const app = express();
const port = process.env.SERVER_PORT;

app.set("case sensitive routing", true);
app.set("env", "development");
app.set("port", port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = app.get("port");
app.listen(PORT, () => console.log(`servidor abierto en el puerto ${PORT}`));
