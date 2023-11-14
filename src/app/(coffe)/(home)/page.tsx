import { Coffe } from '@/components/coffe'
import type { Coffe as CoffeType } from '@/types/types'
import { Coffee, Container, ShoppingCart, Timer } from 'lucide-react'
import Image from 'next/image'

const coffes: CoffeType[] = [
  {
    id: '1',
    imageUrl: '/coffee.png',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tag: ['tradicional'],
  },
  {
    id: '2',
    imageUrl: '/coffee2.png',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 13.9,
    tag: ['tradicional'],
  },
  {
    id: '3',
    imageUrl: '/coffee3.png',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5.9,
    tag: ['tradicional', 'gelado'],
  },
  {
    id: '4',
    imageUrl: '/coffee4.png',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 7.9,
    tag: ['tradicional', 'com leite'],
  },
]

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
          {coffes.map((coffe) => (
            <Coffe key={coffe.id} coffe={coffe} />
          ))}
        </div>
      </div>
    </div>
  )
}
