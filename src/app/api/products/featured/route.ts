import { setTimeout } from 'node:timers/promises'
import data from '../data.json' with { type: 'json' }

const ONE_SECOND = 1000

export async function GET() {
  await setTimeout(ONE_SECOND)

  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}
