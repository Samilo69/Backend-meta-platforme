const projectService = require("../services/projectService");

exports.createProject = async (req, res) => {
  try {
    const result = await projectService.createProject(req.user, req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const result = await projectService.getAllProjects(req.user);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const result = await projectService.getProjectById(req.user, req.params.id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const result = await projectService.updateProject(
      req.user,
      req.params.id,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const result = await projectService.deleteProject(req.user, req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

