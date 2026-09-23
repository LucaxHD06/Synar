import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function App() {

    return (
    <div className="flex">
      <aside className="w-56 h-screen bg-black text-white p-4">Synar</aside>
      <main className="flex-1 p-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">Synar</h1>
          <p>Bienvenido, Luca</p>
          <Button>Nueva venta</Button>

          <div className="flex gap-4 ">
          <Card className='flex-1 min-w-[160px]'>
            <CardHeader>
              <CardTitle>Ventas</CardTitle>
            </CardHeader>
            <CardContent>
              $0
            </CardContent>
          </Card>
          <Card className='flex-1 min-w-[160px]'>
            <CardHeader>
              <CardTitle>Productos</CardTitle>
            </CardHeader>
            <CardContent>
              0
            </CardContent>
          </Card>
          <Card className='flex-1 min-w-[160px]'>
            <CardHeader>
              <CardTitle>Stock</CardTitle>
            </CardHeader>
            <CardContent>
              0
            </CardContent>
          </Card>
          </div>
        </div>
      </main>
    </div>
    )
}

export default App
