import * as React from 'react'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'
import { mount } from 'enzyme'
import { enterText } from '../../../test/util'

import { ROUTE_NAMES } from '../../stores/routerStore'
import { FirebaseRepository } from '../../storage/'
import { RootStore } from '../../stores/'

import { ProjectNew } from '../'

describe('ProjectNew', () => {
  const TEST_DATA = {
    name: 'Foo Computers Inc.',
    standardRate: 20.50,
    description: 'A very cool project'
  }
  let rootStore: RootStore

  beforeEach(() => {
    const repository = new FirebaseRepository()
    rootStore = new RootStore(repository, 'me')
    rootStore.routerStore.navigate = jest.fn()
  })

  it('should render', () => {
    const subject = mount(
      <Provider rootStore={rootStore}>
        <RouterProvider router={rootStore.routerStore.instance}>
          <ProjectNew />
        </RouterProvider>
      </Provider>
    )

    expect(subject).toMatchSnapshot()
  })

  it('should save a new project', () => {
    const subject = mount(
      <Provider rootStore={rootStore}>
        <RouterProvider router={rootStore.routerStore.instance}>
          <ProjectNew />
        </RouterProvider>
      </Provider>
    )

    enterText(subject.find('#project-name'), TEST_DATA.name)
    enterText(subject.find('#standard-rate'), TEST_DATA.standardRate)
    enterText(subject.find('#description'), TEST_DATA.description)

    subject.find('[data-t-target="SaveButton"]').simulate('click')

    expect(rootStore.projectListStore.projects.length).toBe(1)
    expect(rootStore.projectListStore.projects[0].toStorage).toMatchObject(TEST_DATA)
    expect(rootStore.routerStore.navigate.mock.calls[0][0]).toEqual(ROUTE_NAMES.projectList)
  })

  it('should cancel creating a new project', () => {
    const subject = mount(
      <Provider rootStore={rootStore}>
        <RouterProvider router={rootStore.routerStore.instance}>
          <ProjectNew />
        </RouterProvider>
      </Provider>
    )

    subject.find('[data-t-target="CancelButton"]').simulate('click')
    expect(rootStore.routerStore.navigate.mock.calls[0][0]).toEqual(ROUTE_NAMES.projectList)
  })
})
