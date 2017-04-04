import * as React from 'react'
import { mount } from 'enzyme'

import { InputNumberWithLabel } from '../'

describe('InputNumberWithLabel', () => {
  it('should render', () => {
    const subject = mount(
      <InputNumberWithLabel
        id="rate"
        label="Rate"
        placeholder="Enter the current rate for the project"
        unit="EUR"
        changeHandler={() => {}}
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
