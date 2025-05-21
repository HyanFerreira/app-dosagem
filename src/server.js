import express from "express";
import consumoRoutes from "./routes/consumoRoutes.js";
import ricoRoutes from "./routes/ricoRoutes.js";
import pobreRoutes from "./routes/pobreRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", consumoRoutes);
app.use("/", ricoRoutes);
app.use("/", pobreRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
