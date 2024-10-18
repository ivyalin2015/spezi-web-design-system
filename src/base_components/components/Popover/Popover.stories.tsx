//
// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { type Meta } from '@storybook/react'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
}

export default meta

export const Default = () => (
  <Popover>
    <PopoverTrigger>Trigger</PopoverTrigger>
    <PopoverContent>Content</PopoverContent>
  </Popover>
)
