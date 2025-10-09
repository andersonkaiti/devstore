import { setTimeout } from 'node:timers/promises'
import z from 'zod'
import data from '../data.json' with { type: 'json' }

const ONE_SECOND = 1000

export async function GET(
  _: Request,
  { params }: RouteContext<'/api/products/[slug]'>
) {
  await setTimeout(ONE_SECOND)

  const slug = z.string().parse((await params).slug)

  const product = data.products.find((prod) => prod.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  return Response.json(product)
}
