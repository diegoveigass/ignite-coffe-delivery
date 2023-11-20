'use client'

import { useCart } from '@/contexts/cart-context'

export function FooterTotal() {
  const { items } = useCart()

  const totalProducts = items.reduce((acc, item) => {
    acc += item.price * item.quantity

    return acc
  }, 0)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-base">Total de Items</span>
        <span className="text-lg">
          {totalProducts.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base">Entrega</span>
        <span className="text-lg">R$ 3,50</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">Total de Items</span>
        <span className="text-3xl font-bold">R$ 33,20</span>
      </div>
    </div>
  )
}
