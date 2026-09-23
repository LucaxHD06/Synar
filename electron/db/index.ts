import { app } from 'electron'
import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from './schema'
import path from 'path'
import { sql } from 'drizzle-orm'

const dbPath = path.join(app.getPath('userData'), 'synar.db')
const sqlite =  new Database(dbPath)

export const db = drizzle(sqlite, { schema })