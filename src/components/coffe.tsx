import Image from 'next/image'
import { CoffeActions } from './coffe-actions'

export function Coffe() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-100 rounded-lg p-5">
      <Image
        className="w-28 h-28 -mt-12"
        src="/coffee.png"
        width={120}
        height={120}
        quality={100}
        alt=""
      />

      <span className="flex items-center justify-center mt-3 uppercase p-1 bg-amber-300 text-amber-600 text-xs font-bold rounded-md">
        tradicional
      </span>

      <div className="flex flex-col items-center justify-center mt-4 gap-1">
        <span className="text-xl font-bold font-baloo">
          Expresso tradicional
        </span>
        <p className="text-sm text-zinc-500 text-center">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>

      <div className="flex items-center justify-between mt-8 w-full">
        <span className="text-sm flex items-baseline justify-start">
          R$ <span className="font-bold font-baloo text-2xl">9,90</span>
        </span>
        <CoffeActions />
      </div>
    </div>
  )
}
