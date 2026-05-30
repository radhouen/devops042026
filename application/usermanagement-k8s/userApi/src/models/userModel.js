import prisma from "../../prismaClient.js"; // 👈 Corrigé ici avec ../../

// CREATE
const createUser = async (username, email, password) => {
  const user = await prisma.user.create({
    data: { username, email, password },
  });
  return { rows: [user] };
};

// FIND BY EMAIL
const findByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  return user ? { rows: [user] } : { rows: [] };
};

// GET ALL
const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
    },
  });
  return { rows: users };
};

// UPDATE
const updateUser = async (id, username, email, password) => {
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { username, email, password },
  });
  return { rows: [user] };
};

// DELETE
const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id: parseInt(id) },
  });
};

export default {
  createUser,
  findByEmail,
  getAllUsers,
  updateUser,
  deleteUser,
};
