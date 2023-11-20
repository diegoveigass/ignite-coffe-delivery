'use client'

import { useCart } from '@/contexts/cart-context'
import { CoffeCart } from '@/types/types'
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react'
import { useState } from 'react'

export function CoffeActions({
  coffe,
  isCheckout = false,
}: {
  coffe: CoffeCart
  isCheckout?: boolean
}) {
  const [count, setCount] = useState(coffe.quantity ?? 0)
  const {
    addToCart,
    incrementCoffeQuantity,
    decrementCoffeQuantity,
    removeFromCart,
  } = useCart()

  function handleAddToCart() {
    if (count === 0) return

    addToCart(coffe, count)
    setCount(0)
  }

  function handleIncrement(coffeId: string) {
    if (isCheckout) {
      incrementCoffeQuantity(coffeId)
    } else {
      setCount((state) => {
        return state + 1
      })
    }
  }

  function handleDecrement(coffeId: string) {
    if (isCheckout) {
      decrementCoffeQuantity(coffeId)
    } else {
      setCount((state) => {
        if (state <= 1 && isCheckout) return 1
        if (state <= 0) return 0
        return state - 1
      })
    }
  }

  function handleRemoveFromCart(coffeId: string) {
    removeFromCart(coffeId)
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center relative">
        <button
          className="relative text-2xl text-violet-600 left-6"
          onClick={() => handleDecrement(coffe.id)}
        >
          <Minus className="h-3 w-3" />
        </button>
        <input
          type="text"
          value={!isCheckout ? count : coffe.quantity}
          disabled
          className="appearance-none w-28 bg-zinc-200 p-2 rounded-md text-center"
        />
        <button
          className="relative text-2xl text-violet-600 right-6"
          onClick={() => handleIncrement(coffe.id)}
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
      {!isCheckout ? (
        <button
          className="bg-violet-700 flex items-center justify-center h-10 p-2 rounded-md text-zinc-50"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      ) : (
        <button
          className="flex items-center justify-center gap-2 bg-zinc-200 p-2 rounded-md"
          onClick={() => handleRemoveFromCart(coffe.id)}
        >
          <Trash className="h-4 w-4 text-violet-600" />
          <span className="uppercase text-zinc-700">Remover</span>
        </button>
      )}
    </div>
  )
}
