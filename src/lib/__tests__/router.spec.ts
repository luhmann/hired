import { createRootStore } from '../../../test/util'
import { RootStore } from '../../stores'
import Router from '../router'
import { VIEW_NAMES } from '../../stores/uiStore'

import Router5 from 'router5'

describe('Router', () => {
  let rootStore: RootStore
  let subject: Router

  beforeEach(() => {
    rootStore = createRootStore()

    subject = new Router(rootStore)
  })

  it('should initialize', () => {
    expect(subject.instance).toMatchSnapshot()
  })

  it('should navigate to to new project screen', () => {
    subject.navigate(VIEW_NAMES.projectNew)

    expect(rootStore.uiStore.hasError).toBe(false)
    expect(rootStore.uiStore.currentView.name).toBe(VIEW_NAMES.projectNew)
  })

  it('should navigate to to project-list-screen', () => {
    subject.navigate(VIEW_NAMES.projectList)

    expect(rootStore.uiStore.hasError).toBe(false)
    expect(rootStore.uiStore.currentView.name).toBe(VIEW_NAMES.projectList)
  })

  it('should navigate to to project-overview-screen', () => {
    subject.navigate(VIEW_NAMES.projectOverview, { projectId: '1234-5678-123'})

    expect(rootStore.uiStore.hasError).toBe(false)
    expect(rootStore.uiStore.currentView.name).toBe(VIEW_NAMES.projectOverview)
    expect(rootStore.uiStore.currentView.projectId).toBe('1234-5678-123')
  })

  it('should enter error state when navigation to wrong route was attempted', () => {
    subject.navigate('foo')

    expect(rootStore.uiStore.hasError).toBe(true)
  })
})
