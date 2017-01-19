import * as moment from 'moment';

export function formatDuration(duration: number): string {
  return moment().startOf('day').seconds(duration).format('HH:mm:ss');
}
