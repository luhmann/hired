import * as React from 'react'

const NewProject = () => (
  <form>
    <fieldset className="form-group">
      <label htmlFor="project-name">Project Name</label>
      <input className="form-control" id="project-name" type="text" placeholder="Project Name" />
    </fieldset>
  </form>
)

export default NewProject
