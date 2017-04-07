import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { ProjectStore } from '../stores/'
import { ROUTE_NAMES } from '../stores/routerStore'
import { formatCurrency } from '../lib/currency'

import { color, maxWidthContainer } from '../styles/style-utils'
import { Row } from '../components/atoms/Containers'
import { Total as GlobalTotal } from '../components/atoms/Text'
import { gridCell } from '../styles/style-utils'
import { RowLink } from '../components/molecules/Links'
import ProjectListHeader from '../components/organisms/HeaderProjectList'

const Root = styled.section`
  ${ maxWidthContainer() }
`

const ProjectListRoot = styled.main`
  background-color: ${color.white};
`

const Total = styled(GlobalTotal)`
  ${ gridCell(4)}
`

interface ProjectListProps {
  projects: ProjectStore[]
}

@observer
class ProjectList extends React.Component<ProjectListProps, {}> {
  constructor(props: ProjectListProps) {
    super(props)

  }

  render() {
    if (!this.props.projects.length) {
      return null
    }

    return (
      <Root>
        <ProjectListHeader />
        <ProjectListRoot>
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
        </ProjectListRoot>
      </Root>
    )
  }
}

export default ProjectList
