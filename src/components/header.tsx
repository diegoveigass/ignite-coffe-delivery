import { MapPin, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const items = 0
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
        <button className="bg-amber-300 text-amber-600 p-2 rounded-md relative">
          {items !== 0 && (
            <span className="flex items-center justify-center absolute w-5 h-5 rounded-full text-xs font-bold bg-amber-600 text-white -top-3 -right-3">
              1
            </span>
          )}

          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
