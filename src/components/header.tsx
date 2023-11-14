import { MapPin, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CartButton } from './cart-button'

export function Header() {
  return (
    <div className="flex items-center justify-between py-8 sticky bg-zinc-50 top-0 z-10">
      <Link href="/">
        <Image
          src="/logo.png"
          width={90}
          height={50}
          quality={100}
          alt=""
          className="w-[85px] h-[40px]"
        />
      </Link>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 bg-violet-300 text-violet-600 p-2 rounded-md">
          <MapPin className="w-5 h-5" />
          <span className="text-sm">Itapeva, SP</span>
        </button>
        <CartButton />
      </div>
    </div>
  )
}
