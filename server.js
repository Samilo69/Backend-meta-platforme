import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

// Prisma 7 : OBLIGATOIRE → passer datasourceUrl ici
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

const app = express();
app.use(express.json());

// Exemple de route test
app.get("/", (req, res) => {
  res.send("API OK");
});

// Exemple : récupérer tous les users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
