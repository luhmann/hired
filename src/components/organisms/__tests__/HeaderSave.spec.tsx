import * as React from 'react'
import { shallow } from 'enzyme'

import { HeaderSave } from '../'

describe('HeaderSave', () => {
  it('should render', () => {
    const subject = shallow(
      <HeaderSave
        title="New Project"
        cancelHandler={ () => ({}) }
        saveHandler={ () => ({}) }
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
