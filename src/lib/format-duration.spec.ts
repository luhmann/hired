import { formatDuration } from './format-duration';

describe('Utils: Format-Duration', () => {
  it('should render values shorter than an hour without leading zeroes', () => {
    expect(formatDuration(1800)).toBe('30:00');
  });

  it('should format a trivial number of seconds as HH:mm:ss', () => {
    expect(formatDuration(7468)).toBe('02:04:28');
  });

  it('should render 0 as 00:00:00', () => {
    expect(formatDuration(0)).toBe('00:00');
  });

  it('should render durations longer than a day without any notion of the day', () => {
    expect(formatDuration(90000)).toBe('01:00:00');
  });
});
