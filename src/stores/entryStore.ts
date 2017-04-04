import { observable, computed, action } from 'mobx'
import { now } from 'mobx-utils'
import * as moment from 'moment'
import * as uuid from 'uuid'

import { StorageEntryInterface } from '../storage/firebaseRepository'

const STANDARD_RATE = 20

class EntryStore {
  @observable startTime: Date
  @observable endTime: Date
  rate: number
  readonly id: string
  projectId: string

  static fromStorage(storageObject: StorageEntryInterface) {
    return new this({
      id: storageObject.id,
      startTime: storageObject.startTime,
      endTime: storageObject.endTime,
      rate: storageObject.rate,
      projectId: storageObject.projectId
    })
  }

  constructor({
    id = uuid.v4(),
    startTime,
    endTime,
    rate = STANDARD_RATE,
    projectId
  }: { id?: string, startTime?: number, endTime?: number | null, rate?: number, projectId: string }) {
    this.id = id

    if (startTime) {
      this.startTime = new Date(startTime)
    }

    if (endTime) {
      this.endTime = new Date(endTime)
    }

    // if (startTime && !endTime) {
    //   this.startTimer(this.startTime)
    // }

    this.rate = rate

    this.projectId = projectId
  }

  @computed get running() {
    return !!this.startTime && !this.endTime
  }

  @computed get duration() {
    let end = (this.endTime) ? moment(this.endTime).valueOf() : now()
    let duration = (end - moment(this.startTime).valueOf()) / 1000
    return (duration > 0) ? duration : 0
  }

  @computed get total(): number {
    return (this.rate / 3600) * this.duration
  }

  @computed get toStorage(): StorageEntryInterface {
    return {
      id: this.id,
      startTime: moment(this.startTime).valueOf(),
      endTime: (this.endTime) ? moment(this.endTime).valueOf() : null,
      rate: this.rate,
      projectId: this.projectId
    }
  }

  @action
  startTimer(start: Date = new Date()) {
    this.startTime = start
  }

  @action
  stopTimer(end: Date = new Date()) {
    this.endTime = end
  }
}

export default EntryStore
