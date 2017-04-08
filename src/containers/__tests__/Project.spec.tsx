import * as React from 'react'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'
import { mount } from 'enzyme'

import { MOCK_PROJECTS, MOCK_ENTRIES } from '../../../test/mockData'
import { FirebaseRepository } from '../../storage/'
import { RootStore } from '../../stores/'

import { Project } from '../'

describe('Project', () => {
  let rootStore: RootStore

  beforeEach(() => {
    const repository = new FirebaseRepository()
    rootStore = new RootStore(repository, 'me')
  })

  it('should render an error if an invalid projectId is provided', () => {
    const subject = mount(
      <Provider rootStore={rootStore}>
        <RouterProvider router={rootStore.routerStore.instance}>
          <Project id="foo" />
        </RouterProvider>
      </Provider>
    )

    expect(subject).toMatchSnapshot()
  })

  it('should render an existing project', () => {
    rootStore.projectListStore.hydrate(MOCK_PROJECTS)
    rootStore.entryListStore.hydrate(MOCK_ENTRIES)

    const subject = mount(
      <Provider rootStore={rootStore}>
        <RouterProvider router={rootStore.routerStore.instance}>
          <Project id="1234-5678-9012" />
        </RouterProvider>
      </Provider>
    )

    expect(subject).toMatchSnapshot()
  })
})
