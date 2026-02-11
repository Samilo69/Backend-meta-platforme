const express = require("express");
const router = express.Router();

const workspaceController = require("../controllers/workspaceController");
const authMiddleware = require("../middlewares/authMiddleware");

// Toutes les routes workspace sont protégées
router.use(authMiddleware);

// CRUD workspace
router.post("/", workspaceController.createWorkspace);
router.get("/", workspaceController.getAllWorkspaces);
router.get("/:id", workspaceController.getWorkspaceById);
router.put("/:id", workspaceController.updateWorkspace);
router.delete("/:id", workspaceController.deleteWorkspace);

module.exports = router;

