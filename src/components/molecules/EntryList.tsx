import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { observer } from 'mobx-react'
import { injectGlobal } from 'styled-components'

import EntryListStore from '../../stores/entryListStore'
import { EntryStore } from '../../stores/entryStore'
import Entry from './Entry'

interface EntryListProps {
  className?: string
  entryList: EntryListStore,
  projectId: string
}

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

@observer
class EntryList extends React.Component<EntryListProps, {}> {
  render() {
    return (
      <div className={this.props.className}>
        <ReactCSSTransitionGroup
          transitionName="entry"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
          {
            this.props.entryList.getEntriesForProject(this.props.projectId).map((entry: EntryStore, index: number) => (
              <Entry
                key={entry.id}
                start={entry.startTime}
                end={entry.endTime}
                duration={entry.duration}
                total={entry.total}
              />
            ))
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default EntryList
