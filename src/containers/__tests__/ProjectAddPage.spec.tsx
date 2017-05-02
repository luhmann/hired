import * as React from 'react'
import { RouterProvider } from 'react-router5'
import { mount } from 'enzyme'
import { enterText } from '../../../test/util'

import { VIEW_NAMES } from '../../stores/uiStore'
import { FirebaseRepository } from '../../storage/'
import { RootStore } from '../../stores/'
import Router from '../../lib/router'

import { ProjectAddPage } from '../'

describe('ProjectAddPage', () => {
  const TEST_DATA = {
    name: 'Foo Computers Inc.',
    standardRate: 20.50,
    description: 'A very cool project'
  }
  let rootStore: RootStore
  let router: Router

  beforeEach(() => {
    const repository = new FirebaseRepository()
    rootStore = new RootStore(repository, 'me')
    router = new Router(rootStore)
    router.navigate = jest.fn()
  })

  it('should render', () => {
    const subject = mount(
      <RouterProvider router={router.instance}>
        <ProjectAddPage rootStore={rootStore} router={router} />
      </RouterProvider>
    )

    expect(subject).toMatchSnapshot()
  })

  it('should save a new project', () => {
    const subject = mount(
      <RouterProvider router={router.instance}>
        <ProjectAddPage rootStore={rootStore} router={router} />
      </RouterProvider>
    )

    enterText(subject.find('#project-name'), TEST_DATA.name)
    enterText(subject.find('#standard-rate'), TEST_DATA.standardRate)
    enterText(subject.find('#description'), TEST_DATA.description)

    subject.find('[data-t-target="SaveButton"]').simulate('click')

    expect(rootStore.projectListStore.projects.length).toBe(1)
    expect(rootStore.projectListStore.projects[0].toStorage).toMatchObject(TEST_DATA)
    expect(router.navigate.mock.calls[0][0]).toEqual(VIEW_NAMES.projectList)
  })

  it('should cancel creating a new project', () => {
    const subject = mount(
      <RouterProvider router={router.instance}>
        <ProjectAddPage rootStore={rootStore} router={router} />
      </RouterProvider>
    )

    subject.find('[data-t-target="CancelButton"]').simulate('click')
    expect(router.navigate.mock.calls[0][0]).toEqual(VIEW_NAMES.projectList)
  })
})
