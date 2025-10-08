import { Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="font-extrabold text-2xl text-white" href="/">
          devstore
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="size-5 text-zinc-500" />

          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            placeholder="Buscar produtos"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="size-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <Separator className="!h-5 bg-zinc-700" orientation="vertical" />

        <Link className="flex items-center gap-2 hover:underline" href="/">
          <span className="text-sm">Account</span>

          <Avatar className="size-6">
            <AvatarImage
              alt=""
              className="rounded-full"
              height={24}
              src="https://github.com/andersonkaiti.png"
              width={24}
            />
            <AvatarFallback />
          </Avatar>
        </Link>
      </div>
    </header>
  )
}
