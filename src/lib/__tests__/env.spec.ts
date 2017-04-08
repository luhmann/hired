import * as env from '../env'

describe('env', () => {
  it('should provide the correct backend-base-url', () => {
    expect(env.BACKEND_BASE_URL).toMatchSnapshot()
  })

  it('should construct a backend url', () => {
    expect(env.backendUrl('/foo/bar')).toMatchSnapshot()
  })

  it('should determine if we are in dev-mode', () => {
    expect(env.isDev()).toBe(false)
  })
})