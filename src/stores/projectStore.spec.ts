import * as TypeMoq from 'typemoq'

import ProjectStore from './projectStore'
import EntryListStore from './entryListStore'
import EntryStore from './entryStore'

describe('ProjectStore', () => {
  const TEST_DATA = Object.freeze({
    id: '1234-5678',
    name: 'Foo Industries Inc.',
    standardRate: 15.5,
    description: 'A non-existing company everybody loves to work for',
    standardHours: 8
  })

  let entryListStoreMock: TypeMoq.IMock<EntryListStore>
  let subject: ProjectStore

  beforeEach(() => {
    entryListStoreMock = TypeMoq.Mock.ofType(EntryListStore)

    subject = new ProjectStore(
      entryListStoreMock.object,
      TEST_DATA.id,
      TEST_DATA.name,
      TEST_DATA.standardRate,
      TEST_DATA.description,
      TEST_DATA.standardHours
    )
  })

  it('should instantiate', () => {
    expect(subject.entryListStore).toBe(entryListStoreMock.object)
  })

  it('should calculate the total revenue for a project', () => {
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
