import { observable, action } from 'mobx'

class ProjectStore {
  @observable isFetched: boolean = false
  @observable projects = []

  @action
  fetchProjects() {

  }

}

const projectStore = new ProjectStore()

export { ProjectStore }
export default projectStore
