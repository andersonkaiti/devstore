import { getFeaturedProducts } from '@http/get-featured-products'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        className="group relative col-span-6 row-span-6 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
        href={`/product/${highlightedProduct.slug}`}
      >
        <Image
          alt={highlightedProduct.title}
          className="transition-transform duration-500 group-hover:scale-105"
          height={920}
          quality={100}
          src={highlightedProduct.image}
          width={920}
        />

        <div className="absolute right-28 bottom-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>

          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts?.map((product) => (
        <Link
          className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
          href={`/product/${product.slug}`}
          key={product.id}
        >
          <Image
            alt={product.title}
            className="transition-transform duration-500 group-hover:scale-105"
            height={920}
            quality={100}
            src={product.image}
            width={920}
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">{product.title}</span>

            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
