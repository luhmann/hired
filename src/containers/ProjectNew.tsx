import * as React from 'react'
import { inject, observer } from 'mobx-react'

import RootStore from '../stores/rootStore'
import { ROUTE_NAMES } from '../lib/router'

import { Body } from '../components/atoms/Containers'
import InputTextWithLabel from '../components/molecules/InputTextWithLabel'
import InputNumberWithLabel from '../components/molecules/InputNumberWithLabel'
import HeaderSave from '../components/organisms/HeaderSave'

interface NewProjectProps {
  rootStore?: RootStore
}

@inject('rootStore')
@observer
class NewProject extends React.Component<NewProjectProps, {}> {

  constructor(props: NewProjectProps) {
    super(props)

    this.saveHandler = this.saveHandler.bind(this)
    this.cancelHandler = this.cancelHandler.bind(this)
  }

  saveHandler(event: React.MouseEvent<any>) {
    console.log('Called saveHandler', this)
  }


  cancelHandler(event: React.MouseEvent<any>) {
    console.log(this)
    if (this.props.rootStore) {
      this.props.rootStore.router.instance.navigate(ROUTE_NAMES.projectList)
    }
  }

  render() {
    return (
      <div>
        <HeaderSave
          cancelHandler={this.cancelHandler}
          saveHandler={this.saveHandler}
          title="Add new Project"
        />
        <Body>
          <InputTextWithLabel
            id="project-name"
            label="Name"
            placeholder="Project name is required"
          />
          <InputNumberWithLabel
            id="standard-rate"
            label="Rate"
            placeholder="Earnings per hour"
            unit="EUR"
          />
          <InputTextWithLabel
            id="description"
            label="Description"
            placeholder="Description is optional"
          />
        </Body>
      </div>
    )
  }
}

export default NewProject
