import { observable, computed, action } from 'mobx';
import * as moment from 'moment';

class EntryStore {
  @observable startTime: Date;
  @observable endTime: Date;
  @observable running: Boolean;
  @observable seconds = 0;
  tickInterval: any;

  @computed get duration() {
    let start = moment(this.startTime);

    if (this.running) {
      return this.seconds;
    } else {
      let end = moment(this.endTime);
      return moment.duration(end.diff(start)).asSeconds();
    }
  }

  @action
  private tick() {
    this.seconds += 1;
  }

  @action
  startTimer(start: Date = new Date()) {
    this.startTime = start;
    this.running = true;

    this.tickInterval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  @action
  stopTimer(end: Date = new Date()) {
    this.endTime = end;
    this.running = false;
    clearInterval(this.tickInterval);
  }
}

export { EntryStore };
