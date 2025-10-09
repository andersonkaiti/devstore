import { api } from './api'
import type { IProduct } from './types/product'

export async function searchProducts(query: string): Promise<IProduct[]> {
  const response = await api(`/products/search?q=${query}`)

  const products = await response.json()

  return products
}
