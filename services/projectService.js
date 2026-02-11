const prisma = require("../prisma/client");

exports.createProject = async (user, data) => {
  const { name, description } = data;

  const project = await prisma.project.create({
    data: {
      name,
      description,
      userId: user.id,
    },
  });

  return project;
};

exports.getAllProjects = async (user) => {
  return await prisma.project.findMany({
    where: { userId: user.id },
  });
};

exports.getProjectById = async (user, projectId) => {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId: user.id,
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
};

exports.updateProject = async (user, projectId, data) => {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId: user.id,
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  return await prisma.project.update({
    where: { id: projectId },
    data,
  });
};

exports.deleteProject = async (user, projectId) => {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId: user.id,
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  await prisma.project.delete({
    where: { id: projectId },
  });

  return { message: "Project deleted successfully" };
};

