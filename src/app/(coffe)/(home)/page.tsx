import { Coffe } from '@/components/coffe'
import { Coffee, Container, ShoppingCart, Timer } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-app py-24 bg-app rounded-md">
        <div>
          <p className="font-bold font-baloo text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <span className="text-xl mt-4 inline-block">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <div className="grid grid-cols-2 mt-16 gap-x-5 gap-y-10 ">
            <div className="flex items-center gap-3">
              <div className="bg-amber-700 p-2 rounded-full text-zinc-100">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <span className="text-zinc-600">Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-stone-700 p-2 rounded-full text-zinc-100">
                <Container className="h-5 w-5" />
              </div>
              <span className="text-zinc-600">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-full text-zinc-100">
                <Timer className="h-5 w-5" />
              </div>
              <span className="text-zinc-600">Entrega rápida e rastreada</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-violet-600 p-2 rounded-full text-zinc-100">
                <Coffee className="h-5 w-5" />
              </div>
              <span className="text-zinc-600">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
        <Image src="/coffe.png" width={480} height={360} quality={100} alt="" />
      </div>
      <div className="flex flex-col gap-14">
        <h1 className="text-4xl font-baloo font-bold">Nossos cafés</h1>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          <Coffe />
        </div>
      </div>
    </div>
  )
}
