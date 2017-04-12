import { get } from 'lodash'

import { isDev } from '../lib/env'
import * as log from '../lib/log'

const translationMap = Object.freeze({
  entryList: {
    empty: 'You do not have entries so far. Hit the big green button!'
  },
  projectPage: {
    empty: 'You have no projects yet. Use the "+" to configure some.'
  }
})

const translate = (key: string): string  => {
  const translation = get(translationMap, key, null)

  if (translation === null) {
    log.error('[i18n]: Could not find translation for key', key)
  }

  return translation || (isDev() ? `[MISSING TRANSLATION FOR KEY ${key}]` : '')
}

export {
  translate
}
