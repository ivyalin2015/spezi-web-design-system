//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { render, screen } from '@testing-library/react'
import { Radio, RadioItem } from './Radio'

describe('RadioInput', () => {
  it('renders radio buttons', () => {
    render(
      <Radio defaultValue="option1" aria-label="Example Radio Input">
        <RadioItem value="option1" label="Option 1" />
        <RadioItem value="option2" label="Option 2" />
      </Radio>,
    )

    const option1 = screen.getByLabelText('Option 1')
    const option2 = screen.getByLabelText('Option 2')

    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
  })
})
