import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPosts = async () => {
  return prisma.post.findMany({
    include: {
      author: true,
      comments: true,
    },
  });
};

export const createPost = async (title: string, content: string, authorId: number) => {
  return prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });
};