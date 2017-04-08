import * as mobx from 'mobx'

import { EntryStore } from '../'
import { MOCK_ENTRIES } from '../../../test/mockData'

describe('EntryStore', () => {
  let subject: EntryStore

  const TEST_DATA = MOCK_ENTRIES[0]

  beforeEach(() => {
    mobx.extras.resetGlobalState()
    jest.mock('mobx-utils')
  })

  describe('Initialize', () => {
    it('should initialize with constructor', () => {
      subject = new EntryStore({
        id: TEST_DATA.id,
        startTime: TEST_DATA.startTime,
        endTime: TEST_DATA.endTime,
        rate: TEST_DATA.rate,
        projectId: TEST_DATA.projectId
      })

      expect(subject.id).toBe(TEST_DATA.id)
      expect(subject.startTime).toEqual(new Date(TEST_DATA.startTime))
      expect(subject.endTime).toEqual(new Date(TEST_DATA.endTime))
      expect(subject.rate).toBe(TEST_DATA.rate)
      expect(subject.projectId).toBe(TEST_DATA.projectId)
    })

    it('should initialize with constructor when optional data is omitted', () => {
      subject = new EntryStore({
        projectId: TEST_DATA.projectId
      })

      expect(subject.id).toMatch(/[\w\d]{8}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{12}/)
      expect(subject.startTime).toBe(undefined)
      expect(subject.endTime).toBe(undefined)
      expect(subject.rate).toBe(20)
      expect(subject.projectId).toBe(TEST_DATA.projectId)
    })

    it('should initialize with static method', () => {
      subject = EntryStore.fromStorage({
        id: TEST_DATA.id,
        startTime: TEST_DATA.startTime,
        endTime: TEST_DATA.endTime,
        rate: TEST_DATA.rate,
        projectId: TEST_DATA.projectId
      })

      expect(subject.id).toBe(TEST_DATA.id)
      expect(subject.startTime).toEqual(new Date(TEST_DATA.startTime))
      expect(subject.endTime).toEqual(new Date(TEST_DATA.endTime))
      expect(subject.rate).toBe(TEST_DATA.rate)
      expect(subject.projectId).toBe(TEST_DATA.projectId)
    })

    // these are handled by the typescript compiler, still valid tests
    it('should error when invoked with empty constructor', () => {
      expect(() => { new EntryStore() }).toThrow()
    })

    it('should error when static method is invoked with no data', () => {
      expect(() => { EntryStore.hydrate() }).toThrow()
    })
  })

  describe('Derivations', () => {
    it('should determine running entry => true', () => {
      subject = new EntryStore({
        startTime: TEST_DATA.startTime,
        projectId: TEST_DATA.projectId
      })

      expect(subject.running).toBe(true)
    })

    it('should determine running entry => false - never started', () => {
      subject = new EntryStore({
        projectId: TEST_DATA.projectId
      })

      expect(subject.running).toBe(false)
    })

    it('should determine running entry => false - completed', () => {
      subject = new EntryStore({
        startTime: TEST_DATA.startTime,
        endTime: TEST_DATA.endTime,
        projectId: TEST_DATA.projectId
      })

      expect(subject.running).toBe(false)
    })

    it('should calculate duration - finished timer', () => {
      subject = new EntryStore({
        startTime: TEST_DATA.startTime,
        endTime: TEST_DATA.endTime,
        projectId: TEST_DATA.projectId
      })

      expect(subject.duration).toMatchSnapshot()
    })

    it('should calculate duration - running timer', () => {
      subject = subject = new EntryStore({
        startTime: TEST_DATA.startTime,
        projectId: TEST_DATA.projectId
      })

      expect(subject.duration).toMatchSnapshot()
    })

    it('should calculate total', () => {
      subject = new EntryStore({
        startTime: TEST_DATA.startTime,
        endTime: TEST_DATA.endTime,
        projectId: TEST_DATA.projectId,
        rate: TEST_DATA.rate
      })

      expect(subject.total).toMatchSnapshot()
    })

    it('should serialize the data', () => {
      subject = new EntryStore({
        id: TEST_DATA.id,
        startTime: TEST_DATA.startTime,
        endTime: TEST_DATA.endTime,
        rate: TEST_DATA.rate,
        projectId: TEST_DATA.projectId
      })

      expect(subject.toStorage).toMatchSnapshot()
    })
  })

  describe('Actions', () => {
    beforeEach(() => {
      subject = new EntryStore({
        projectId: TEST_DATA.projectId
      })
    })

    it('should start timer with current date', () => {
      subject.startTimer()

      expect(subject.startTime).toEqual(expect.any(Date))
    })

    it('should start timer on the provided date', () => {
      subject.startTimer(new Date(TEST_DATA.startTime))

      expect(subject.startTime).toEqual(new Date(TEST_DATA.startTime))
    })

    it('should stop timer on current date if none provided', () => {
      subject.stopTimer()
      expect(subject.endTime).toEqual(expect.any(Date))
    })

    it('should stop timer on the provided date', () => {
      subject.stopTimer(new Date(TEST_DATA.endTime))

      expect(subject.endTime).toEqual(new Date(TEST_DATA.endTime))
    })
  })
})