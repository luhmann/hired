import * as React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'

import { createRootStore, enterText } from '../util'

import { VIEW_NAMES } from '../../src/stores/uiStore'
import { RootStore } from '../../src/stores/'
import Router from '../../src/lib/router'

import { App } from '../../src/containers'

describe('A user should be able to create a new project', () => {
  let rootStore: RootStore
  let router: Router
  let subject

  beforeEach(async () => {
    jest.mock('firebase')

    rootStore = createRootStore()
    router = new Router(rootStore)
    subject = mount(
      <Provider rootStore={rootStore} router={router}>
        <RouterProvider router={router.instance}>
          <App rootStore={rootStore} />
        </RouterProvider>
      </Provider>
    )

    await rootStore.fetchData()
  })

  describe('GIVEN: a user navigates to the project overview page', () => {

    describe('AND: the project list is empty', () => {
      it('empty-notification should be displayed', () => {
        // WHEN: the user hits the url
        rootStore.uiStore.showProjectList()

        // THEN
        expect(subject.find('EmptyList').length).toBe(1)
      })
    })
  })

  describe('GIVEN: a user is on the add-project-page', () => {
    beforeEach(() => {
      router.navigate(VIEW_NAMES.projectNew)
    })

    it('should create a new project', () => {
      const TEST_DATA = {
        name: 'Foo Computers Inc.',
        standardRate: 20.50,
        description: 'A very cool project'
      }

      // WHEN: the user fills out the form
      enterText(subject.find('#project-name'), TEST_DATA.name)
      enterText(subject.find('#standard-rate'), TEST_DATA.standardRate)
      enterText(subject.find('#description'), TEST_DATA.description)

      // AND: presses the save-button
      subject.find('[data-t-target="SaveButton"]').simulate('click')

      // THEN: the user should see a new project in the project-list
      expect(rootStore.uiStore.currentView.name).toBe(VIEW_NAMES.projectList)
      expect(subject.find('[data-t-target="Project"]').length).toBe(1)
      expect(subject.find('[data-t-target="Project"]').text()).toContain(TEST_DATA.name)
    })
  })
})
