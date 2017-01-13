import * as React from 'react';
import { observer } from 'mobx-react';
import {TimerStore} from '../stores/timer.store';

@observer
class Timer extends React.Component<{ timerStore: TimerStore }, {}> {
  render() {
    return (
      <div>
        <div>Seconds passed: {this.props.timerStore.timer}</div>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }

  onReset = () => {
    this.props.timerStore.setTimer(0);
  }
}

export default Timer;
