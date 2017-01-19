import * as moment from 'moment';

const ONE_HOUR = 3600;

export function formatDuration(seconds: number): string {
  let format = (seconds < ONE_HOUR) ? 'mm:ss' : 'HH:mm:ss';

  return moment().startOf('day').seconds(seconds).format(format);
}
