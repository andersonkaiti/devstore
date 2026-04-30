import { Skeleton } from '@components/ui/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid md:max-h-[860px] grid-cols-1 md:grid-cols-9 md:grid-rows-6 gap-6">
      <Skeleton className="md:col-span-6 md:row-span-6 h-[400px] md:h-[860px]" />

      <Skeleton className="md:col-span-3 md:row-span-3 h-[400px] md:h-full" />
      <Skeleton className="md:col-span-3 md:row-span-3 h-[400px] md:h-full" />
    </div>
  )
}
