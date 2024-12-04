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
import { cn } from '../utils/className'

export const RadioInput = RadioPrimitive.Root

export const RadioItem = RadioPrimitive.Item

export const RadioIndicator = RadioPrimitive.Indicator

export const RadioLabel = forwardRef<
  ElementRef<typeof RadioPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadioPrimitive.Item
    ref={ref}
    className={cn('flex items-center gap-2 p-2', className)}
    {...props}
  >
    <RadioPrimitive.Indicator className="h-4 w-4 rounded-full bg-blue-500" />
    <span className="ml-2">{children}</span>
  </RadioPrimitive.Item>
))

RadioLabel.displayName = 'RadioLabel'
