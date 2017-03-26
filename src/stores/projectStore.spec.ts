import * as TypeMoq from 'typemoq'

import ProjectStore from './projectStore'
import EntryListStore from './entryListStore'

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
})
