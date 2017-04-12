import * as React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'

import { MOCK_PROJECTS, MOCK_ENTRIES } from '../mockData'
import { createRootStore } from '../util'
import { FirebaseRepository } from '../../src/storage'
import { RootStore } from '../../src/stores/'

import { App } from '../../src/containers'

describe('A user should be able to create new time entries', () => {
  let rootStore: RootStore
  let subject

  beforeEach(async () => {
    jest.mock('firebase')

    rootStore = createRootStore()
    subject = mount(
      <Provider rootStore={rootStore}>
        <RouterProvider router={rootStore.routerStore.instance}>
          <App rootStore={rootStore} />
        </RouterProvider>
      </Provider>
    )

    await rootStore.fetchData()
  })

  describe('GIVEN: A user has added some projects', () => {
    beforeEach(() => {
      rootStore.projectListStore.hydrate(MOCK_PROJECTS)
    })

    describe('AND: he navigates to the ProjectPage', () => {
      beforeEach(() => {
        rootStore.uiStore.showProject('1234-5678-9012')
      })

      it('empty notification should be displayed', () => {
        expect(subject.find('EmptyList').length).toBe(1)
        expect(subject).toMatchSnapshot()
      })

      it('should be possible to start a new entry', () => {
        // WHEN: he presses the start button
        subject.find('[data-t-target="ClockInButton"]').simulate('click')

        // THEN: an active timer should be in the list
        expect(subject.find('[data-t-target="ActiveEntry"]').length).toBe(1)
      })
    })

    describe('AND: The user has a running timer', () => {
      beforeEach(() => {
        rootStore.entryListStore.hydrate([
          {
            id: '2342-6552-5345',
            startTime: +new Date() - 3600 * 1000,
            endTime: null,
            rate: 35.50,
            projectId: '1234-5678-9012'
          }
        ])
      })

      describe('AND: he navigates to the project-page', () => {
        beforeEach(() => {
          rootStore.uiStore.showProject('1234-5678-9012')
        })

        it('should be possible to stop the running entry', () => {
          // WHEN: the user clicks the ClockOut-Button
          subject.find('[data-t-target="ClockInButton"]').simulate('click')

          // THEN: The entry-list should be displayed
          expect(subject.find('EntryList').length).toBe(1)
          expect(subject.find('[data-t-target="Entry"]').length).toBe(1)
        })
      })
    })
  })

  describe('GIVEN: The user already has a couple of projects and entries', () => {
    beforeEach(() => {
      rootStore.projectListStore.hydrate(MOCK_PROJECTS)
      rootStore.entryListStore.hydrate(MOCK_ENTRIES)
    })

    describe('AND: she navigates to the project-list-page', () => {
      beforeEach(() => {
        rootStore.uiStore.showProjectList()
      })

      it('the existing projects should be displayed', () => {
        expect(subject.find('[data-t-target="Project"]').length).toBe(3)
        expect(subject).toMatchSnapshot()
      })
    })

    describe('AND: she navigates to a project-page', () => {
      beforeEach(() => {
        rootStore.uiStore.showProject('1234-5678-9012')
      })

      it('the existing entries should be displayed', () => {
        // THEN: The entry-list should be displayed
        expect(subject.find('EntryList').length).toBe(1)
        expect(subject.find('[data-t-target="Entry"]').length).toBe(4)
        expect(subject).toMatchSnapshot()
      })

      it('should be possible to start a new entry', () => {
        // WHEN: he presses the start button
        subject.find('[data-t-target="ClockInButton"]').simulate('click')

        // THEN: an active timer should be in the list
        expect(subject.find('[data-t-target="ActiveEntry"]').length).toBe(1)

        // AND: the other entries should be displayed
        expect(subject.find('EntryList').length).toBe(1)
        expect(subject.find('[data-t-target="Entry"]').length).toBe(4)
      })
    })
  })
})
