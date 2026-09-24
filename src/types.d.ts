import type { Product } from '../electron/db/schema'

export {}

declare global {

    interface Window {
        api: {
        getProducts: () => Promise<Product[]>
        }
    }
    }