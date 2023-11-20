'use client'

import { Coffe, CoffeCart } from '@/types/types'
import { ReactNode, createContext, useContext, useState } from 'react'

interface CartContextProps {
  items: CoffeCart[]
  addToCart: (coffe: Coffe, quantity: number) => void
  incrementCoffeQuantity: (coffeId: string) => void
  decrementCoffeQuantity: (coffeId: string) => void
  removeFromCart: (coffeId: string) => void
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

  function incrementCoffeQuantity(coffeId: string) {
    const updatedProductQuantityCart = [...cartItems]

    const productInCart = cartItems.find((item) => item.id === coffeId)

    if (productInCart) {
      productInCart.quantity = productInCart.quantity + 1
      setCartItems(updatedProductQuantityCart)
    }
  }

  function decrementCoffeQuantity(coffeId: string) {
    const updatedProductQuantityCart = [...cartItems]

    const productInCart = cartItems.find((item) => item.id === coffeId)

    if (productInCart) {
      let quantityToDecrement = productInCart.quantity

      if (quantityToDecrement <= 1) {
        quantityToDecrement = 1
      } else {
        quantityToDecrement = quantityToDecrement - 1
      }
      productInCart.quantity = quantityToDecrement
      setCartItems(updatedProductQuantityCart)
    }
  }

  function removeFromCart(coffeId: string) {
    setCartItems((state) => state.filter((item) => item.id !== coffeId))
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        incrementCoffeQuantity,
        decrementCoffeQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
