'use client'

import { useCart } from '@/contexts/cart-context'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'

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
                <div className="flex items-start">
                  <div className="flex items-center justify-center relative">
                    <button className="relative text-2xl text-violet-600 left-6">
                      <Minus className="h-3 w-3" />
                    </button>
                    <input
                      type="text"
                      disabled
                      value={item.quantity}
                      className="appearance-none w-28 bg-zinc-200 p-2 rounded-md text-center"
                    />
                    <button className="relative text-2xl text-violet-600 right-6">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <button className="flex items-center justify-center gap-2 bg-zinc-200 p-2 rounded-md">
                    <Trash className="h-4 w-4 text-violet-600" />
                    <span className="uppercase text-zinc-700">Remover</span>
                  </button>
                </div>
              </div>
            </div>
            <span className="font-bold text-base text-zinc-700">
              {item.price}
            </span>
          </div>
        )
      })}
    </div>
  )
}
