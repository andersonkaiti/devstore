import { api } from './api'
import type { IProduct } from './types/product'

/**
 * Cache & Memoization
 * 
 * `useMemo` / `memo` / `useCallback`
 * 
 * React: a memoization é feita por ele a partir do momento em que Server Components são utilizados.
 * Isso impede que a mesma requisição seja realizada durante a mesma renderização.
 * Vale lembrar que a mesma requisição feita em outra página não conta.
 * 
 * Cache: caso a requisição e os dados já estejam em mãos e, ao navegar para outra página, a mesma requisição
 * seja realizada, mas seja preferível reutilizar as informações carregadas previamente.
 */

const SIXTY_SECONDS = 60
const SIXTY_MINUTES = 60
const ONE_HOUR = SIXTY_SECONDS * SIXTY_MINUTES

export async function getFeaturedProducts(): Promise<IProduct[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: ONE_HOUR
    }
  })

  const products = await response.json()

  return products
}
