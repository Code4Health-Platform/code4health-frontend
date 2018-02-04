import * as constants from '@constants/locale'

export const switchLocale = locale => {
  return {
    type: constants.LOCALE_SWITCHED,
    locale: locale
  }
}
