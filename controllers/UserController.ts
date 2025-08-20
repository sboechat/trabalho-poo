import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  static getRoot(req: Request, res: Response): void {
    const resposta = UserService.getWelcomeMessage();
    res.json(resposta);
  }

  static createUser(req: Request, res: Response): void {
    const { nome, email } = req.body;

    if (!nome || !email) {
      res.status(400).json({ erro: 'Nome e email são obrigatórios.' });
    }else{ 
      const user = UserService.createUser(nome, email);
      res.status(201).json(user);
    }
  }

  static listUsers(req: Request, res: Response): void {
    const users = UserService.listUsers();
    res.json(users);
  }
}
