import * as React from 'react'
import { RouterProvider } from 'react-router5'
import { mount } from 'enzyme'

import { MOCK_PROJECTS, MOCK_ENTRIES } from '../../../test/mockData'
import { createRootStore } from '../../../test/util'
import { RootStore } from '../../stores/'
import Router from '../../lib/router'

import { ProjectPage } from '../'

describe('ProjectPage', () => {
  let rootStore: RootStore
  let router: Router

  beforeEach(() => {
    rootStore = createRootStore()
    router = new Router(rootStore)
  })

  it('should render an error if an invalid projectId is provided', () => {
    const subject = mount(
      <RouterProvider router={router.instance}>
        <ProjectPage id="foo" rootStore={rootStore} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })

  it('should render an existing project', () => {
    rootStore.projectListStore.hydrate(MOCK_PROJECTS)
    rootStore.entryListStore.hydrate(MOCK_ENTRIES)

    const subject = mount(
      <RouterProvider router={router.instance}>
        <ProjectPage id="1234-5678-9012" rootStore={rootStore} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })
})
