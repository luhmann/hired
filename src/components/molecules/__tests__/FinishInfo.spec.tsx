import * as React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import FinishInfo, { FinishInfoProps } from '../FinishInfo'

describe('FinishInfo', () => {
  let subject: ReactWrapper<FinishInfoProps, {}>

  beforeEach(() => {
    const startTime = new Date(2017, 1, 14, 10, 22)

    subject = mount(
      <FinishInfo
        startTime={startTime}
        workHours={8}
      />
    )

  })
  it('should render', () => {
    expect(subject).toMatchSnapshot()
  })
})
