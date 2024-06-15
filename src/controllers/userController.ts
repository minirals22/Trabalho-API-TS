import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await userService.createUser(email, name);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};
