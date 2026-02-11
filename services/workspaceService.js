const prisma = require("../prisma/client");

exports.createWorkspace = async (user, data) => {
  const { name, description } = data;

  const workspace = await prisma.workspace.create({
    data: {
      name,
      description,
      userId: user.id,
    },
  });

  return workspace;
};

exports.getAllWorkspaces = async (user) => {
  return await prisma.workspace.findMany({
    where: { userId: user.id },
  });
};

exports.getWorkspaceById = async (user, workspaceId) => {
  const workspace = await prisma.workspace.findFirst({
    where: {
      id: workspaceId,
      userId: user.id,
    },
  });

  if (!workspace) {
    throw new Error("Workspace not found");
  }

  return workspace;
};

exports.updateWorkspace = async (user, workspaceId, data) => {
  const workspace = await prisma.workspace.findFirst({
    where: {
      id: workspaceId,
      userId: user.id,
    },
  });

  if (!workspace) {
    throw new Error("Workspace not found");
  }

  return await prisma.workspace.update({
    where: { id: workspaceId },
    data,
  });
};

exports.deleteWorkspace = async (user, workspaceId) => {
  const workspace = await prisma.workspace.findFirst({
    where: {
      id: workspaceId,
      userId: user.id,
    },
  });

  if (!workspace) {
    throw new Error("Workspace not found");
  }

  await prisma.workspace.delete({
    where: { id: workspaceId },
  });

  return { message: "Workspace deleted successfully" };
};

