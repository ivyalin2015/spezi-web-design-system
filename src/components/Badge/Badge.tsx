import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { type ComponentProps } from 'react'
import { cn } from '@/utils/className'

const badgeVariants = cva(
  'inline-flex-center border transition-colors focus-ring',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        destructiveLight:
          'border-transparent bg-destructive/10 text-destructive',
        outline: 'text-foreground',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-xs rounded-md gap-1 font-semibold',
        lg: 'text-sm px-3 py-2 rounded-2xl gap-3 font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
)

export interface BadgeProps
  extends ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, size, ...props }: BadgeProps) => (
  <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
)
