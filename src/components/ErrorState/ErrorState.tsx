//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { CircleAlert } from 'lucide-react'
import { type HTMLProps, type ReactNode } from 'react'
import { cn } from '../../utils/className'

export interface ErrorStateProps extends HTMLProps<HTMLDivElement> {
  /**
   * Name of the presented missing data entity
   * Provide pluralized and lowercased
   * @example "users"
   * */
  entityName?: ReactNode
}

/**
 * Component for surfacing inline query errors
 * */
export const ErrorState = ({
  className,
  children,
  entityName,
  ...props
}: ErrorStateProps) => (
  <div
    className={cn(
      'inline-flex-center gap-3 rounded-2xl bg-destructive/10 px-3 py-2 text-sm text-destructive',
      className,
    )}
    role="alert"
    {...props}
  >
    <CircleAlert />
    <span>
      {children ?? <>Fetching {entityName} failed. Please try again later.</>}
    </span>
  </div>
)
