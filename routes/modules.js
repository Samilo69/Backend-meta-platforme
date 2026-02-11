const express = require("express");
const router = express.Router();

const moduleController = require("../controllers/moduleController");
const authMiddleware = require("../middlewares/authMiddleware");

// Toutes les routes modules sont protégées
router.use(authMiddleware);

// CRUD modules
router.post("/", moduleController.createModule);
router.get("/", moduleController.getAllModules);
router.get("/:id", moduleController.getModuleById);
router.put("/:id", moduleController.updateModule);
router.delete("/:id", moduleController.deleteModule);

module.exports = router;

