const workspaceService = require("../services/workspaceService");

exports.createWorkspace = async (req, res) => {
  try {
    const result = await workspaceService.createWorkspace(req.user, req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllWorkspaces = async (req, res) => {
  try {
    const result = await workspaceService.getAllWorkspaces(req.user);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWorkspaceById = async (req, res) => {
  try {
    const result = await workspaceService.getWorkspaceById(
      req.user,
      req.params.id
    );
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateWorkspace = async (req, res) => {
  try {
    const result = await workspaceService.updateWorkspace(
      req.user,
      req.params.id,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWorkspace = async (req, res) => {
  try {
    const result = await workspaceService.deleteWorkspace(
      req.user,
      req.params.id
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

