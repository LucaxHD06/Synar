import { contextBridge, ipcRenderer } from "electron"
import type { Product } from './db/schema'

contextBridge.exposeInMainWorld('api', {
    getProducts: () => ipcRenderer.invoke('get-products'),
    createProduct: (product: Omit<Product, 'id'>) => ipcRenderer.invoke('create-product', product)
})