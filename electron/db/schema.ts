import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const products = sqliteTable('products', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    price: integer('price').notNull(),
    cost: integer('cost').notNull(),
    stock: integer('stock').notNull().default(0),
})

export type Product = typeof products.$inferSelect