import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { ProjectStore } from '../../stores/'
import { ROUTE_NAMES } from '../../stores/routerStore'
import { formatCurrency } from '../../lib/currency'
import { translate } from '../../constants/i18n'

import { color, gridCell } from '../../styles/style-utils'
import { Row } from '../../components/atoms/Containers'
import { Total as GlobalTotal } from '../../components/atoms/Text'
import { RowLink } from '../../components/molecules/Links'
import { EmptyList } from '../../components/molecules/'

const ProjectListRoot = styled.main`
  background-color: ${color.white};
`

const Total = styled(GlobalTotal) `
  ${ gridCell(4)}
`
export interface ProjectListProps {
  projects: ProjectStore[]
}

const ProjectList = observer(({ projects }: ProjectListProps) => {
  if (!projects.length) {
    return <EmptyList text={translate('projectPage.empty')}/>
  } else {
    return (
      <ProjectListRoot>
        {
          projects.map((project: ProjectStore, index: number) => (
            <Row contentCells={4} key={index}>
              <RowLink routeName={ROUTE_NAMES.projectOverview} routeParams={{ projectId: project.id }} >
                <span data-t-target="Project">{project.name}</span>
                <Total>{formatCurrency(project.totalRevenue)}</Total>
              </RowLink>
            </Row>
          ))
        }
      </ProjectListRoot>
    )
  }
})

export default ProjectList
