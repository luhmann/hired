import { observable, action } from 'mobx'

class ProjectStore {
  @observable isFetched: boolean = false
  @observable projects: Object = {}
  @observable currentProject: ProjectInterface

  // @action
  // fetchProjects() {

  // }

  @action
  add(id: string, name: string, rate: number, description: string = '') {
    const project = {
      id,
      name,
      rate,
      description
    }

    this.projects[id] = project
  }

  @action
  setCurrent(id: string) {
    if (this.projects[id]) {
      this.currentProject = this.projects[id]
    } else {
      throw new Error(`Project with ${id} does not exist`)
    }
  }

}

export interface ProjectInterface {
  id: string,
  name: string,
  rate: number,
  description: string
}

const projectStore = new ProjectStore()

// TODO: dummy
projectStore.add('neusta', 'Neusta', 67.50, 'A super cool project')
projectStore.setCurrent('neusta')


export { ProjectStore }
export default projectStore
