import * as React from 'react'
import { shallow } from 'enzyme'

import { HeaderEntriesList } from '../'

describe('HeaderEntriesList', () => {
  it('should render', () => {
    const subject = shallow(
      <HeaderEntriesList
        project="ACME Inc."
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
