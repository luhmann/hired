import * as React from 'react'
import { observer, inject } from 'mobx-react'

import { ProjectInterface } from '../stores/projectStore'
import RootStore from '../stores/rootStore'

interface ProjectListProps {
  projects: ProjectInterface[]
  rootStore?: RootStore
}

@inject('rootStore')
@observer
class ProjectList extends React.Component<ProjectListProps, {}> {
  constructor(props: ProjectListProps) {
    super(props)

  }

  handleClick(event: React.SyntheticEvent<any>, id: string): void {
    if (this.props.rootStore) {
      this.props.rootStore.projectStore.setCurrentProjectId(id)
    }
  }

  render() {
    return (
      <div>
        {
          this.props.projects.map((project, index) => {
            return (
              <div key={index} onClick={(e) => this.handleClick(e, project.id )}>
                {project.id} - {project.name} - {project.rate}
                </div>)
          })
        }
      </div>
    )
  }
}

export default ProjectList
