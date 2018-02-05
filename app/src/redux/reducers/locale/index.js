import * as constants from '@constants/locale'
import {ENGLISH_TRANSLATION} from '@messages/en'
import {SWEDISH_TRANSLATION} from '@messages/se'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.LOCALE_SWITCHED:
      switch (action.locale) {
        case 'en':
          return { ...state,
            lang: ENGLISH_TRANSLATION.lang,
            messages: ENGLISH_TRANSLATION.messages }
        case 'se':
          return { ...state,
            lang: SWEDISH_TRANSLATION.lang,
            messages: SWEDISH_TRANSLATION.messages }
        default:
          return { ...state,
            lang: ENGLISH_TRANSLATION.lang,
            messages: ENGLISH_TRANSLATION.messages }
      }
  }
  return state
}
