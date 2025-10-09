import { api } from './api'
import type { IProduct } from './types/product'

export async function getProduct(slug: string): Promise<IProduct> {
  const response = await api(`/products/${slug}`)

  const products = await response.json()

  return products
}
