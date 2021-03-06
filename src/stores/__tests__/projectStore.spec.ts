import * as mobx from 'mobx'

import { createRootStore } from '../../../test/util'
import RootStore from '../rootStore'
import ProjectStore from '../projectStore'

import { MOCK_PROJECTS } from '../../../test/mockData'

describe('ProjectStore', () => {
  const TEST_DATA = MOCK_PROJECTS[0]

  let rootStoreMock: RootStore
  let subject: ProjectStore

  beforeEach(() => {
    mobx.extras.resetGlobalState()
    jest.mock('firebase')

    rootStoreMock = createRootStore()

    subject = new ProjectStore(
      rootStoreMock,
      TEST_DATA.id,
      TEST_DATA.name,
      TEST_DATA.standardRate,
      TEST_DATA.description,
      TEST_DATA.standardHours
    )
  })

  it('should instantiate', () => {
    expect(subject.id).toBe(TEST_DATA.id)
    expect(subject.name).toBe(TEST_DATA.name)
    expect(subject.standardRate).toBe(TEST_DATA.standardRate)
    expect(subject.description).toBe(TEST_DATA.description)
    expect(subject.standardHours).toBe(TEST_DATA.standardHours)
  })

  it('should calculate the total revenue for a project', () => {
    rootStoreMock.entryListStore.getEntriesForProject = jest.fn(() => [
      {
        total: 200.52
      },
      {
        total: 20000.81
      },
      {
        total: 50.99
      }
    ])

    expect(subject.totalRevenue).toBe(20252.320000000003)
  })

  it('should turn the current state into a serializable object', () => {
    expect(subject.toStorage).toMatchObject({
      id: TEST_DATA.id,
      name: TEST_DATA.name,
      standardRate: TEST_DATA.standardRate,
      standardHours: TEST_DATA.standardHours,
      description: TEST_DATA. description
    })
  })
})
