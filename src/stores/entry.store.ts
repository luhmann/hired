import { observable, computed, action, reaction} from 'mobx'
import * as moment from 'moment'
import * as uuid from 'uuid'

import { Fb, StorageEntryInterface } from '../storage/firebase'

class EntryStore {
  @observable startTime: Date
  @observable endTime: Date
  @observable seconds = 0
  tickInterval: any
  id: String

  static fromStorage(id: string, storageObject: StorageEntryInterface) {
    return new this(id, storageObject.startTime, storageObject.endTime)
  }

  constructor(id: string = uuid.v4(), startTime?: number, endTime?: number|null) {
    this.id = id

    if (startTime) {
      this.startTime = new Date(startTime)
    }

    if (endTime) {
      this.endTime = new Date(endTime)
    }

    if (startTime && !endTime) {
      this.startTimer(this.startTime)
    }

    reaction(
      () => ([this.startTime, this.endTime]),
      (changes) => {
        // tslint:disable-next-line
        console.log('in entry reaction', changes)
        Fb.database.ref(`entries/${this.id}`).set(this.toStorage())
      },
      {
        fireImmediately: true
      }
    )
  }

  @computed get running() {
    return !this.endTime
  }

  @computed get duration() {
    if (this.running) {
      return this.seconds
    } else {
      return this.calculateSeconds()
    }
  }

  @action
  startTimer(start: Date = new Date()) {
    this.startTime = start
    this.seconds = this.calculateSeconds()
    this.startTicking()
  }

  @action
  stopTimer(end: Date = new Date()) {
    this.endTime = end
    clearInterval(this.tickInterval)
  }

  toStorage(): StorageEntryInterface {
    return {
      startTime: moment(this.startTime).valueOf(),
      endTime: (this.endTime) ? moment(this.endTime).valueOf() : null
    }
  }

  private startTicking() {
    this.tickInterval = setInterval(
      () => {
        this.tick()
      },
      1000
    )
  }

  private calculateSeconds():number {
    let end = moment((this.endTime) ? this.endTime : +Date.now())
    return moment.duration(end.diff(moment(this.startTime))).asSeconds()
  }

  @action
  private tick() {
    this.seconds += 1
  }

}

export { EntryStore }
