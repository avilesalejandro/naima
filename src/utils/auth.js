// src/utils/auth.js
import bcrypt from 'bcryptjs';
import cookie from 'cookie';
import db from './db.js';

const saltRounds = 10;
const adminUsername = 'andrea'; // Nombre de usuario del administrador
const adminPassword = 'ejemplo'; // Contraseña del administrador

export async function hashPassword(password) {
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}


export async function createUser(nombre, contrasena, rol = 'usuario') {
  try {
    const hashedPassword = await hashPassword(contrasena);
    db.prepare('INSERT INTO usuarios (nombre, contrasena, rol) VALUES (?, ?, ?)').run(
      nombre,
      hashedPassword,
      rol
    );
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error; // Lanza el error para que lo maneje el componente
  }
}

export async function verifyUser(nombre, contrasena) {
  try {
    const user = db.prepare('SELECT * FROM usuarios WHERE nombre = ?').get(nombre);
    if (!user) return false;
    return await comparePasswords(contrasena, user.contrasena);
  } catch (error) {
    console.error('Error al verificar el usuario:', error);
    throw error; // Lanza el error para que lo maneje el componente
  }
}

export function setAuthCookie(response, nombre, rol) {
  response.headers.append(
    'Set-Cookie',
    cookie.serialize('authenticated', JSON.stringify({ nombre, rol }), {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'strict',
      path: '/',
      maxAge: 3600, // 1 hora
    })
  );
}

export function clearAuthCookie(response) {
  response.headers.append(
    'Set-Cookie',
    cookie.serialize('authenticated', '', {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'strict',
      path: '/',
      maxAge: 0,
    })
  );
}
export function getAuthenticatedUser(request) {
  const cookies = cookie.parse(request.headers.get('cookie') || '');
  if (!cookies.authenticated) return null;
  try {
    return JSON.parse(cookies.authenticated);
  } catch (error) {
    return null;
  }
}

export async function createAdminUser() {
  try {
    const user = db.prepare('SELECT * FROM usuarios WHERE nombre = ?').get(adminUsername);
    if (!user) {
      const hashedPassword = await hashPassword(adminPassword);
      db.prepare('INSERT INTO usuarios (nombre, contrasena, rol) VALUES (?, ?, ?)').run(
        adminUsername,
        hashedPassword,
        'admin'
      );
      console.log(`Usuario administrador '${adminUsername}' creado.`);
    }
  } catch (error) {
    console.error('Error al crear el usuario administrador:', error);
    throw error; // Lanza el error para que lo maneje el componente
  }
}