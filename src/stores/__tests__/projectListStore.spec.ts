import * as mobx from 'mobx'

import { MOCK_PROJECTS } from '../../test/mockData'
import { firebaseSetMock } from '../../storage/__mocks__/firebase'

import FirebaseRepository from '../../storage/firebaseRepository'
import { RootStore, ProjectListStore } from '../'

describe('ProjectListStore', () => {
  global.console.group = jest.fn()
  global.console.groupEnd = jest.fn()

  let rootStoreMock: RootStore
  let subject: ProjectListStore

  beforeEach(() => {
    mobx.extras.resetGlobalState()
    jest.mock('firebase')
    firebaseSetMock.mockReset()

    const repository = new FirebaseRepository()
    rootStoreMock = new RootStore(repository, 'me')

    subject = new ProjectListStore(
      rootStoreMock
    )
  })

  it('should initialize', () => {
    expect(subject).toBeDefined
    expect(mobx.toJS(subject.projects)).toEqual([])
  })

  it('should hydrate from data structure', () => {
    subject.hydrate(MOCK_PROJECTS)

    expect(subject.toStorage).toMatchSnapshot()
  })

  it('should add projects', () => {
    MOCK_PROJECTS.forEach((item) => {
      subject.add(item.name, item.standardRate, item.description, item.id, item.standardHours)
      expect(subject.toStorage).toMatchSnapshot()
    })

    expect(firebaseSetMock.mock.calls.length).toBe(MOCK_PROJECTS.length)
    expect(firebaseSetMock.mock.calls).toMatchSnapshot()
  })

  it('should return the current project', () => {
    rootStoreMock.uiStore.showProject('2345-9384-324523')
    subject.hydrate(MOCK_PROJECTS)

    expect(subject.currentProject.toStorage).toEqual(MOCK_PROJECTS[1])
  })

  it('should get a project by id', () => {
    subject.hydrate(MOCK_PROJECTS)

    expect(subject.getById('2345-9384-324523').toStorage).toEqual(MOCK_PROJECTS[1])
  })

  it('should determine that a project with known id exists', () => {
    subject.hydrate(MOCK_PROJECTS)

    expect(subject.hasProject('2345-9384-324523')).toBe(true)
  })

  it('should determine that a project by an unknown id does not exist', () => {
    subject.hydrate(MOCK_PROJECTS)

    expect(subject.hasProject('1234')).toBe(false)
  })
})
