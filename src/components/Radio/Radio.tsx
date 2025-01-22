//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import * as RadioPrimitive from '@radix-ui/react-radio-group'
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react'
import { cn } from '../../utils/className'
import { SideLabel } from '../SideLabel'

// entire list of choices
export const RadioGroup = RadioPrimitive.Root

// wrapper for one of the list items - includes selection circle and text
export const Radio = forwardRef<
  ElementRef<typeof RadioPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioPrimitive.Item> & { label?: string }
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center gap-4">
    <RadioPrimitive.Item
      ref={ref}
      className={cn(
        'flex-center focus-ring relative size-6 rounded-full border-2 border-secondary',
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        ref={ref}
        className={cn('flex-center size-full', className)}
        {...props}
      >
        <span className="block size-2.5 rounded-full bg-primary"></span>
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Item>
    {label && <SideLabel className="text-sm leading-none">{label}</SideLabel>}
  </div>
))
Radio.displayName = RadioPrimitive.Item.displayName

export const RadioIndicator = forwardRef<
  ElementRef<typeof RadioPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof RadioPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <RadioPrimitive.Indicator
    ref={ref}
    className={cn('flex-center relative size-full', className)}
    {...props}
  >
    <span className="relative block size-2.5 rounded-full bg-primary"></span>
  </RadioPrimitive.Indicator>
))

RadioIndicator.displayName = 'RadioInput'
