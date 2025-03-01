// src/utils/db.js
import Database from 'better-sqlite3';

const db = new Database('usuarios.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT UNIQUE,
    contrasena TEXT,
    rol TEXT DEFAULT 'usuario'
  )
`);

export default db;