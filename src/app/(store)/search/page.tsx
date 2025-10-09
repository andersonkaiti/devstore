import { searchProducts } from '@http/search-products'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface ISearchPageProps {
  searchParams: Promise<{
    q: string
  }>
}

export default async function SearchPage({ searchParams }: ISearchPageProps) {
  const { q: query } = await searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products?.map((product) => (
          <Link
            className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
            href={`/product/${product.slug}`}
            key={product.id}
          >
            <Image
              alt={product.title}
              className="transition-transform duration-500 group-hover:scale-105"
              height={480}
              quality={100}
              src={product.image}
              width={480}
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
    </div>
  )
}
