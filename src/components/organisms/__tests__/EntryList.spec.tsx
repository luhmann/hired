import * as React from 'react'
import { mount } from 'enzyme'

import { EntryStore } from '../../../stores'
import { MOCK_ENTRIES } from '../../../test/mockData'

import { EntryList } from '../'

describe('EntryList', () => {
  it('should render normal-state if entries are provided', () => {
    const entryList = MOCK_ENTRIES.map((entry: any) => EntryStore.fromStorage(entry))

    const subject = mount(
      <EntryList
        entryList={entryList}
      />
    )

    expect(subject).toMatchSnapshot()
  })

  it('should render empty-state no entries are available', () => {
    const subject = mount(
      <EntryList
        entryList={[]}
      />
    )

    expect(subject).toMatchSnapshot()
  })
})
