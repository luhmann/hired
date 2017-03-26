import * as moment from 'moment'

const ONE_HOUR = 3600

export function formatDuration(seconds: number): string {
  let format = (seconds < ONE_HOUR) ? 'mm:ss' : 'HH:mm:ss'

  // NOTE: Do not use startOf('day')
  // it will fail on the days when daylight savings is changed
  // TODO: this function is not "correct" in this way, reconsider it
  return moment().startOf('year').seconds(seconds).format(format)
}

export function formatDate(date: Date): string {
  return moment(date).format('dd. DD. MMMM YYYY')
}

export function formatTime(date: Date): string {
  return moment(date).format('HH:mm')
}

export function getPercent(secondsDone: number, hoursToDo: number): number {
  const percent = (secondsDone / (hoursToDo * ONE_HOUR)) * 100
  return percent <= 100 ? percent : 100
}

export function addHours(start: Date, numHours: number): Date {
  return new Date(start.getTime() + (numHours * 3600 * 1000))
}
