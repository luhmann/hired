import * as React from 'react'
import { RouterProvider } from 'react-router5'
import { mount } from 'enzyme'

import { MOCK_PROJECTS, MOCK_ENTRIES } from '../../../test/mockData'
import { FirebaseRepository } from '../../storage/'
import { RootStore } from '../../stores/'

import { ProjectListPage } from '../'

describe('ProjectListPage', () => {
  let rootStore: RootStore

  beforeEach(() => {
    const repository = new FirebaseRepository()
    rootStore = new RootStore(repository, 'me')
  })

  it('should render empty message empty array is passed', () => {
    const subject = mount(
      <RouterProvider router={rootStore.routerStore.instance}>
        <ProjectListPage projects={[]} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })

  it('should render a project list if provided', () => {
    rootStore.projectListStore.hydrate(MOCK_PROJECTS)
    rootStore.entryListStore.hydrate(MOCK_ENTRIES)

    const subject = mount(
      <RouterProvider router={rootStore.routerStore.instance}>
        <ProjectListPage projects={rootStore.projectListStore.projects} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })
})
