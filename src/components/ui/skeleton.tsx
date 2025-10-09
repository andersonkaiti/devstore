import { cn } from '@lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-zinc-50/10', className)}
      data-slot="skeleton"
      {...props}
    />
  )
}

export { Skeleton }
