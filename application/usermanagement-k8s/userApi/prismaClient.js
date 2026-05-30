import pkg from "@prisma/client";
import "dotenv/config"; // On charge le .env ici, côté Node.js (qui fonctionne parfaitement)

const { PrismaClient } = pkg;

// On injecte manuellement l'URL de ton .env dans les options de Prisma
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;
