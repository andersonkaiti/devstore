import { setTimeout } from 'node:timers/promises'
import type { NextRequest } from 'next/server'
import z from 'zod'
import data from '../data.json' with { type: 'json' }

const ONE_SECOND = 1000

export async function GET(request: NextRequest) {
  await setTimeout(ONE_SECOND)

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  if (products.length === 0) {
    return Response.json({ message: 'Products not found' }, { status: 400 })
  }

  return Response.json(products)
}
