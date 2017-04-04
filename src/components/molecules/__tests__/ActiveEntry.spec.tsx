import * as React from 'react'
import { mount } from 'enzyme'

import { ActiveEntry } from '../'

describe('ActiveEntry', () => {
  it('should render', () => {
    const startDate = new Date(2017, 1, 14, 10, 21)

    const subject = mount(
      <ActiveEntry
        start={startDate}
        duration={7340}
        standardHours={8}
        total={85.789}
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
