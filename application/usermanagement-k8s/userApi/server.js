import dotenv from "dotenv";
import app from "./src/app.js"; // ⚠️ Note bien l'extension .js ici !

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
