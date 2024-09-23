import express from "express";

const app = express();

app.set("case sensitive routing", true);
app.set("env", "development");
app.set("port", 4500);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = app.get("port");
app.listen(PORT, () => console.log(`servidor abierto en el puerto ${PORT}`));
