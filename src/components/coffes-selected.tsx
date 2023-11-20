'use client'

import { useCart } from '@/contexts/cart-context'
import Image from 'next/image'
import { CoffeActions } from './coffe-actions'

export function CoffesSelected() {
  const { items } = useCart()

  return (
    <div className="flex flex-col gap-12">
      {items.map((item) => {
        return (
          <div key={item.id} className="flex justify-between">
            <div className="flex gap-5">
              <Image
                className="w-16 h-16"
                src={item.imageUrl}
                width={64}
                height={64}
                quality={100}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <span className="ml-3">{item.name}</span>
                <CoffeActions coffe={item} isCheckout />
              </div>
            </div>
            <span className="font-bold text-base text-zinc-700">
              {(item.quantity * item.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        )
      })}
    </div>
  )
}
