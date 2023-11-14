'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingCart } from 'lucide-react'

export function CartButton() {
  const { items } = useCart()

  return (
    <button className="bg-amber-300 text-amber-600 p-2 rounded-md relative">
      {items.length !== 0 && (
        <span className="flex items-center justify-center absolute w-5 h-5 rounded-full text-xs font-bold bg-amber-600 text-white -top-3 -right-3">
          {items.length}
        </span>
      )}

      <ShoppingCart className="w-5 h-5" />
    </button>
  )
}
