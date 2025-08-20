import { UserRepository, User } from '../repositories/UserRepository';

export class UserService {
  static getWelcomeMessage(): { mensagem: string } {
    return { mensagem: 'API funcionando pelo UserService!' };
  }

  static createUser(nome: string, email: string): User {
    return UserRepository.createUser(nome, email);
  }

  static listUsers(): User[] {
    return UserRepository.getAllUsers();
  }
}
