import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { observer } from 'mobx-react'
import styled, { injectGlobal } from 'styled-components'

import EntryListStore from '../../stores/entryListStore'
import { EntryStore } from '../../stores/entryStore'
import Entry from './Entry'

interface EntryListProps {
  entryList: EntryListStore,
  projectId: string
}

/* tslint:disable no-unused-expression  */
injectGlobal`
  .entry-enter {
    opacity: 0.01;
  }

  .entry-enter.entry-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .entry-leave {
    opacity: 1;
  }

  .entry-leave.entry-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  .entry-appear {
    opacity: 0.01;
  }

  .entry-appear.entry-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }
`

const Root = styled.section`
  overflow: auto;
`

@observer
class EntryList extends React.Component<EntryListProps, {}> {
  render() {
    return (
      <Root>
        <ReactCSSTransitionGroup
          transitionName="entry"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
          {
            this.props.entryList
              .getFinishedEntriesForProject(this.props.projectId)
              .map((entry: EntryStore, index: number) => (
                <Entry
                  key={entry.id}
                  start={entry.startTime}
                  end={entry.endTime}
                  duration={entry.duration}
                  running={entry.running}
                  total={entry.total}
                />
            ))
          }
        </ReactCSSTransitionGroup>
      </Root>
    )
  }
}

export default EntryList
