import * as React from 'react'

import { Body } from './atoms/Containers'
import InputTextWithLabel from './molecules/InputTextWithLabel'
import InputNumberWithLabel from './molecules/InputNumberWithLabel'
import HeaderSave from './organisms/HeaderSave'


const NewProject = () => (
  <div>
    <HeaderSave title="Add new Project" />
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

export default NewProject
