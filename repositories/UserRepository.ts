import db from '../database/db';

export interface User {
  id: number;
  nome: string;
  email: string;
}

export class UserRepository {
  static createUser(nome: string, email: string): User {
    const stmt = db.prepare('INSERT INTO users (nome, email) VALUES (?, ?)');
    const info = stmt.run(nome, email);

    return {
      id: Number(info.lastInsertRowid),
      nome,
      email
    };
  }

  static getAllUsers(): User[] {
    const stmt = db.prepare('SELECT * FROM users');
    return stmt.all() as User[];
  }
}
