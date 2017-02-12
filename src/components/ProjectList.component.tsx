import * as React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router5'

import { ProjectInterface } from '../stores/projectStore'
import RootStore from '../stores/rootStore'
import { ROUTE_NAMES } from '../lib/router'

interface ProjectListProps {
  projects: ProjectInterface[]
  rootStore: RootStore
}

@observer
class ProjectList extends React.Component<ProjectListProps, {}> {
  constructor(props: ProjectListProps) {
    super(props)

  }

  render() {
    return (
      <div>
        {
          this.props.projects.map((project, index) => {
            return (
              <div key={index}>
                <Link routeName={ROUTE_NAMES.projectOverview} routeParams={{projectId: project.id}} >
                  {project.id} - {project.name} - {project.rate}
                </Link>
              </div>
              )
          })
        }
      </div>
    )
  }
}

export default ProjectList
