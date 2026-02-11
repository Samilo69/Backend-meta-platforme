const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const result = await authService.register(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const result = await authService.getProfile(req.user);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

