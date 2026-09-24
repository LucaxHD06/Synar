import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { products } from '../schema'

const sqlite = new Database('./dev.db')
const db = drizzle(sqlite, { schema: { products } })

async function main() {
    await db.insert(products).values({
        name: 'Remera Oversize Negra',
        price: 24100,
        cost: 12000,
        stock: 9,
    })

    await db.insert(products).values({
        name: 'Pantalon Baggy Gris',
        price: 34999,
        cost: 21999,
        stock: 2
    })

    const allProducts = await db.select().from(products)
    console.log(allProducts)
}

main()