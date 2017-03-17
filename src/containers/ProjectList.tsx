import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { ProjectInterface } from '../stores/projectStore'
import RootStore from '../stores/rootStore'
import { ROUTE_NAMES } from '../lib/router'
import { formatCurrency } from '../lib/format-currency'

import { Row } from '../components/atoms/Containers'
import { Total as GlobalTotal } from '../components/atoms/Text'
import { gridCell } from '../styles/style-utils'
import { RowLink } from '../components/atoms/Links'
import ProjectListHeader from '../components/organisms/HeaderProjectList'

const Total = styled(GlobalTotal)`
  ${ gridCell(4)}
`

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
        <ProjectListHeader />
        <div>
          {
            this.props.projects.map((project, index) => {
              return (
                <Row contentCells={4} key={index}>
                  <RowLink routeName={ROUTE_NAMES.projectOverview} routeParams={{ projectId: project.id }} >
                    {project.name}
                    <Total>{formatCurrency(project.totalRevenue)}</Total>
                  </RowLink>
                </Row>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ProjectList
