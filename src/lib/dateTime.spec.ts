import { addHours, formatDate, formatDuration, formatTime, getPercent } from './dateTime'

describe('Lib: dateTime', () => {
  describe('formatDuration', () => {
    it('should render values shorter than an hour without leading zeroes', () => {
      expect(formatDuration(1800)).toBe('30:00')
    })

    it('should format a trivial number of seconds as HH:mm:ss', () => {
      expect(formatDuration(7468)).toBe('02:04:28')
    })

    it('should render 0 as 00:00:00', () => {
      expect(formatDuration(0)).toBe('00:00')
    })

    it('should render durations longer than a day without any notion of the day', () => {
      expect(formatDuration(90000)).toBe('01:00:00')
    })
  })

  describe('formatDate', () => {
    it('should format a valid date to a string', () => {
      const testDate = new Date(2015, 0, 22)

      expect(formatDate(testDate)).toBe('Th. 22. January 2015')
    })
  })

  describe('formatTime', () => {
    it('should format a valid date into a string containing the hours and minutes', () => {
      const testDate = new Date(2015, 0, 22, 11, 15, 12)

      expect(formatTime(testDate)).toBe('11:15')
    })
  })

  describe('getPercent', () => {
    describe('when secondsDone < hoursToDo', () => {
      it('should return the correct percentage', () => {
        expect(getPercent(3600, 8)).toBe(12.5)
      })
    })

    describe('when secondsDone > hoursToDo', () => {
      it('should return 100', () => {
        expect(getPercent(7200, 1)).toBe(100)
      })
    })
  })

  describe('addHours', () => {
    it('should correctly add less than a day in hours to a date', () => {
      const expected = new Date(2015, 0, 22, 14, 0)
      const subject = addHours(new Date(2015, 0, 22, 12, 0), 2)

      expect(subject).toBeInstanceOf(Date)
      expect(subject.getTime()).toBe(expected.getTime())
    })

    it('should correctly add more than a day in hours to a date', () => {
      const expected = new Date(2015, 0, 25, 16, 0)
      const subject = addHours(new Date(2015, 0, 22, 12, 0), 76)

      expect(subject).toBeInstanceOf(Date)
      expect(subject.getTime()).toBe(expected.getTime())
    })

    it('should correctly jump over a month boundary', () => {
      const expected = new Date(2015, 1, 1, 12, 0)
      const subject = addHours(new Date(2015, 0, 22, 12, 0), 240)

      expect(subject).toBeInstanceOf(Date)
      expect(subject.getTime()).toBe(expected.getTime())
    })
  })
})
