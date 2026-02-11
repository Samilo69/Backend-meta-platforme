const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Authentification
router.post("/register", authController.register);
router.post("/login", authController.login);

// Exemple de route protégée
router.get("/me", authMiddleware, authController.getProfile);

module.exports = router;

