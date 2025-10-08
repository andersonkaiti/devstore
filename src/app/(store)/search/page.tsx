import { setTimeout } from 'node:timers/promises'

const TWO_SECONDS = 2000

export default async function SearchPage() {
  await setTimeout(TWO_SECONDS)

  return <h1>Search</h1>
}
