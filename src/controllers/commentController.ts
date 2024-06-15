import { Request, Response } from 'express';
import * as commentService from '../services/commentService';

export const getAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await commentService.getAllComments();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments', error });
  }
};

export const createComment = async (req: Request, res: Response) => {
  try {
    const { content, postId, userId } = req.body;
    const comment = await commentService.createComment(content, postId, userId);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment', error });
  }
};
