import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllComments = async () => {
  return prisma.comment.findMany({
    include: {
      post: true,
      user: true,
    },
  });
};

export const createComment = async (content: string, postId: number, userId: number) => {
  return prisma.comment.create({
    data: {
      content,
      postId,
      userId,
    },
  });
};