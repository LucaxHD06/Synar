import { app } from 'electron'
import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import * as schema from './schema'
import path from 'path'

let dbInstance: ReturnType<typeof drizzle> | null = null

export function getDb() {
    if (!dbInstance) {
        const dbPath = path.join(app.getPath('userData'), 'synar.db')
        const sqlite = new Database(dbPath)
        dbInstance = drizzle(sqlite, { schema })
        migrate(dbInstance, { migrationsFolder: path.join(__dirname, 'migrations') })
    }
    return dbInstance
}