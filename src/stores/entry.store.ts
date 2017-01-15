import { observable, computed, action, reaction} from 'mobx';
import * as moment from 'moment';
import * as uuid from 'node-uuid';

import { Fb, IStorageObject } from '../storage/firebase';

class EntryStore {
  @observable startTime: Date;
  @observable endTime: Date;
  @observable running: Boolean;
  @observable seconds = 0;
  tickInterval: any;
  id: String;

  constructor(id = uuid.v4(), startTime?:any, endTime?:any, running:Boolean = false) {
    this.id = id;

    if (startTime) this.startTime = new Date(startTime);
    if (endTime) this.endTime = new Date(endTime);
    this.running = running;


    reaction(
      () => ([this.startTime, this.endTime, this.running]),
      (changes) => {
        console.log('in entry reaction', changes);
        Fb.database.ref(`entries/${this.id}`).set(this.toStorage());
      },
      {
        fireImmediately: true
      }
    );
  }

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

  toStorage(): IStorageObject {
    return {
      startTime: moment(this.startTime).valueOf(),
      endTime: (this.endTime) ? moment(this.endTime).valueOf() :  null,
      running: this.running
    }
  }

  static fromStorage(id: string, storageObject: IStorageObject) {
    return new this(id, storageObject.startTime, storageObject.endTime, storageObject.running);
  }

  @action
  private tick() {
    this.seconds += 1;
  }

}

export { EntryStore };
