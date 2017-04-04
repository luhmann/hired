import * as React from 'react'
import { mount } from 'enzyme'

import ClockIn from '../ClockIn'

describe('ClockIn', () => {
  it('should render in idle-state', () => {
    const subject = mount(
      <ClockIn
        running={false}
        startEntry={() => {}}
        stopEntry={() => {}}
      />
    )

    expect(subject).toMatchSnapshot()
  })

  it('should render in running-state', () => {
    const subject = mount(
      <ClockIn
        running={true}
        startEntry={() => {}}
        stopEntry={() => {}}
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
