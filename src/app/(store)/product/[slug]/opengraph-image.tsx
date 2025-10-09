/** biome-ignore-all lint/nursery/useImageSize: needed */
/** biome-ignore-all lint/performance/noImgElement: needed */

import { env } from '@config/env'
import { getProduct } from '@http/get-product'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

export const alt = 'About Acme'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

interface IImageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function OgImage({ params }: IImageProps) {
  const { slug } = await params

  const { image, title } = await getProduct(slug)

  const productImageURL = new URL(image, env.APP_URL).toString()

  return new ImageResponse(
    <div
      style={{
        backgroundColor: colors.zinc[950],
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        alt={title}
        src={productImageURL}
        style={{
          width: '100%',
        }}
      />
    </div>,
    {
      ...size,
    }
  )
}
