import * as mobx from 'mobx'

import { firebaseSetMock } from '../../storage/__mocks__/firebase'

import FirebaseRepository from '../../storage/firebaseRepository'
import { RootStore, EntryListStore } from '../'

import { MOCK_ENTRIES } from '../../test/mockData'

describe('EntryListStore', () => {
  let rootStoreMock: RootStore
  let subject: EntryListStore

  beforeEach(() => {
    mobx.extras.resetGlobalState()
    jest.mock('firebase')
    firebaseSetMock.mockReset()

    const repository = new FirebaseRepository()
    rootStoreMock = new RootStore(repository, 'me')

    subject = new EntryListStore(
      rootStoreMock
    )
  })

  it('should initialize', () => {
    expect(subject).toBeDefined
    expect(mobx.toJS(subject.entries)).toEqual([])
    expect(subject.active).toBe(null)
  })

  describe('Hydration', () => {
    it('should hydrate from stored data', () => {
      subject.hydrate(MOCK_ENTRIES)

      expect(mobx.toJS(subject.entries)).toMatchSnapshot()
      expect(subject.active).toBe(null)
    })

    it('should sort all entries newest first', () => {
      subject.hydrate(MOCK_ENTRIES)

      expect(subject.entries[0].id).toEqual(MOCK_ENTRIES[3].id)
      expect(subject.entries[1].id).toEqual(MOCK_ENTRIES[2].id)
      expect(subject.entries[2].id).toEqual(MOCK_ENTRIES[1].id)
      expect(subject.active).toBe(null)
    })

    it('should set the newest entry active if it does not have an endTime', () => {
      const LOCAL_TEST_DATA = [{
        id: '5555-6666-7777',
        startTime: +new Date(2017, 1, 28, 9, 0),
        endTime: null,
        rate: 35.50,
        projectId: '1234-5678-9012'
      }, ...MOCK_ENTRIES]

      subject.hydrate(LOCAL_TEST_DATA)

      expect(subject.active).not.toBe(null)
      expect(subject.active.id).toBe('5555-6666-7777')
    })
  })
})
