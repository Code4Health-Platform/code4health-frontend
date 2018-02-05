import * as constants from '@constants/locale'

import {ENGLISH_TRANSLATION} from '@messages/en'

export const switchLocale = locale => {
  return {
    type: constants.LOCALE_SWITCHED,
    locale: locale
  }
}

export const initialState = {
  locale: {
    lang: ENGLISH_TRANSLATION.lang,
    messages: ENGLISH_TRANSLATION.messages
  }
}
