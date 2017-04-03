import UiStore from '../uiStore'
import { ROUTE_NAMES } from '../routerStore'

describe('UiStore', () => {
  let subject: UiStore

  beforeEach(() => {
    subject = new UiStore()
  })

  it('should switch to projectListView', () => {
    subject.showProjectList()

    expect(subject.currentView.name).toBe(ROUTE_NAMES.projectList)
  })

  it('should switch to projectView and set the project id', () => {
    subject.showProject('1234-5678')

    expect(subject.currentView.name).toBe(ROUTE_NAMES.projectOverview)
    expect(subject.currentView.projectId).toBe('1234-5678')
  })

  it('should switch to projectNewView', () => {
    subject.showNewProject()

    expect(subject.currentView.name).toBe(ROUTE_NAMES.projectNew)
  })

  it('should set loaded-state', () => {
    subject.setLoaded(true)

    expect(subject.isLoaded).toBe(true)
  })

  it('should set error-state', () => {
    subject.setError(true)

    expect(subject.hasError).toBe(true)
  })
})
