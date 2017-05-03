import * as React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import { color, maxWidthContainer } from '../styles/style-utils'

import { RootStore } from '../stores/'
import Router from '../lib/router'
import { VIEW_NAMES } from '../stores/uiStore'

import InputTextWithLabel from '../components/molecules/InputTextWithLabel'
import InputNumberWithLabel from '../components/molecules/InputNumberWithLabel'
import HeaderSave from '../components/organisms/HeaderSave'

export interface NewProjectProps {
  rootStore?: RootStore
  router?: Router
}

interface NewProjectState {
  name: string
  rate: number
  description?: string
}

const Root = styled.div`
  ${ maxWidthContainer() }
`

const Form = styled.section`
  background-color: ${color.white};
`

@inject('rootStore')
@inject('router')
@observer
class ProjectAddPage extends React.Component<NewProjectProps, NewProjectState> {

  constructor(props: NewProjectProps) {
    super(props)

    this.cancelHandler = this.cancelHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.saveHandler = this.saveHandler.bind(this)

    this.state = {
      name: '',
      rate: 0,
      description: undefined
    }
  }

  changeHandler(field: 'name' | 'rate' | 'description'): React.EventHandler<React.FormEvent<HTMLElement>> {
    return (event: React.KeyboardEvent<HTMLInputElement>) => (
      this.setState(Object.assign({}, this.state, { [field] : event.currentTarget.value}))
    )
  }

  saveHandler(event: React.MouseEvent<HTMLElement>) {
    if (this.props.rootStore && this.props.router) {
      this.props.rootStore.projectListStore.add(this.state.name, Number(this.state.rate), this.state.description)
      this.props.router.navigate(VIEW_NAMES.projectList)
    }
  }

  cancelHandler(event: React.MouseEvent<HTMLElement>) {
    if (this.props.rootStore && this.props.router) {
      this.props.router.navigate(VIEW_NAMES.projectList)
    }
  }

  render() {
    return (
      <Root>
        <HeaderSave
          cancelHandler={this.cancelHandler}
          saveHandler={this.saveHandler}
          title="Add Project"
        />
        <Form>
          <InputTextWithLabel
            id="project-name"
            label="Name"
            placeholder="Project name is required"
            changeHandler={this.changeHandler('name')}
          />
          <InputNumberWithLabel
            id="standard-rate"
            label="Rate"
            placeholder="Earnings per hour"
            unit="EUR"
            changeHandler={this.changeHandler('rate')}
          />
          <InputTextWithLabel
            id="description"
            label="Description"
            placeholder="Description is optional"
            changeHandler={this.changeHandler('description')}
          />
        </Form>
      </Root>
    )
  }
}

export default ProjectAddPage
