import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'

export default function CoffeLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto flex flex-col min-h-screen w-full max-w-[1600px] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
