import { app, BrowserWindow, ipcMain } from 'electron'
import { getDb } from './db/index'
import { products } from './db/schema'
import path from 'path'

app.setName('Synar')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        },
    })

    win.loadURL('http://localhost:5173')
}

ipcMain.handle('get-products', async () => {
    try {
        const db = getDb()
        return await db.select().from(products)
    } catch (error) {
        console.error('Error al obtener productos:', error)
        return []
    }
})

app.whenReady().then(() => {
    createWindow()
})