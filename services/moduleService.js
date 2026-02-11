const prisma = require("../prisma/client");

exports.createModule = async (user, data) => {
  const { name, description, workspaceId } = data;

  const module = await prisma.module.create({
    data: {
      name,
      description,
      workspaceId,
      userId: user.id,
    },
  });

  return module;
};

exports.getAllModules = async (user) => {
  return await prisma.module.findMany({
    where: { userId: user.id },
  });
};

exports.getModuleById = async (user, moduleId) => {
  const module = await prisma.module.findFirst({
    where: {
      id: moduleId,
      userId: user.id,
    },
  });

  if (!module) {
    throw new Error("Module not found");
  }

  return module;
};

exports.updateModule = async (user, moduleId, data) => {
  const module = await prisma.module.findFirst({
    where: {
      id: moduleId,
      userId: user.id,
    },
  });

  if (!module) {
    throw new Error("Module not found");
  }

  return await prisma.module.update({
    where: { id: moduleId },
    data,
  });
};

exports.deleteModule = async (user, moduleId) => {
  const module = await prisma.module.findFirst({
    where: {
      id: moduleId,
      userId: user.id,
    },
  });

  if (!module) {
    throw new Error("Module not found");
  }

  await prisma.module.delete({
    where: { id: moduleId },
  });

  return { message: "Module deleted successfully" };
};

