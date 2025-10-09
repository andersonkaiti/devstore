'use client'

import { useCart } from '@contexts/cart-context'

interface IAddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: IAddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProductToCart}
      type="button"
    >
      Adicionar ao carrinho
    </button>
  )
}
