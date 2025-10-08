import { api } from './api'
import type { IProduct } from './types/product'

export async function getFeaturedProducts(): Promise<IProduct[]> {
  const response = await api('/products/featured')

  const products = await response.json()

  return products
}
