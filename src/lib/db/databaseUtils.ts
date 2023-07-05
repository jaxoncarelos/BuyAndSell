import type { Database, RunResult } from 'better-sqlite3'
import DatabaseConstructor from 'better-sqlite3'
import path from 'path'
const db = new DatabaseConstructor(path.resolve('./database.db'), {fileMustExist: true, verbose: console.log })
db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL, firstName TEXT NOT NULL, lastName TEXT NOT NULL)")
let __dirname = path.resolve(path.dirname(''))


export async function createUser(user: User): Promise<User> {
  const sql = 'INSERT INTO users (username, password, email, firstName, lastName) VALUES (?, ?, ?, ?, ?)'
  const stmt1 = db.prepare('select name from sqlite_master where type = \'table\'')
  try {
    const stmt = db.prepare(sql)
    const result = stmt.run(user.username, user.password, user.email, user.firstName, user.lastName)
    return {...user, id: result.lastInsertRowid.toString()}
  
  } catch(error: any) {
    throw new Error(`Error creating user: ${error.message}`)
  }
}

export function findUser(id: string): User {
  const sql = 'SELECT * FROM users WHERE id = ? LIMIT 1'
  const stmt = db.prepare(sql)
  const user = stmt.get(id)
  
  if (!user) {
    throw new Error(`User with id ${id} not found`)
  }
  return user as User
}
export function checkUserExists(username: string): boolean | string {
  const sql = 'SELECT * FROM users WHERE username = ? LIMIT 1'
  const stmt = db.prepare(sql)
  const user = stmt.get(username) as User
  if (!user) {
    return false
  }
  return user.id!
}