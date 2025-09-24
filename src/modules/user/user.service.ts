import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../config/db.js";

// Correct type for creating a User
const createUser = async (payload:Prisma.UserCreateInput) => {
  console.log("payload", payload);
  const createdUser = await prisma.user.create({
    data: payload,
  });

  return createdUser;
};

const getAllFromDB = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      picture: true,
      createdAt: true,
      updatedAt: true,
      status: true,
    },
    orderBy: {
        createdAt: "desc"
    }
  });
  return result;
};

export const UserService = {
  createUser,
  getAllFromDB,
};
