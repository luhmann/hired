import { FirebaseRepository } from '../../storage/'
import { RootStore, RouterStore } from '../'
import { ROUTE_NAMES } from '../routerStore'

import Router5 from 'router5'

describe('RouterStore', () => {
  let rootStore: RootStore
  let subject: RouterStore

  beforeEach(() => {
    const firebaseRepositoryMock = new FirebaseRepository()
    rootStore = new RootStore(firebaseRepositoryMock, 'me')

    subject = new RouterStore(rootStore)
  })

  it('should initialize', () => {
    expect(subject.instance).toMatchSnapshot()
  })

  it('should navigate to to new project screen', () => {
    subject.navigate(ROUTE_NAMES.projectNew)

    expect(rootStore.uiStore.hasError).toBe(false)
    expect(rootStore.uiStore.currentView.name).toBe(ROUTE_NAMES.projectNew)
  })

  it('should navigate to to project-list-screen', () => {
    subject.navigate(ROUTE_NAMES.projectList)

    expect(rootStore.uiStore.hasError).toBe(false)
    expect(rootStore.uiStore.currentView.name).toBe(ROUTE_NAMES.projectList)
  })

  it('should navigate to to project-overview-screen', () => {
    subject.navigate(ROUTE_NAMES.projectOverview, { projectId: '1234-5678-123'})

    expect(rootStore.uiStore.hasError).toBe(false)
    expect(rootStore.uiStore.currentView.name).toBe(ROUTE_NAMES.projectOverview)
    expect(rootStore.uiStore.currentView.projectId).toBe('1234-5678-123')
  })

  it('should enter error state when navigation to wrong route was attempted', () => {
    subject.navigate('foo')


    expect(rootStore.uiStore.hasError).toBe(true)
  })
})
