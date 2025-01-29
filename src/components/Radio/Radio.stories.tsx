//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Meta } from '@storybook/react'
import { RadioGroup, Radio } from './Radio'
import { SideLabel } from '../SideLabel'

const meta: Meta = {
  title: 'Components/RadioInput',
}

export default meta

export const Default = () => (
  <RadioGroup
    className="flex flex-col space-y-4"
    defaultValue="default"
    aria-label="View density"
  >
    <SideLabel htmlFor="r1" label="Default" className="flex items-center">
      <Radio value="1" id="r1" className="border-primary"></Radio>
    </SideLabel>
    <SideLabel htmlFor="r2" label="Second Choice" className="flex items-center">
      <Radio value="2" id="r2" className="border-primary"></Radio>
    </SideLabel>
  </RadioGroup>
)
