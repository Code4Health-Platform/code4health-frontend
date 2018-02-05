import {addLocaleData} from 'react-intl'

import en from 'react-intl/locale-data/en'
import se from 'react-intl/locale-data/se'

export default function configureLocales () {
  addLocaleData([...en, ...se])
}

// workaround for react-intl only supporting flat messages
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
function flattenMessages (nestedMessages, prefix = '') {
  if (nestedMessages) {
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
  } else {
    return {}
  }
}

export {configureLocales, flattenMessages}
