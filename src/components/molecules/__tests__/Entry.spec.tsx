import * as React from 'react'
import { mount } from 'enzyme'

import { Entry } from '../'

describe('Component: Entry', () => {
  const startDateMock = new Date(2015, 1, 1, 10, 22)
  const endDateMock = new Date(2015, 1, 1, 12, 53)
  const duration = (Number(endDateMock) - Number(startDateMock)) / 1000
  const total = (duration / 3600) * 20

  it('should render', () => {
    const subject = mount(
      <Entry
        start={startDateMock}
        end={endDateMock}
        duration={duration}
        total={total}
      />
    )

    expect(subject).toMatchSnapshot()
  })

  it('should omit the endDate if not provided', () => {
    const subject = mount(
      <Entry
        start={startDateMock}
        duration={duration}
        total={total}
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
