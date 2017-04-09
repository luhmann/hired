import * as React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'

import { createRootStore } from '../util'
import { firebaseValMock } from '../../src/storage/__mocks__/firebase'

import { FirebaseRepository } from '../../src/storage'
import { RootStore } from '../../src/stores/'

import { App } from '../../src/containers'

describe('GIVEN: a user navigates to the project overview page', () => {
  let rootStore: RootStore
  let subject

  beforeEach(async() => {
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

  describe('AND: the project list is empty', () => {
    it('empty-notification should be displayed', () => {
      // WHEN: the user hits the url
      rootStore.uiStore.showProjectList()

      // THEN
      expect(subject.find('EmptyList').length).toBe(1)
    })
  })
})
