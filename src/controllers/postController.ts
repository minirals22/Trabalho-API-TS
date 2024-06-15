import { Request, Response } from 'express';
import * as postService from '../services/postService';

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, authorId } = req.body;
    const post = await postService.createPost(title, content, authorId);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};
