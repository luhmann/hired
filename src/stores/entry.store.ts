import { observable, computed, action } from 'mobx';
import * as moment from 'moment';

class EntryStore {
  @observable startTime: Date;
  @observable endTime: Date;
  @observable running: Boolean;
  @observable seconds = 0;

  @computed get duration() {
    let start = moment(this.startTime);

    if (this.running) {
      return this.seconds;
    } else {
      let end = moment(this.endTime);
      return moment.duration(end.diff(start)).asSeconds();
    }
  }

  @computed get start() {
    return moment(this.startTime).format('hh:mm');
  }

  @computed get end() {
    if (!this.running) {
      return moment(this.endTime).format('hh:mm');
    } else {
      return '';
    }

  }

  @action
  startTimer(start: Date = new Date()) {
    this.startTime = start;
    this.running = true;

    setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }

  @action
  stopTimer(end: Date = new Date()) {
    this.endTime = end;
    this.running = false;
  }
}

export { EntryStore };
