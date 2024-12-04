//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Meta } from '@storybook/react'
import { RadioInput } from './RadioInput' // Adjust the import path based on your file structure.

const meta: Meta = {
  title: 'Components/RadioInput', // Storybook path
}

export default meta

// Default story for RadioInput
export const Default = () => (
  <RadioInput
    defaultValue="option1"
    aria-label="Example Radio Group"
    className="gap-4"
  >
    <RadioInput.Item value="option1" className="flex items-center gap-2">
      <RadioInput.Indicator className="h-4 w-4 rounded-full bg-blue-500" />
      <span>Option 1</span>
    </RadioInput.Item>
    <RadioInput.Item value="option2" className="flex items-center gap-2">
      <RadioInput.Indicator className="h-4 w-4 rounded-full bg-blue-500" />
      <span>Option 2</span>
    </RadioInput.Item>
    <RadioInput.Item value="option3" className="flex items-center gap-2">
      <RadioInput.Indicator className="h-4 w-4 rounded-full bg-blue-500" />
      <span>Option 3</span>
    </RadioInput.Item>
  </RadioInput>
)
