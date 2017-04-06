import * as React from 'react'
import { mount } from 'enzyme'

import { Bootstrap } from '../'

describe('Bootstrap', () => {
  it('should render', () => {

    const subject = mount(
      <Bootstrap />
    )

    expect(subject).toMatchSnapshot()
  })

})
