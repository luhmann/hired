import * as React from 'react'
import { inject, observer } from 'mobx-react'

import RootStore from '../stores/rootStore'
import { ROUTE_NAMES } from '../lib/router'

import InputTextWithLabel from '../components/molecules/InputTextWithLabel'
import InputNumberWithLabel from '../components/molecules/InputNumberWithLabel'
import HeaderSave from '../components/organisms/HeaderSave'

interface NewProjectProps {
  rootStore?: RootStore
}

interface NewProjectState {
  name: string
  rate: number
  description?: string
}

@inject('rootStore')
@observer
class NewProject extends React.Component<NewProjectProps, NewProjectState> {

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

  changeHandler(field: 'name' | 'rate' | 'description'): React.EventHandler<any> {
    return (event: React.KeyboardEvent<HTMLInputElement>) => (
      this.setState(Object.assign({}, this.state, { [field] : event.currentTarget.value}))
    )
  }

  saveHandler(event: React.MouseEvent<any>) {
    if (this.props.rootStore) {
      this.props.rootStore.projectListStore.add(this.state.name, this.state.rate, this.state.description)
      this.props.rootStore.router.navigate(ROUTE_NAMES.projectList)
    }
  }

  cancelHandler(event: React.MouseEvent<any>) {
    if (this.props.rootStore) {
      this.props.rootStore.router.navigate(ROUTE_NAMES.projectList)
    }
  }

  render() {
    return (
      <div>
        <HeaderSave
          cancelHandler={this.cancelHandler}
          saveHandler={this.saveHandler}
          title="Add Project"
        />
        <section>
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
        </section>
      </div>
    )
  }
}

export default NewProject
