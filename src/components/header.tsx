import Link from 'next/link'
import { Suspense } from 'react'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="font-extrabold text-2xl text-white" href="/">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

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
