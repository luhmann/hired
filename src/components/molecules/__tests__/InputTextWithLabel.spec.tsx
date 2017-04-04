import * as React from 'react'
import { mount } from 'enzyme'

import { InputTextWithLabel } from '../'

describe('InputTextWithLabel', () => {
  it('should render', () => {
    const subject = mount(
      <InputTextWithLabel
        id="description"
        label="Description"
        placeholder="Enter a description for the current project"
        changeHandler={() => { }}
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
