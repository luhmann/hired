import * as React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { ProjectStore } from '../stores/'


import { cells, maxWidthContainer } from '../styles/style-utils'
import { ProjectList } from '../components/organisms/'
import ProjectListHeader from '../components/organisms/HeaderProjectList'

const Root = styled.section`
  ${ maxWidthContainer() }
  display: grid;
  height: 100vh;
  grid-template-rows: ${cells(8)} 1fr;
`


interface ProjectListPageProps {
  projects: ProjectStore[]
}

@observer
class ProjectListPage extends React.Component<ProjectListPageProps, {}> {
  constructor(props: ProjectListPageProps) {
    super(props)

  }

  render() {
    return (
      <Root>
        <ProjectListHeader />
        <ProjectList projects={this.props.projects} />
      </Root>
    )
  }
}

export default ProjectListPage
