import Image from 'next/image'
import type { CoffeCart } from '@/types/types'
import { CoffeActions } from './coffe-actions'

interface CoffeProps {
  coffe: CoffeCart
}

export function Coffe({ coffe }: CoffeProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-100 rounded-lg p-5">
      <Image
        className="w-28 h-28 -mt-12"
        src={coffe.imageUrl}
        width={120}
        height={120}
        quality={100}
        alt=""
      />

      <div className="flex gap-2 justify-center items-center">
        {coffe.tag.map((coffeTag) => (
          <span
            key={coffeTag}
            className="flex items-center justify-center mt-3 uppercase p-1 bg-amber-300 text-amber-600 text-xs font-bold rounded-md"
          >
            {coffeTag}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-4 gap-1">
        <span className="text-xl font-bold font-baloo">{coffe.name}</span>
        <p className="text-sm text-zinc-500 text-center">{coffe.description}</p>
      </div>

      <div className="flex items-center justify-between mt-8 w-full">
        <span className="text-sm flex items-baseline justify-start">
          R${' '}
          <span className="font-bold font-baloo text-2xl">
            {coffe.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </span>
        <CoffeActions coffe={coffe} />
      </div>
    </div>
  )
}
