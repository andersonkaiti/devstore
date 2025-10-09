import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <div className="relative grid h-[860px] grid-cols-3">
      <Skeleton className="col-span-2" />

      <div className="flex flex-col justify-center px-12">
        <Skeleton className="mb-4 h-10 w-2/3" />

        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-5/6" />
        <Skeleton className="mb-8 h-4 w-4/6" />

        <div className="mt-8 flex items-center gap-3">
          <Skeleton className="h-10 w-32 rounded-full" />
          <Skeleton className="h-6 w-32" />
        </div>

        <div className="mt-8 space-y-4">
          <Skeleton className="mb-2 h-6 w-24" />

          <div className="flex gap-2">
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
          </div>
        </div>

        <Skeleton className="mt-8 h-12 w-full rounded-full" />
      </div>
    </div>
  )
}
