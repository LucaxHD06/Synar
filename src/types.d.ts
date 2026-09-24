export {}

declare global {
  interface Window {
    api: {
      getProducts: () => Promise<any[]>
    }
  }
}