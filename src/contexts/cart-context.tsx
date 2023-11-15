'use client'

import { Coffe } from '@/types/types'
import { ReactNode, createContext, useContext, useState } from 'react'

interface CoffeCart extends Coffe {
  quantity: number
}

interface CartContextProps {
  items: CoffeCart[]
  addToCart: (coffe: Coffe, quantity: number) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CoffeCart[]>([])

  function addToCart(coffe: Coffe, quantity: number) {
    setCartItems((state) => {
      const productInCart = cartItems.some((item) => item.id === coffe.id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === coffe.id) {
            return { ...item, quantity: item.quantity + quantity }
          } else {
            return item
          }
        })
      } else {
        return [...state, { ...coffe, quantity }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
