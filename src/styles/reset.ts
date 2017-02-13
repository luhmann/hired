import { injectGlobal } from 'styled-components'

injectGlobal`
* {
    box-sizing: border-box;
    text-rendering: geometricPrecision;
  }

  html {
    font-size: 12px;
    font-style: normal;
    font-family: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  /**
 * Form
 */
.form {
  width: 30rem
}

fieldset {
  border: none;
}

.form-group {
  margin-bottom: 1.75rem;
  overflow: auto;
  & label {
    border-bottom: 2px solid #ccc;
    color: #333;
    width: 10rem;
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0;
    float: left;
    position: relative;
  }

  &.form-success label {
    @mixin form-label $green;
  }

  &.form-warning label {
    @mixin form-label $orange;
  }

  &.form-error label {
    @mixin form-label $red;
  }
}

.form-control {
  outline: none;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: .5rem 0;
  width: 20rem;
  height: 38px;
  background-color: transparent;
  &:focus {
    border-color: #555;
  }
}

.form-group.form-textarea label:after {
  position: absolute;
  content: '';
  width: 2px;
  background-color: white;
  right: -2px;
  top: 0;
  bottom: 0;
}

textarea.form-control {
  height: auto;
  resize: none;
  padding: 1rem 0;
  border-bottom: 2px solid #ccc;
  border-left: 2px solid #ccc;
  padding: .5rem;
}

select.form-control {
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}
`
