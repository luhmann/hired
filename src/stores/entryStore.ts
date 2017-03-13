import { observable, computed, action } from 'mobx'
import { now } from 'mobx-utils'
import * as moment from 'moment'
import * as uuid from 'uuid'

import { StorageEntryInterface } from '../storage/firebaseRepository'

const STANDARD_RATE = 20

class EntryStore {
  @observable startTime: Date
  @observable endTime: Date
  @observable seconds = 0
  rate: number
  tickInterval: any
  id: string
  projectId: string

  static fromStorage(id: string, storageObject: StorageEntryInterface) {
    return new this({
      id,
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
  }: { id?: string, startTime?: number, endTime?: number | null, rate: number, projectId: string }) {
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

    this.rate = rate

    this.projectId = projectId
  }

  @computed get running() {
    return !this.endTime
  }

  @computed get duration() {
    let end = (this.endTime) ? this.endTime.getTime() : now()
    return (end - this.startTime.getTime()) / 1000
  }

  @computed get total() {
    return (this.rate / 3600) * this.duration
  }

  @action
  startTimer(start: Date = new Date()) {
    this.startTime = start
  }

  @action
  stopTimer(end: Date = new Date()) {
    this.endTime = end
    clearInterval(this.tickInterval)
  }

  toStorage(): StorageEntryInterface {
    return {
      id: this.id,
      startTime: moment(this.startTime).valueOf(),
      endTime: (this.endTime) ? moment(this.endTime).valueOf() : null,
      rate: this.rate,
      projectId: this.projectId
    }
  }

}

export { EntryStore }
