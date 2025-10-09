'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'

interface ICartItem {
  productId: number
  quantity: number
}

interface ICartContext {
  items: ICartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as ICartContext)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const isProductInCart = state.some((item) => item.productId === productId)

      if (isProductInCart) {
        return state.map((item) => ({
          ...item,
          ...(item.productId === productId && {
            quantity: item.quantity + 1,
          }),
        }))
      }

      return [
        ...state,
        {
          productId,
          quantity: 1,
        },
      ]
    })
  }

  return (
    <CartContext
      value={{
        items: cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext>
  )
}

export const useCart = () => useContext(CartContext)
