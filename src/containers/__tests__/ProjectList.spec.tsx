import * as React from 'react'
import { RouterProvider } from 'react-router5'
import { mount } from 'enzyme'

import { MOCK_PROJECTS, MOCK_ENTRIES } from '../../test/mockData'
import { FirebaseRepository } from '../../storage/'
import { RootStore } from '../../stores/'

import { ProjectList } from '../'

describe('ProjectList', () => {
  let rootStore: RootStore

  beforeEach(() => {
    const repository = new FirebaseRepository()
    rootStore = new RootStore(repository, 'me')
  })

  it('should render nothing if an empty array is passed', () => {
    const subject = mount(
      <ProjectList projects={[]} />
    )

    expect(subject.html()).toBeNull()
  })

  it('should render a project list if provided', () => {
    rootStore.projectListStore.hydrate(MOCK_PROJECTS)
    rootStore.entryListStore.hydrate(MOCK_ENTRIES)

    const subject = mount(
      <RouterProvider router={rootStore.routerStore.instance}>
        <ProjectList projects={rootStore.projectListStore.projects} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })
})
