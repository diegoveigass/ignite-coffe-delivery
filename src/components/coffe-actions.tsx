'use client'

import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export function CoffeActions() {
  const [count, setCount] = useState(0)

  function handleAddToCart() {
    // to do
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center relative">
        <button
          className="relative text-2xl text-violet-600 left-6"
          onClick={() => setCount((state) => state - 1)}
        >
          <Minus className="h-3 w-3" />
        </button>
        <input
          type="text"
          value={count}
          disabled
          className="appearance-none w-28 bg-zinc-200 p-2 rounded-md text-center"
        />
        <button
          className="relative text-2xl text-violet-600 right-6"
          onClick={() => setCount((state) => state + 1)}
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
      <button
        className="bg-violet-700 flex items-center justify-center h-10 p-2 rounded-md text-zinc-50"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  )
}
