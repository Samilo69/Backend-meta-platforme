const moduleService = require("../services/moduleService");

exports.createModule = async (req, res) => {
  try {
    const result = await moduleService.createModule(req.user, req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllModules = async (req, res) => {
  try {
    const result = await moduleService.getAllModules(req.user);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getModuleById = async (req, res) => {
  try {
    const result = await moduleService.getModuleById(
      req.user,
      req.params.id
    );
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateModule = async (req, res) => {
  try {
    const result = await moduleService.updateModule(
      req.user,
      req.params.id,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteModule = async (req, res) => {
  try {
    const result = await moduleService.deleteModule(
      req.user,
      req.params.id
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

