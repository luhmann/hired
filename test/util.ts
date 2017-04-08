import { ReactWrapper } from 'enzyme'

const enterText = (subject: ReactWrapper<any, any>, text: any): void => {
  subject.node.value = text
  subject.simulate('change')
}

export { enterText }
