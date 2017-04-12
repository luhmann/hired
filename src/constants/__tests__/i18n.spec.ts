import { translate } from '../i18n'

describe('i18n', () => {
  it('should return the correct string for an existing key', () => {
    expect(translate('entryList.empty')).toMatchSnapshot()
  })

  it('should return empty string for an unknown key', () => {
    expect(translate('foo.bar.buzz')).toBe('')
  })
})
