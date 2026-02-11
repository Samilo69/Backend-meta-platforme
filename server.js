const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Import des routes
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/projects");
const workspaceRoutes = require("./routes/workspace");
const moduleRoutes = require("./routes/modules");

// Utilisation des routes
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/workspace", workspaceRoutes);
app.use("/modules", moduleRoutes);

// Route test
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "meta-backend" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
