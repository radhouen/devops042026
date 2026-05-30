import express from "express";
import cors from "cors";
import userRoutes from "../routes/userRoutes.js";

// 1. INITIALISATION d'abord (On crée l'objet app)
const app = express();

// 2. CONFIGURATION des middlewares (Maintenant on peut utiliser app.use)
app.use(cors());
app.use(express.json());

// 3. LES ROUTES
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "en mode test k8s." });
});

export default app;
