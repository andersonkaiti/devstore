import { setTimeout } from 'node:timers/promises'

const TWO_SECONDS = 2000

export default async function Home() {
  await setTimeout(TWO_SECONDS)

  return <h1>Hello, World!</h1>
}
