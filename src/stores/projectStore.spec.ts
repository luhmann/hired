import * as mobx from 'mobx'
import * as TypeMoq from 'typemoq'

import EntryStore from './entryStore'
import EntryListStore from './entryListStore'
import FirebaseRepository from '../storage/firebaseRepository'
import ProjectStore from './projectStore'
import RootStore from './rootStore'

import { mockProjects } from '../test/mockData'

describe('ProjectStore', () => {
  const TEST_DATA = mockProjects[0]

  let entryListStoreMock: TypeMoq.IMock<EntryListStore>
  let repository = new FirebaseRepository()
  let rootStoreMock: TypeMoq.IMock<RootStore>
  let subject: ProjectStore

  beforeEach(() => {
    mobx.extras.resetGlobalState()
    jest.mock('firebase')
    rootStoreMock = TypeMoq.Mock.ofType(RootStore, TypeMoq.MockBehavior.Loose, repository, 'me')

    subject = new ProjectStore(
      rootStoreMock.object,
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
    entryListStoreMock = TypeMoq.Mock.ofType(EntryListStore)

    let entryMock: TypeMoq.IMock<EntryStore> = TypeMoq.Mock.ofType(EntryStore, TypeMoq.MockBehavior.Loose, {})

    entryMock.setup(em => em.total).returns(() => 200.52)
    entryMock.setup(em => em.total).returns(() => 20000.81)
    entryMock.setup(em => em.total).returns(() => 50.99)

    entryListStoreMock
      .setup(els => els.getEntriesForProject(TEST_DATA.id))
      .returns(() => [
        entryMock.object,
        entryMock.object,
        entryMock.object
      ])

    rootStoreMock
      .setup(rsm => rsm.entryListStore)
      .returns(() => entryListStoreMock.object)

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
