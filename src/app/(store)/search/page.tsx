import Image from 'next/image'
import Link from 'next/link'

const MOCKED_PRICE = 129

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
          href={'/product/moletom-never-stop-learning.png'}
        >
          <Image
            alt={'moletom-never-stop-learning.png'}
            className="transition-transform duration-500 group-hover:scale-105"
            height={480}
            quality={100}
            src={'/moletom-never-stop-learning.png'}
            width={480}
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">
              Moletom Never Stop Learning
            </span>

            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {MOCKED_PRICE.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
          href={'/product/moletom-never-stop-learning.png'}
        >
          <Image
            alt={'moletom-never-stop-learning.png'}
            className="transition-transform duration-500 group-hover:scale-105"
            height={480}
            quality={100}
            src={'/moletom-never-stop-learning.png'}
            width={480}
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">
              Moletom Never Stop Learning
            </span>

            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {MOCKED_PRICE.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
          href={'/product/moletom-never-stop-learning.png'}
        >
          <Image
            alt={'moletom-never-stop-learning.png'}
            className="transition-transform duration-500 group-hover:scale-105"
            height={480}
            quality={100}
            src={'/moletom-never-stop-learning.png'}
            width={480}
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">
              Moletom Never Stop Learning
            </span>

            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {MOCKED_PRICE.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
