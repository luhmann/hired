import * as mobx from 'mobx'

import { mockProjects } from '../../test/mockData'
import { firebaseSetMock } from '../__mocks__/firebase'

import FirebaseRepository from '../../storage/firebaseRepository'
import RootStore from '../rootStore'
import ProjectListStore from '../projectListStore'

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
    subject.hydrate(mockProjects)

    expect(subject.toStorage).toMatchSnapshot()
  })

  it('should add projects', () => {
    mockProjects.forEach((item) => {
      subject.add(item.name, item.standardRate, item.description, item.id, item.standardHours)
      expect(subject.toStorage).toMatchSnapshot()
    })

    expect(firebaseSetMock.mock.calls.length).toBe(mockProjects.length)
    expect(firebaseSetMock.mock.calls).toMatchSnapshot()
  })

  it('should return the current project', () => {
    rootStoreMock.uiStore.showProject('2345-9384-324523')
    subject.hydrate(mockProjects)
    
    expect(subject.currentProject.toStorage).toEqual(mockProjects[1])
  })

  it('should get a project by id', () => {
    subject.hydrate(mockProjects)

    expect(subject.getById('2345-9384-324523').toStorage).toEqual(mockProjects[1])
  })
})
