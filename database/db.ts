import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbDir = path.resolve(__dirname, '..');
const dbPath = path.resolve(dbDir, 'database.sqlite');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir);
}

const bancoExiste = fs.existsSync(dbPath);

const db = new Database(dbPath);

if (!bancoExiste) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);
  console.log('📦 Novo banco SQLite criado com tabela `users`.');
} else {
  console.log('✅ Banco SQLite já existente carregado.');
}

export default db;
