import * as React from 'react'
import { mount } from 'enzyme'

import { Error } from '../'

describe('Error', () => {
  it('should render', () => {

    const subject = mount(
      <Error />
    )

    expect(subject).toMatchSnapshot()
  })

})
