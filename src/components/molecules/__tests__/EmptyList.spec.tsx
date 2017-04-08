import * as React from 'react'
import { mount } from 'enzyme'

import { EmptyList } from '../'

describe('EmptyList', () => {
  it('should render', () => {
    const subject = mount(
      <EmptyList text="Hello World!" />
    )

    expect(subject).toMatchSnapshot()
  })
})
