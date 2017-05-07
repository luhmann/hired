import * as React from 'react'
import { RouterProvider } from 'react-router5'
import { mount } from 'enzyme'

import { MOCK_PROJECTS, MOCK_ENTRIES } from '../../../test/mockData'
import { createRootStore } from '../../../test/util'
import { RootStore } from '../../stores/'
import Router from '../../lib/router'

import { ProjectListPage } from '../'

describe('ProjectListPage', () => {
  let rootStore: RootStore
  let router: Router

  beforeEach(() => {
    rootStore = createRootStore()
    router = new Router(rootStore)
  })

  it('should render empty message empty array is passed', () => {
    const subject = mount(
      <RouterProvider router={router.instance}>
        <ProjectListPage projects={[]} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })

  it('should render a project list if provided', () => {
    rootStore.projectListStore.hydrate(MOCK_PROJECTS)
    rootStore.entryListStore.hydrate(MOCK_ENTRIES)

    const subject = mount(
      <RouterProvider router={router.instance}>
        <ProjectListPage projects={rootStore.projectListStore.projects} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })
})
