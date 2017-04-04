import * as React from 'react'
import { shallow } from 'enzyme'

import { HeaderProjectList } from '../'

describe('HeaderProjectList', () => {
  it('should render', () => {
    const subject = shallow(
      <HeaderProjectList />
    )

    expect(subject).toMatchSnapshot()
  })
})
