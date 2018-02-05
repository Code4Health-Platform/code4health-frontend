import {addLocaleData} from 'react-intl'

import en from 'react-intl/locale-data/en'
import se from 'react-intl/locale-data/se'

export default function ConfigureLocales () {
  addLocaleData([...en, ...se])
}

export {en, se}

// workaround for react-intl only supporting flat messages
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
export function flattenMessages (nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      messages[prefixedKey] = value
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}
