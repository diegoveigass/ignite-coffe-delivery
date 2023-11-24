'use client'

import { useCart } from '@/contexts/cart-context'

export function FooterTotal() {
  const { items } = useCart()

  const shippingPrice = 3.5

  const totalProducts = items.reduce((acc, item) => {
    acc += item.price * item.quantity

    return acc
  }, 0)

  const total = shippingPrice + totalProducts

  return (
    items.length > 0 && (
      <>
        <div className="h-px w-full bg-zinc-400" />
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
            <span className="text-lg">
              {shippingPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">Total</span>
            <span className="text-3xl font-bold">
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
        <button
          className="px-3 py-2 bg-amber-400 rounded-md text-white uppercase text-sm font-bold"
          type="submit"
          form="address-payment-form"
        >
          Confirmar pedido
        </button>
      </>
    )
  )
}
