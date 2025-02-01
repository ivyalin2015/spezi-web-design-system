//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { render, screen } from '@testing-library/react'
import { RadioGroup, Radio } from './Radio'

describe('RadioInput', () => {
  it('renders radio inputs', () => {
    render(
      <RadioGroup defaultValue="option1" aria-label="Example Radio Input">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>,
    )

    const option1 = screen.getByLabelText('Option 1')
    const option2 = screen.getByLabelText('Option 2')

    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
  })
})
